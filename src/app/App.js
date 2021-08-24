import React, { useEffect } from 'react'
import Contact from './component/contact/Contact';
import Conversation from './component/conversation/Conversation';
import Expensive from './component/expensive/Expensive';
import Footer from './component/footer/Footer';
import GameChangerTeam from './component/game-changer-team/GameChangerTeam';
import Header from './component/header/Header';
import Management from './component/management/Management';
import Navbar from './component/navbar/Navbar';
import Team from './component/team/Team';
import Testimonial from './component/testimonial/Testimonial';
import Topic from './component/topic/Topic';

import './App.scss';

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
      <Navbar />
      <Header />
      <Testimonial />
      <div className="bg_s23" style={{backgroundImage: "url('/images/bg_23/bg_23.svg')"}}>
        <Topic />
        <Conversation />
      </div>
      <Team />
      <GameChangerTeam />
      <Expensive />
      <Management />
      <Contact />
      <Footer />
      <div className="container d-flex justify-content-end align-items-center text-muted" style={{height: "50px"}}>
        © Popwork  
        <a className="text-muted ml-2" href="https://ulugbekbozarov-portfolio.netlify.app/">Ulug'bek Bozarov</a>
      </div>
    </div>
  );
}

export default App;
