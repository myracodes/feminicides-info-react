import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Tableau de bord</h1>
        <section>
          <h2>Utilisatrices & utilisateurs</h2>
          <Link to="/nouvel-utilisateur">Ajouter un.e utilisatrice.eur</Link>
        </section>
        <section>
          <h2>Événements</h2>
          <Link to="/nouvel-evenement">Ajouter un événement</Link>
        </section>
        <section>
          <h2>Régions, collectivités & territoires</h2>
        </section>
      </div>
    )
  }
}

export default Dashboard;
