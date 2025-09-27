import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ensureAnonymousLogin } from '../services/firebase';
import { listenQuizState, getQuiz, submitOrUpdateAnswer } from '../services/quizService';
import { db } from '../services/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import NameRegistrationForm from '../components/auth/NameRegistrationForm';

const Student = () => {
  const { user } = useContext(AuthContext);
  const [state, setState] = useState<any | null>(null);
  const [quiz, setQuiz] = useState<any | null>(null);
  const [localAnswer, setLocalAnswer] = useState<string | undefined>();
  const [answers, setAnswers] = useState<Record<string, { answer: string }>>({});

  // Load global quiz state + active quiz + this user's answer doc
  useEffect(() => {
    let unsubAnswer: (() => void) | undefined;

    ensureAnonymousLogin()
      .then(u => {
        const ref = doc(db, 'answers', u.uid);
        unsubAnswer = onSnapshot(ref, snap => {
          if (snap.exists()) {
            const data = snap.data() as any;
            setAnswers(data.answers || {});
            // Restore selection for current question
            const currentQ = state?.currentQuestion;
            if (quiz && typeof currentQ === 'number') {
              const cq = quiz.questions[currentQ];
              if (cq && data.answers?.[cq.id]?.answer) {
                setLocalAnswer(data.answers[cq.id].answer);
              }
            }
          }
        });
      })
      .catch(() => { /* ignore */ });

    const unsubState = listenQuizState(async s => {
      setState(s);
      if (s?.activeQuizId) {
        const q = await getQuiz(s.activeQuizId).catch(() => null);
        setQuiz(q);
        // Reset local selection so UI re-highlights from stored doc listener
        setLocalAnswer(undefined);
      } else {
        setQuiz(null);
      }
    });

    return () => {
      unsubState && unsubState();
      unsubAnswer && unsubAnswer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!state || !state.activeQuizId) return <div className="p-4">Waiting for quiz...</div>;
  if (!quiz) return <div className="p-4">Loading quiz…</div>;

  const qIndex = state.currentQuestion;
  const q = quiz.questions[qIndex];
  if (!q) return <div className="p-4">No question.</div>;

  const persistedAnswer = answers[q.id]?.answer;
  // If localAnswer not set yet, mirror persisted (first render)
  const effectiveAnswer = localAnswer ?? persistedAnswer;

  const roundOpen = state.open && !state.ended;
  // Lock only if round closed or quiz ended
  const locked = !roundOpen || state.ended;

  async function choose(option: string) {
    if (locked) return;
    setLocalAnswer(option);
    await submitOrUpdateAnswer(q.id, option).catch(e => {
      console.error(e);
      // Revert if failed
      setLocalAnswer(effectiveAnswer);
    });
  }

  // Scoring (only revealed questions count)
  const revealedCount = quiz.questions.reduce(
    (n: number, _qq: any, idx: number) =>
      (idx < qIndex || (idx === qIndex && state.reveal)) ? n + 1 : n,
    0
  );

  const correctSoFar = quiz.questions.reduce((n: number, qq: any, idx: number) => {
    if (idx < qIndex || (idx === qIndex && state.reveal)) {
      const a = answers[qq.id];
      if (a && a.answer === qq.correct) return n + 1;
    }
    return n;
  }, 0);

  return (
    <>
      <header>
        <h1>{quiz.name}</h1>
      </header>
      <div className="p-4 pb-6 space-y-5 max-w-xl mt-auto mb-auto">
        {!user ? (
          <NameRegistrationForm />
        ) : (
          <>
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-semibold text-gray-500 tabular-nums">
                Q{qIndex + 1} / {quiz.questions.length}
              </span>
            </div>

            <div>
              <p className="font-medium text-lg mb-3">{q.text}</p>
              <div className="grid gap-2 text-lg">
                {q.options.map((o: string) => {
                  const isChosen = effectiveAnswer === o;
                  const correct = state.reveal && q.correct === o;
                  const wrongChosen = state.reveal && isChosen && q.correct !== o;
                  return (
                    <button
                      key={o}
                      disabled={locked}
                      onClick={() => choose(o)}
                      className={[
                        'border rounded pl-3 pr-8 py-2 text-left transition relative',
                        roundOpen && 'cursor-pointer',
                        !state.reveal && !isChosen && roundOpen && 'bg-white dark:bg-blue-700 dark:text-white hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-200',
                        !state.reveal && 'hover:border-blue-500',
                        isChosen && !state.reveal && 'bg-blue-700 border-transparent text-white dark:bg-white dark:text-blue-700',
                        correct && 'opacity-100 bg-green-500 border-green-700 dark:border-green-300 text-white',
                        wrongChosen && 'opacity-100 bg-red-500 border-red-700 dark:border-red-300 text-white',
                        !roundOpen && 'opacity-50 pointer-events-none',
                        locked && !isChosen && 'cursor-not-allowed',
                      ].filter(Boolean).join(' ')}
                    >
                      {o}
                      {correct && (
                        <span
                          className="absolute top-2 right-2 leading-none"
                          aria-label="Correct answer"
                        >
                          ✔
                        </span>
                      )}
                      {wrongChosen && (
                        <span
                          className="absolute top-2 right-2 leading-none"
                          aria-label="Your (incorrect) answer"
                        >
                          ✖
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded p-3 bg-gray-500 text-white text-sm md:col-span-2">
                <div className="font-medium mb-1">Status</div>
                {state.ended && 'Quiz ended.'}
                {!state.ended && roundOpen && !effectiveAnswer && 'Select an answer...'}
                {!state.ended && roundOpen && effectiveAnswer && 'Answer selected'}
                {!state.ended && !roundOpen && !state.reveal && 'Round closed'}
                {!state.ended && state.reveal && 'Answer revealed'}
              </div>

              {revealedCount > 0 && (
                <div className="rounded p-3 bg-blue-500 text-white text-sm grid grid-cols-2 gap-2">
                  <div className="font-medium mb-1 col-span-2">Your score</div>
                  <div className="col-span-2 text-2xl leading-none tabular-nums">
                    <strong>{correctSoFar}</strong> / {revealedCount}
                  </div>
                  {revealedCount < qIndex + 1 && !state.reveal && (
                    <div className="text-xs text-blue-200 col-span-2">
                      Score updates after this answer is revealed.
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <footer>
        <a
          href="https://www.sdu.dk/en/om-sdu/institutter-centre/oekonomiskinstitut"
          title="SDU: University of Southern Denmark"
          className="sdu"
        />
        <a
          href="https://www.nickford.com"
          title="Nick Ford"
          className="nf"
        />
      </footer>
    </>
  );
};

export default Student;