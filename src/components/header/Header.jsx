import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/LOGO.png";
// import './_header.scss'; 

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="header__logo" />
      <nav className="header__nav">
        <Link to="/" className="header__link">Accueil</Link>
        <Link to="/about" className="header__link">À Propos</Link>
      </nav>
    </header>
  );
}


export default Header;
