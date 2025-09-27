import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles.css';
import './assets/index.css';
import Student from './routes/Student';
import Instructor from './routes/Instructor';
import PublicScreen from './routes/PublicScreen';
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/quiz/'}>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/screen" element={<PublicScreen />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);