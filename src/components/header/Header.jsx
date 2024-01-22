import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/LOGO.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="header__logo" />
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
    </header>
  );
}

export default Header;
