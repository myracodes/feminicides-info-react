import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Dashboard.css";

const NavDashboard = () => {
  return (
    <div>
      <aside className="Dashboard__navbar flex flex-column">
          <nav>
            <ul className="flex flex-column">
              <Link to="/admin/tableau-de-bord/evenements" className="Dashboard__navbar-link"><i className="far fa-calendar-alt"></i> Événements</Link>
              <Link to="/admin/tableau-de-bord/regions" className="Dashboard__navbar-link"><i className="fas fa-map-marked-alt"></i> Régions</Link>
              <Link to="/admin/tableau-de-bord/users" className="Dashboard__navbar-link"><i className="fas fa-user"></i> Utilisateurices</Link>
            </ul>
          </nav>
        </aside>
    </div>
  )
}

export default NavDashboard;
