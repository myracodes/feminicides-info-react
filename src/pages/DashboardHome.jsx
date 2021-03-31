import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiHandler from '../api/apiHandler';

class DashboardHome extends Component {
  render() {
    return (
      <div>
        <aside className="navbar-dashboard">
          <nav>
            <ul>
              <li>Événements</li>
              <li>Régions</li>
              <li>Utilisateurices</li>
            </ul>
          </nav>
        </aside>
        <h1 className="title-1">Tableau de bord</h1>
        <p>Gérez les utilisateurs,</p>
        <p>Ajoutez ou éditez les informations d'un événement/féminicide,</p>
        <p>Éditez les informations à propos d'une région.</p>
      </div>
    )
  }
}

export default DashboardHome

