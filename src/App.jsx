import React from 'react';
import { MovieProvider } from './Context/MovieContext';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import './App.css';

function App() {
  return (
    <MovieProvider>
      <div className="app-container">
        <Sidebar />
        <MainContent />
      </div>
    </MovieProvider>
  );
}

export default App;