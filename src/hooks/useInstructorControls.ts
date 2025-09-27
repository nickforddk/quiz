import { useState } from 'react';
import { db } from '../lib/firebase';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';

const useInstructorControls = (quizId) => {
  const [quizData, setQuizData] = useState(null);
  const [isQuizActive, setIsQuizActive] = useState(false);

  const startQuiz = async () => {
    const quizRef = doc(db, 'quizzes', quizId);
    await updateDoc(quizRef, { active: true });
    setIsQuizActive(true);
  };

  const endQuiz = async () => {
    const quizRef = doc(db, 'quizzes', quizId);
    await updateDoc(quizRef, { active: false });
    setIsQuizActive(false);
  };

  const subscribeToQuizData = () => {
    const quizRef = doc(db, 'quizzes', quizId);
    onSnapshot(quizRef, (doc) => {
      setQuizData(doc.data());
    });
  };

  return {
    quizData,
    isQuizActive,
    startQuiz,
    endQuiz,
    subscribeToQuizData,
  };
};

export default useInstructorControls;