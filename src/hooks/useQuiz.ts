import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';

const useQuiz = (quizId) => {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const quizRef = doc(db, 'quizzes', quizId);
        const quizSnapshot = await getDocs(collection(quizRef, 'questions'));
        const questions = quizSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setQuizData({ id: quizId, questions });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizData();
  }, [quizId]);

  const addQuizResponse = async (response) => {
    try {
      await addDoc(collection(db, 'quizzes', quizId, 'responses'), response);
    } catch (err) {
      setError(err);
    }
  };

  const updateQuizScore = async (studentId, score) => {
    try {
      const scoreRef = doc(db, 'quizzes', quizId, 'scores', studentId);
      await updateDoc(scoreRef, { score });
    } catch (err) {
      setError(err);
    }
  };

  return { quizData, loading, error, addQuizResponse, updateQuizScore };
};

export default useQuiz;