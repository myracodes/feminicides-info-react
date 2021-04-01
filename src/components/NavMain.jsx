import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

import "../styles/NavMain.css";

const NavMain = (props) => {
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        <h3 className="logo title-1 name-style">Féminicides&nbsp;infos</h3>
      </NavLink>

      <ul className="nav-list">
        <React.Fragment>
            <li className="nav-li">
              <NavLink to="/carte">Carte</NavLink>
            </li>
            <li className="nav-li">
              <NavLink to="/donnees">Données</NavLink>
            </li>
            <li className="nav-li">
              <NavLink to="/ressources">Ressources</NavLink>
            </li>
            <li className="nav-li">
              <NavLink to="/a-propos">À propos</NavLink>
            </li>
        </React.Fragment>
        {context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to="/admin/tableau-de-bord">Tableau de bord</NavLink>
            </li>
            <li className="link nav-li">
              <p onClick={handleLogout}>Se déconnecter</p>
            </li>
          </React.Fragment>
        )}
        {!context.isLoggedIn && (
          <React.Fragment>
            {/* <li>
              <NavLink to="/ajouter-admin">Lien temporaire admin</NavLink>
            </li> */}
            <li className="nav-li">
              <NavLink to="/espace-admin">Espace admin</NavLink>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default withUser(NavMain);
