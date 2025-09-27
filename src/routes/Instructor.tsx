import React, { useEffect, useState } from 'react';
import { signInWithGithub } from '../services/firebase';
import { useAuthContext } from '../context/AuthContext';
import { listenQuizState, initializeQuizStateIfMissing } from '../services/quizService';
import QuizManager from '../components/quiz/QuizManager';

export default function Instructor() {
  const { user, isInstructor, loading: authLoading } = useAuthContext();
  const [state, setState] = useState<any|null>(null);

  useEffect(() => {
    const unsub = listenQuizState(setState);
    initializeQuizStateIfMissing().catch(()=>{});
    return () => unsub();
  }, []);

  if (authLoading) return <div className="p-6">Authenticating...</div>;

  if (!isInstructor) {
    return <>
      <header>
        <h1>Pulse check</h1>
        <div class = "menu"><a href="../" target="_blank">Start</a></div>
      </header>
      <div className="p-6 space-y-4 max-w-md text-center flex flex-col flex-1 align-center justify-center">
        <h2 className="text-2xl font-bold">Login</h2>
        <button className="px-4 py-3 bg-blue-700 text-white dark:bg-blue-200 dark:text-blue-700 rounded cursor-pointer hover:bg-blue-600 hover:text-white" onClick={()=>signInWithGithub()}>
          {user?.isAnonymous ? 'Authenticate with GitHub' : 'Log in with GitHub'}
        </button>
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
    </>;
  }

  if (!state) return <div className="p-6">Loading state...</div>;

  return (
    <>
      <header>
        <h1>Quiz dashboard</h1>
        <div class = "menu"><a href="../screen/" target="_blank">Screen</a></div>
      </header>
      <div className="p-6 space-y-6 w-screen">
        <QuizManager state={state} />
        <details className="text-xs max-w-4xl ml-auto mr-auto">
          <summary>Raw state</summary>
          <pre className="bg-cyan-800 dark:bg-blue-600 text-white p-2 rounded max-h-64 overflow-auto">
  {JSON.stringify(state, null, 2)}
          </pre>
        </details>
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
}