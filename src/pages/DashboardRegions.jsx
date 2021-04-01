import React from 'react';
import { Link } from "react-router-dom";
import apiHandler from '../api/apiHandler';
import NavDashboard from '../components/NavDashboard';

class DashboardRegions extends React.Component {
  state = {
    regions: []
  }

  componentDidMount() {
    // Get all regions info from the database
    apiHandler
    .allRegions()
    .then(data => this.setState({ regions: data.sort((a, b) => a.name.localeCompare(b.name)) }))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <NavDashboard/>
        <div className="Dashboard__container-parent">
          <h1 className="title-1">Tableau de bord</h1> <br/>
          <h2 className="title-2">Régions, collectivités & territoires</h2>
          <table className="Dashboard__table">
            <thead>
              <tr>
                <th className="Dashboard__table-cell">Nom</th>
                <th className="Dashboard__table-cell">Nombre d'événements</th>
                <th className="Dashboard__table-cell">Consulter</th>
                <th className="Dashboard__table-cell">Éditer</th>
              </tr>
            </thead>
            <tbody>
              {this.state.regions.map(region => (
                <tr key={region._id} className="Dashboard__table-row">
                  <td className="Dashboard__table-cell">{region.name}</td>
                  <td className="Dashboard__table-cell">{region.events.length}</td>
                  <td className="Dashboard__table-cell">
                    <Link to={`/admin/consulter-region/${region._id}`}>
                      <i className="fas fa-eye Dashboard__icons"></i>
                    </Link>
                  </td>
                  <td className="Dashboard__table-cell">
                    <Link 
                    to={{pathname: `/admin/editer-region/${region._id}`,
                    state: {region: region}
                    }}>
                      <i className="fas fa-edit Dashboard__icons"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default DashboardRegions;
