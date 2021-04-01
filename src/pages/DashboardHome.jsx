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
          <h1 className="title-1">Tableau de bord</h1> <br/>
          <div className="Dashboard__text-container flex flex-column">
            Gérez les utilisateurices, <br/>
            Ajoutez ou éditez les informations à propos d'un événement/féminicide, <br/>
            Éditez les informations à propos d'une région.
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardHome

