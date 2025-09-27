// This file exports TypeScript types and interfaces used throughout the application.

export interface User {
  id: string;
  name: string;
  role: 'instructor' | 'student';
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correct: string;
}

export interface Quiz {
  id?: string;
  name: string;
  questions: QuizQuestion[];
}

export interface Score {
  userId: string;
  quizId: string;
  score: number;
}