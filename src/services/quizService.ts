import { db, auth } from './firebase';
import {
  doc, getDoc, setDoc, onSnapshot, collection, updateDoc, addDoc,
  getDocs, serverTimestamp, deleteDoc, writeBatch
} from 'firebase/firestore';

// Collections / docs
const quizzesCol = collection(db, 'quizzes');
const stateDoc = doc(db, 'quizState', 'global');

// ---------- Quiz CRUD ----------
export async function createQuiz(name: string, questions: any[] = []) {
  const quiz = {
    name,
    questions: Array.isArray(questions) ? questions : [],
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };
  const ref = await addDoc(quizzesCol, quiz);
  return ref.id;
}

export async function listQuizzes() {
  const snap = await getDocs(quizzesCol);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getQuiz(quizId: string) {
  const ref = doc(db, 'quizzes', quizId);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error('Quiz not found');
  return { id: snap.id, ...snap.data() };
}

export async function updateQuiz(quizId: string, data: { name?: string; questions?: any[] }) {
  const ref = doc(db, 'quizzes', quizId);
  await updateDoc(ref, { ...data, updatedAt: serverTimestamp() });
}

export async function deleteQuiz(quizId: string) {
  // Prevent deleting active quiz
  const state = await getDoc(stateDoc);
  if (state.exists() && state.data().activeQuizId === quizId)
    throw new Error('Cannot delete the active quiz');
  await deleteDoc(doc(db, 'quizzes', quizId));
}

// ---------- Global State ----------
export function listenQuizState(cb:(data:any|null)=>void) {
  return onSnapshot(stateDoc, s => cb(s.exists()?s.data():null));
}

export async function initializeQuizStateIfMissing() {
  const snap = await getDoc(stateDoc);
  if (!snap.exists()) {
    await setDoc(stateDoc, {
      activeQuizId: null,
      currentQuestion: 0,
      open: false,
      reveal: false,
      ended: false,
      scoreboardVisible: false, // ADDED
      updatedAt: serverTimestamp()
    });
  }
}

export async function setActiveQuiz(quizId: string|null) {
  await updateDoc(stateDoc, {
    activeQuizId: quizId,
    currentQuestion: 0,
    open: false,
    reveal: false,
    ended: false,
    scoreboardVisible: false, // reset hidden
    updatedAt: serverTimestamp()
  });
}

export async function setCurrentQuestion(index:number) {
  await updateDoc(stateDoc, {
    currentQuestion: index,
    open: false,
    reveal: false,
    updatedAt: serverTimestamp()
  });
}

export async function openRound(open:boolean) {
  await updateDoc(stateDoc, { open, updatedAt: serverTimestamp() });
}

export async function revealAnswers(reveal:boolean) {
  await updateDoc(stateDoc, { reveal, updatedAt: serverTimestamp() });
}

export async function restartQuiz() {
  await updateDoc(stateDoc, {
    currentQuestion: 0,
    open: false,
    reveal: false,
    ended: false,
    scoreboardVisible: false, // hide again
    updatedAt: serverTimestamp()
  });
  await clearAllAnswers();
}

export async function endQuiz() {
  await updateDoc(stateDoc, {
    open: false,
    reveal: true,
    ended: true,
    updatedAt: serverTimestamp()
  });
}

// ---------- Answers ----------
export async function submitOrUpdateAnswer(questionId: string, answer: string) {
  const user = auth.currentUser;
  if (!user) throw new Error('Not authenticated');
  const ref = doc(db, 'answers', user.uid);
  const snap = await getDoc(ref);
  const existing = snap.exists() ? (snap.data() as any) : {};
  const answers = existing.answers || {};
  answers[questionId] = { answer, ts: Date.now() }; // always overwrite while round open
  await setDoc(
    ref,
    {
      name: existing.name || user.displayName || user.uid.slice(0, 6),
      answers
    },
    { merge: true }
  );
}

export function listenAnswers(cb:(arr:any[])=>void) {
  return onSnapshot(collection(db, 'answers'), snap =>
    cb(snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })))
  );
}

export async function clearAllAnswers() {
  const snap = await getDocs(collection(db, 'answers'));
  const batch = writeBatch(db);
  snap.docs.forEach(d => batch.delete(d.ref));
  if (snap.docs.length) await batch.commit();
}

// ---------- Scoring ----------
export function computeScores(state:any, answersDocs:any[], quizQuestions?:any[]) {
  const questions = quizQuestions || state?.questions || [];
  const key = Object.fromEntries(questions.map((q:any)=>[q.id, q.correct]));
  return answersDocs.map(a => {
    const ans = a.answers || {};
    let correctCount = 0;
    Object.entries(ans).forEach(([qid, val]:any) => {
      if (key[qid] && key[qid] === val.answer) correctCount++;
    });
    return {
      id: a.id,
      name: a.name || a.id,
      correct: correctCount,
      total: Object.keys(ans).length
    };
  }).sort((x,y)=> y.correct - x.correct || x.name.localeCompare(y.name));
}

export async function setScoreboardVisible(visible:boolean) {
  await updateDoc(stateDoc, {
    scoreboardVisible: visible,
    updatedAt: serverTimestamp()
  });
}