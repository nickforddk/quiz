import React, { useEffect, useState } from 'react';
import {
  listQuizzes, createQuiz, deleteQuiz, setActiveQuiz,
  getQuiz, updateQuiz, clearAllAnswers, restartQuiz,
  endQuiz, openRound, revealAnswers, setCurrentQuestion,
  setScoreboardVisible, clearAllAnswersAndResetUsers
} from '../../services/quizService';

interface EditingQuiz {
  id?: string;
  name: string;
  questionsText: string;
}

export default function QuizManager({ state }: { state:any }) {
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [activeQuiz, setActiveQuizLocal] = useState<any|null>(null);
  const [editing, setEditing] = useState<EditingQuiz|null>(null);
  const [loading, setLoading] = useState(false);
  const activeId = state?.activeQuizId;

  async function refresh() {
    setQuizzes(await listQuizzes());
    if (activeId) {
      const q = await getQuiz(activeId);
      setActiveQuizLocal(q);
    } else setActiveQuizLocal(null);
  }

  useEffect(() => { refresh(); }, [activeId]);

  function parseQuestions(text:string) {
    // Format: Each question block separated by blank line
    // Line1: Question text
    // Next up to 4 lines: option* (prefix * marks correct)
    const blocks = text.split(/\n\s*\n/).map(b=>b.trim()).filter(Boolean);
    return blocks.map((block, idx) => {
      const lines = block.split('\n').map(l=>l.trim()).filter(Boolean);
      const question = lines[0];
      const opts:string[] = [];
      let correct = '';
      lines.slice(1).forEach(l => {
        const isCorrect = l.startsWith('*');
        const opt = l.replace(/^\*/, '').trim();
        if (opt) {
          opts.push(opt);
          if (isCorrect) correct = opt;
        }
      });
      if (!correct && opts.length) correct = opts[0];
      return {
        id: 'q'+(idx+1),
        text: question,
        options: opts.slice(0,4),
        correct
      };
    });
  }

  async function saveQuiz() {
    if (!editing) return;
    setLoading(true);
    try {
      const questions = parseQuestions(editing.questionsText);
      if (editing.id) {
        await updateQuiz(editing.id, { name: editing.name, questions });
      } else {
        const id = await createQuiz(editing.name, questions);
        if (!state.activeQuizId) await setActiveQuiz(id);
      }
      setEditing(null);
      await refresh();
    } finally { setLoading(false); }
  }

  function formatQuestionsForEdit(q:any) {
    const arr = Array.isArray(q?.questions) ? q.questions : [];
    if (!arr.length) {
      // Provide a minimal template when empty
      return 'Sample question?\n*Option A\nOption B';
    }
    return arr.map((qq:any) => {
      const opts = (qq.options || []).map((o:string) => (o === qq.correct ? '*'+o : o)).join('\n');
      return qq.text + '\n' + opts;
    }).join('\n\n');
  }

  return (
    <div className="space-y-4 max-w-4xl ml-auto mr-auto">
      <div className="flex gap-2 flex-wrap items-center justify-between">
        <h2 className="text-xl font-semibold mr-auto">Quizzes</h2>
        <button
          className="px-3 py-1 bg-blue-700 text-white dark:bg-blue-200 dark:text-blue-700 rounded cursor-pointer hover:bg-blue-600 hover:text-white border border-transparent"
          onClick={()=>setEditing({ name:'New Quiz', questionsText:'Question 1?\n*Option A\nOption B\n\nQuestion 2?\n*Yes\nNo', id: undefined })}
        >New quiz</button>
        <button className="px-3 py-1 border rounded hover:bg-blue-600 hover:text-white hover:border-transparent cursor-pointer" onClick={refresh}>Refresh</button>
      </div>
      <div className="grid gap-2 w-full">
        {quizzes.map(q => (
          <div key={q.id} className={`rounded p-4 py-3 flex flex-col gap-2 ${q.id===activeId?'bg-white dark:bg-blue-700 dark:text-white':'bg-grey-400 dark:bg-blue-800 dark:text-white'}`}>
            <div className="flex justify-between gap-4">
              <span className="font-medium">{q.name}</span>
              <div className="flex gap-2">
                <button
                  className="text-sm px-2 py-1 border rounded cursor-pointer hover:bg-blue-600 hover:text-white hover:border-transparent"
                  onClick={() =>
                    setEditing({
                      id: q.id,
                      name: q.name || 'Untitled',
                      questionsText: formatQuestionsForEdit(q)
                    })
                  }
                >Edit</button>
                <button
                  className="text-sm px-2 py-1 border rounded cursor-pointer hover:bg-alert hover:text-black hover:border-transparent"
                  disabled={q.id===activeId}
                  onClick={()=>deleteQuiz(q.id).then(refresh).catch(e=>alert(e.message))}
                >Delete</button>
                {q.id!==activeId && <button
                  className="text-sm px-2 py-1 bg-blue-700 text-white dark:bg-blue-200 dark:text-blue-700 rounded cursor-pointer hover:bg-blue-600 hover:text-white border border-transparent"
                  onClick={()=>setActiveQuiz(q.id)}
                >Activate</button>}
              </div>
            </div>
            <div className="text-xs text-grey-600 dark:text-blue-300">
              {q.questions?.length || 0} questions
            </div>
          </div>
        ))}
        {!quizzes.length && <div className="text-sm italic">No quizzes yet.</div>}
      </div>

      {editing && (
        <div className="bg-white dark:bg-blue-700 dark:text-white rounded p-4 space-y-2">
          <h3 className="font-semibold">{editing.id?'Edit quiz':'Create quiz'}</h3>
          <input
            className="border border-grey-500 hover:border-blue-600 w-full px-2 py-1 rounded"
            value={editing.name}
            onChange={e=>setEditing({...editing, name:e.target.value})}
            placeholder="Quiz name"
          />
          <textarea
            className="border border-grey-500 hover:border-blue-600 w-full p-2 rounded h-56 font-mono text-xs"
            value={editing.questionsText}
            onChange={e=>setEditing({...editing, questionsText:e.target.value})}
          />
          <div className="flex gap-2">
            <button
              className="px-3 py-1 bg-blue-700 text-white dark:bg-blue-200 dark:text-blue-700 rounded cursor-pointer hover:bg-blue-600 hover:text-white border border-transparent disabled:bg-grey-500 disabled:text-grey-200 disabled:cursor-not-allowed"
              disabled={loading}
              onClick={saveQuiz}
            >Save</button>
            <button className="px-3 py-1 border rounded hover:bg-blue-600 hover:text-white hover:border-transparent cursor-pointer" onClick={()=>setEditing(null)}>Cancel</button>
          </div>
          <p className="text-xs text-gray-500">
            Format: Question line, then each option line (prefix * for correct). Separate questions with a blank line.
          </p>
        </div>
      )}

      {activeQuiz && (
        <div className="bg-grey-500 text-white rounded p-4 space-y-2">
          <h3 className="text-white">Active quiz: {activeQuiz.name}</h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 border rounded hover:bg-blue-600 hover:text-white hover:border-transparent cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none disabled:text-grey-300"
              disabled={state.currentQuestion<=0}
              onClick={()=>setCurrentQuestion(state.currentQuestion-1)}>Prev</button>
            <button className="px-3 py-1 border rounded hover:bg-blue-600 hover:text-white hover:border-transparent cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none disabled:text-grey-300"
              disabled={state.currentQuestion>=activeQuiz.questions.length-1}
              onClick={()=>setCurrentQuestion(state.currentQuestion+1)}>Next</button>
            {!state.open && !state.ended && <button className="px-3 py-1 bg-blue-700 hover:bg-blue-600 text-white rounded border border-transparent cursor-pointer" onClick={()=>openRound(true)}>Open Round</button>}
            {state.open && <button className="px-3 py-1 bg-white text-cyan-600 rounded border border-transparent hover:bg-blue-600 hover:text-white cursor-pointer" onClick={()=>openRound(false)}>Close Round</button>}
            {!state.reveal && !state.open && !state.ended && <button className="px-3 py-1 bg-blue-700 hover:bg-blue-600 text-white rounded border border-transparent cursor-pointer" onClick={()=>revealAnswers(true)}>Reveal Answers</button>}
            {state.reveal && !state.ended && <button className="px-3 py-1 bg-white text-cyan-600 rounded border border-transparent hover:bg-blue-600 hover:text-white cursor-pointer" onClick={()=>revealAnswers(false)}>Hide Answers</button>}
            

            <button
              onClick={()=>setScoreboardVisible(!state.scoreboardVisible)}
              className={[
                'px-3 py-1 rounded cursor-pointer transition border border-transparent hover:bg-blue-600 hover:text-white',
                state.scoreboardVisible
                  ? 'bg-white text-cyan-600'
                  : 'bg-blue-700 text-white'
              ].join(' ')}
            >
              {state.scoreboardVisible ? 'Hide Scoreboard' : 'Show Scoreboard'}
            </button>


            {!state.ended && <button className="px-3 py-1 border rounded hover:bg-orange-400 hover:text-black hover:border-transparent cursor-pointer" onClick={()=>restartQuiz()}>Restart Quiz</button>}
            {!state.ended && <button className="px-3 py-1 bg-red-600 text-white hover:bg-red-400 hover:text-black rounded border border-transparent cursor-pointer" onClick={()=>{ if(confirm('End quiz?')) endQuiz(); }}>End Quiz</button>}
            {state.ended && <div className="px-3 py-1 bg-red-200 text-red-500 rounded border border-transparent">Quiz ended</div>}
            <button
              className="px-3 py-1 border rounded hover:bg-orange-400 hover:text-black hover:border-transparent cursor-pointer"
              onClick={() => {
                if (confirm('Clear all student answers AND force all users to re-enter their name?')) {
                  clearAllAnswersAndResetUsers().catch(console.error);
                }
              }}
            >
              Clear Users
            </button>

            <button className="px-3 py-1 border rounded hover:bg-blue-600 hover:text-white hover:border-transparent cursor-pointer" onClick={()=>setActiveQuiz(null)}>Deactivate</button>
          </div>
          <div className="text-xs">
            Q{state.currentQuestion+1}/{activeQuiz.questions.length} | Open: {state.open? 'Yes':'No'} | Reveal: {state.reveal? 'Yes':'No'}
          </div>
        </div>
      )}
    </div>
  );
}