import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiHandler from '../api/apiHandler';
import NavDashboard from '../components/NavDashboard';

class DashboardHome extends Component {
  render() {
    return (
      <div>
        <NavDashboard />
        <div className="Dashboard__container flex flex-column">
          <h1 className="title-1">Tableau de bord</h1>
          <div className="page-container">
            <p>Gérez les utilisateurices,</p>
            <p>Ajoutez ou éditez les informations d'un événement/féminicide,</p>
            <p>Éditez les informations à propos d'une région.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardHome

