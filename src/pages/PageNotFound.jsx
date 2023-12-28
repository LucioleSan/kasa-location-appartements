import React from 'react';
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <main className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </main>
  )
}
export default PageNotFound;