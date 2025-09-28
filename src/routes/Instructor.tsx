import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { listenQuizState, initializeQuizStateIfMissing } from '../services/quizService';
import { processGithubRedirectResult, signInInstructor } from '../services/authService';
import QuizManager from '../components/quiz/QuizManager';

export default function Instructor() {
  const { user, isInstructor, loading: authLoading } = useAuthContext();
  const [state, setState] = useState<any | null>(null);
  const [initTried, setInitTried] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginBusy, setLoginBusy] = useState(false);

  useEffect(() => {
    processGithubRedirectResult();
    const unsub = listenQuizState(setState);
    return () => unsub();
  }, []);

  useEffect(() => {
    if (isInstructor && !initTried) {
      initializeQuizStateIfMissing()
        .catch(e => console.warn('Init quiz state (maybe not allowed yet):', e?.code || e))
        .finally(() => setInitTried(true));
    }
  }, [isInstructor, initTried]);

  if (authLoading) return <div className="p-6">Authenticating…</div>;

  if (!isInstructor) {
    return (
      <>
      <header>
        <h1>Pulse check</h1>
        <div className="menu"><a href="./" target="_blank">Play quiz</a></div>
      </header>
      <div className="p-6 max-w-sm space-y-4 bg-white dark:bg-blue-800 shadow dark:shadow-cyan-700 flex flex-col mt-auto mb-auto rounded">
        <button
          disabled={loginBusy}
          onClick={async () => {
            if (loginBusy) return;
            setLoginError('');
            setLoginBusy(true);
            try {
              await signInInstructor();
            } catch (e: any) {
              setLoginError(e?.message || e?.code || 'Login failed');
            } finally {
              setLoginBusy(false);
            }
          }}
          className="px-4 py-2 bg-blue-700 text-white dark:bg-blue-300 dark:text-blue-700 hover:bg-blue-600 hover:text-white cursor-pointer rounded disabled:bg-grey-500 disabled:text-grey-300 disabled:cursor-not-allowed disabled:pointer-events-none"
        >
          {loginBusy ? 'Connecting…' : 'Continue with GitHub'}
        </button>
        {loginError && <div className="text-sm text-red-600">{loginError}</div>}
        {user && user.isAnonymous && (
          <div className="text-xs text-gray-500">
            Still anonymous. Click the button to continue with GitHub.
          </div>
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
  }

  if (!state) return <div className="p-6">Loading state…</div>;

  return (
    <>
      <header>
        <h1>Quiz dashboard</h1>
        <div className="menu"><a href="./screen/" target="_blank">Screen</a></div>
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