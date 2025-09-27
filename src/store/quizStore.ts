import { writable } from 'svelte/store';

interface QuizState {
  questions: Array<{ question: string; options: string[]; answer: string }>;
  currentQuestionIndex: number;
  score: number;
  isQuizActive: boolean;
}

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  isQuizActive: false,
};

const quizStore = writable<QuizState>(initialState);

export const startQuiz = (questions: Array<{ question: string; options: string[]; answer: string }>) => {
  quizStore.set({ ...initialState, questions, isQuizActive: true });
};

export const answerQuestion = (selectedAnswer: string) => {
  quizStore.update(state => {
    const isCorrect = state.questions[state.currentQuestionIndex].answer === selectedAnswer;
    const newScore = isCorrect ? state.score + 1 : state.score;
    const newIndex = state.currentQuestionIndex + 1;

    return {
      ...state,
      score: newScore,
      currentQuestionIndex: newIndex,
    };
  });
};

export const resetQuiz = () => {
  quizStore.set(initialState);
};

export default quizStore;