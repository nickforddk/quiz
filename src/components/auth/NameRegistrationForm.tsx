import React, { useState } from 'react';

const NameRegistrationForm: React.FC<{ onRegister: (name: string) => void }> = ({ onRegister }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onRegister(name.trim());
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <label htmlFor="name" className="mb-2 text-lg font-semibold">
        Enter your name:
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded p-2 mb-4"
        required
      />
      <button type="submit" className="bg-blue-500 text-white rounded p-2">
        Register
      </button>
    </form>
  );
};

export default NameRegistrationForm;