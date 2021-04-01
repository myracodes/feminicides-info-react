import React, { Component } from 'react';
import NavDashboard from '../components/NavDashboard';

class DashboardHome extends Component {
  render() {
    return (
      <div>
        <NavDashboard />
        <div className="Dashboard__container-parent">
        <h1 className="title-1">Tableau de bord</h1> <br/>
          <section className="Dashboard__container flex flex-row">
            <div className="Dashboard__text-container">
              Gérez les utilisateurices, <br/>
              Ajoutez ou éditez les informations à propos d'un événement/féminicide, <br/>
              Éditez les informations à propos d'une région.
            </div>
            <img src="https://res.cloudinary.com/dcbzfldni/image/upload/v1617286322/61637_ovdea0.jpg" alt="Groupe de femmes"
            className="Dashboard__container-img" />
          </section>
         
        </div>
      </div>
    )
  }
}

export default DashboardHome;

