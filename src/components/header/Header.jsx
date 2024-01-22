import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/LOGO.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="header__logo" />
      <nav className="header__nav">
        <NavLink to="/" exact className="header__link" activeClassName="active">Accueil</NavLink>
        <NavLink to="/about" className="header__link" activeClassName="active">À Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
