import React from 'react';

interface QuestionCardProps {
  question: string;
  answerOptions: string[];
  onAnswerSelected: (answer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, answerOptions, onAnswerSelected }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      <div className="flex flex-col">
        {answerOptions.map((option, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white rounded-md py-2 px-4 mb-2 hover:bg-blue-600"
            onClick={() => onAnswerSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;