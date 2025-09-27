import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">Quiz Application</h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li><a href="/instructor" className="hover:underline">Instructor View</a></li>
          <li><a href="/student" className="hover:underline">Student View</a></li>
          <li><a href="/public" className="hover:underline">Public Screen</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;