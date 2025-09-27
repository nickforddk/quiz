import React from 'react';

const Scoreboard = ({ scores }) => {
  return (
    <div className="scoreboard">
      <h2 className="text-2xl font-bold">Live Scoreboard</h2>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Student Name</th>
            <th className="border border-gray-300 p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((student, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{student.name}</td>
              <td className="border border-gray-300 p-2">{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;