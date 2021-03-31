import React from 'react';
import apiHandler from '../api/apiHandler';
import NavDashboard from '../components/NavDashboard';

const DashboardRegions = () => {
  return (
    <div>
      <NavDashboard/>
      <div className="Dashboard__container">
        <h1 className="title-1">Régions, collectivités & territoires</h1>

      </div>
    </div>
  )
}

export default DashboardRegions;
