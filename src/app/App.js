import React, { useEffect } from 'react'
import './App.scss';
import LandingPage from './screen/LandingPage';

function App() {
  const onScroll = (e) => {
    if (e.target.documentElement.scrollTop > 100) {
      document.getElementsByTagName("nav")[0].classList.add("fixed_top");
    } else {
      document.getElementsByTagName("nav")[0].classList.remove("fixed_top");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="app">
      <LandingPage />
    </div>
  );
}

export default App;
