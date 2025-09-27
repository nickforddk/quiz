import React from 'react';

interface AnswerOptionProps {
  answer: string;
  onAnswerSelected: (answer: string) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ answer, onAnswerSelected }) => {
  return (
    <button
      type="button"
      className="w-full p-4 m-2 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
      onClick={() => onAnswerSelected(answer)}
    >
      {answer}
    </button>
  );
};

export default AnswerOption;