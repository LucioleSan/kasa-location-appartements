import React from 'react';
import { NavLink } from "react-router-dom";
import logoError from "../assets/images/404.png";

function PageNotFound() {
  return (
    <main className="error">
      <img src={logoError} alt="erreur" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </main>
  )
}
export default PageNotFound;