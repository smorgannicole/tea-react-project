import React from 'react';
import Header from './components/Header';
import "./App.css";
import HeroWrapper from './components/HeroWrapper';
import TeaBlendsContainer from './components/FavoriteTeasContainer';

function App() {
  return (
    <div className="app-wrapper">
      <HeroWrapper>
        <Header />
        <TeaBlendsContainer />
      </HeroWrapper>
    </div>
  );
}

export default App;
