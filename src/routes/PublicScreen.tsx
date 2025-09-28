import React, { useEffect, useState } from 'react';
import { listenQuizState, listenAnswers, computeScores, getQuiz } from '../services/quizService';

export default function PublicScreen() {
  const [state, setState] = useState<any|null>(null);
  const [quiz, setQuiz] = useState<any|null>(null);
  const [answers, setAnswers] = useState<any[]>([]);

  useEffect(() => {
    const unsubState = listenQuizState(async s => {
      setState(s);
      if (s?.activeQuizId) {
        const q = await getQuiz(s.activeQuizId).catch(()=>null);
        setQuiz(q);
      } else setQuiz(null);
    });
    const unsubAnswers = listenAnswers(setAnswers);
    return () => { unsubState(); unsubAnswers(); };
  }, []);

  if (!state || !quiz) return (
    <div className="space-y-8 h-screen fullscreen">
      <div className="p-8 text-2xl h-full flex flex-col gap-4 justify-center items-center">
        <span className="qrcode size-50"></span>
        git.nickford.com/quiz
      </div>
    </div>
  );
  const q = quiz.questions[state.currentQuestion];
  if (!q) return <div className="p-8">No question.</div>;

  // Only compute & display counts after the round is CLOSED (state.open === false)
  const counts = q.options.reduce((a:any,o:string)=>{a[o]=0;return a;}, {});
  if (!state.open) {
    answers.forEach(a => {
      const ans = a.answers?.[q.id];
      if (ans && counts[ans.answer] !== undefined) counts[ans.answer] += 1;
    });
  }

  const scores = computeScores(state, answers, quiz.questions);
  const showCounts = !state.open; // keep existing count logic
  const showScoreboard = !!state.scoreboardVisible; // NEW

  return (
    <>
    <div className="h-screen w-screen fullscreen flex flex-col md:flex-row md:gap-8 justify-between">
      <div className="space-y-4 h-full w-full flex flex-col md:justify-center overflow-auto">
        <div className="flex flex-row justify-between text-sm font-semibold text-gray-500">
          <span>Q{state.currentQuestion+1} / {quiz.questions.length}</span>
        </div>
        <h2 className="mb-8">{q.text}</h2>
        <div className="grid gap-4 md:grid-cols-2 auto-rows-fr w-full">
          {q.options.map((o:string) => {
            const count = counts[o];
            const correct = state.reveal && q.correct === o;
            return (
              <div key={o} className={[
                'p-4 pr-12 rounded border relative',
                !correct && state.reveal && 'text-grey-500',
                correct && 'border-green-600 dark:border-green-300 bg-green-500 text-white'
              ].filter(Boolean).join(' ')}>
                <div className="font-semibold min-h-8 text-lg">{o}</div>
                <div className="text-3xl font-bold absolute top-4 right-4 leading-none tabular-nums">
                  {showCounts && count > 0 ? count : ''}
                </div>
              </div>
            );
          })}
        </div>          
      </div>
      <div className="bg-grey-500 dark:bg-grey-600 text-white flex md:flex-col w-full md:max-w-40 justify-between text-sm">
        <div className="flex flex-col p-4 gap-1">
          <span className="font-semibold">{quiz.name}</span>
          {state.ended && 'Game over!'}
          {!state.ended && state.open && 'Accepting answers'}
          {!state.ended && !state.open && !state.reveal && 'Round closed'}
          {!state.ended && state.reveal && 'Answers revealed'}
        </div>
        <div className="bg-grey-400 text-blue-800 dark:bg-grey-700 dark:text-grey-200 p-4 text-xs flex flex-col justify-center items-center md:order-1">
          <span className="qrcode size-25"></span>
          git.nickford.com/quiz
        </div>
      </div>
    </div>
    {showScoreboard && (
      <div className="scoreboard absolute top-0 left-0 w-screen h-screen p-8 bg-grey-400/50 dark:bg-black/50 backdrop-blur overflow-auto">
        <h2 className="mb-4 icon">Scoreboard</h2>
        <div className="grid gap-2">
          {scores.map((s:any, i:number) => (
            <div key={s.id} className="flex justify-between items-stretch bg-grey-500 text-white rounded px-3 py-2">
              <span className="tabular-nums text-right w-[3em] mr-2 text-blue-800 border border-transparent">{i+1} |</span>
              <span className="flex-1 font-semibold border border-transparent">{s.name}</span>
              <span className="tabular-nums text-right border rounded w-[4em] px-1">{s.correct}</span>
            </div>
          ))}
          {scores.length === 0 && <div>No answers yet.</div>}
        </div>
      </div>
    )}
    </>
  );
}