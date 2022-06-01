import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/global.css';
import '../styles/landing.css';

import logoImg from '../images/Logo.svg';
import ilustra from '../images/Ilustra02.svg';

function Landing() {
    return (
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt=""/>
          <img src={ilustra} className="ilustra" alt=""/>
  
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos</p>
          </main>
  
          <div className="location">
            <strong>Salvador</strong>
            <span>Bahia</span>
          </div>
  
          <Link to="/orphanagesMap" className="enter-app">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
  
        </div>
      </div>
    );
}

export default Landing;