import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { QuizProvider } from './context/QuizContext';
import Instructor from './routes/Instructor';
import Student from './routes/Student';
import PublicScreen from './routes/PublicScreen';
import Header from './components/layout/Header';

const App = () => {
  return (
    <AuthProvider>
      <QuizProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Student />} />
            <Route path="/instructor" element={<Instructor />} />
            <Route path="/public" element={<PublicScreen />} />
          </Routes>
        </Router>
      </QuizProvider>
    </AuthProvider>
  );
};

export default App;