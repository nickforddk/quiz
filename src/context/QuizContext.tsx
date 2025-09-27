import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { quizService } from '../services/quizService';

interface QuizContextType {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  startQuiz: () => void;
  answerQuestion: (answer: string) => void;
  resetQuiz: () => void;
}

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const fetchedQuestions = await quizService.getQuestions();
      setQuestions(fetchedQuestions);
    };

    fetchQuestions();
  }, []);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const answerQuestion = (answer: string) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <QuizContext.Provider value={{ questions, currentQuestionIndex, score, startQuiz, answerQuestion, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};