import React from 'react';
import { Link } from "react-router-dom";
import apiHandler from '../api/apiHandler';
import NavDashboard from '../components/NavDashboard';

class DashboardRegions extends React.Component {
  state = {
    regions: []
  }

  componentDidMount() {
    apiHandler
    .allRegions()
    .then(data => this.setState({ regions: data.sort((a, b) => a.name.localeCompare(b.name)) }))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <NavDashboard/>
        <div className="Dashboard__container">
          <h1 className="title-1">Tableau de bord</h1> <br/>
          <h2 className="title-2">Régions, collectivités & territoires</h2>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Nombre d'événements</th>
                <th>Consulter</th>
                <th>Éditer</th>
              </tr>
            </thead>
            <tbody>
              {this.state.regions.map(region => (
                <tr key={region._id}>
                  <td>{region.name}</td>
                  <td>{region.events.length}</td>
                  <td>
                    <Link to={`/admin/consulter-region/${region._id}`}>
                      <i className="fas fa-eye Dashboard__icons"></i>
                    </Link>
                  </td>
                  <td>
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
