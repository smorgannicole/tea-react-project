import React from 'react';
import Header from './components/Header';
import "./App.css";
import HeroWrapper from './components/HeroWrapper';

function App() {
  return (
    <div className="app-wrapper">
      <HeroWrapper>
        <Header />
      </HeroWrapper>
    </div>
  );
}

export default App;
