// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <Link to="/" className="nav__logo">Cashman</Link>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><Link to="/" className="nav__link active-link">Portfolio</Link></li>
            <li className="nav__item"><Link to="/creditcards" className="nav__link">Credit Cards</Link></li>
            <li className="nav__item"><Link to="/services" className="nav__link">Our Services</Link></li>
            <li className="nav__item"><Link to="/login" className="nav__link" style={{ color: 'hsl(117.28deg 100% 32.57%)' }}>Login</Link></li>
            <li className="nav__item"><Link to="/signup" className="nav__link" style={{ color: 'hsl(117.28deg 100% 32.57%)' }}>Sign Up</Link></li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
