import React from 'react';
import { Link } from "react-router-dom";
import apiHandler from '../api/apiHandler';
import NavDashboard from '../components/NavDashboard';
import "../styles/Dashboard.css";

class DashboardUsers extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    apiHandler
      .getUsers()
      .then(data => this.setState({ users: data }))
      .catch(error => console.log(error));
  }

  handleDeleteUser(userID) {
    apiHandler
      .deleteUser(userID)
      .then(deletedUser => {
        this.setState({ users: [...this.state.users.filter(user => userID !== user._id)] });
      })
      .catch(error => console.log(error));
  }
  

  render() {
    return (
      <div>
        <NavDashboard />
        <div className="Dashboard__container">
          <h1 className="title-1">Tableau de bord</h1> <br/>
          <h2 className="title-2">Utilisateurices</h2> <br />
          <Link to="/admin/nouvelle-utilisatrice" className="btn-2 Dashboard_btn">Ajouter un.e utilisateurice</Link>
          <table>
            <thead>
              <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Consulter</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
            {this.state.users.map(user => {
              return (
              <tr key={user._id}>
                <td>
                  {user.firstName}
                </td>
                <td>
                  {user.lastName}
                </td>
                <td>
                  <Link 
                  to={{pathname: `/admin/editer-utilisatrice/${user._id}`,
                  state: {user: user}
                }}>
                    <i className="fas fa-edit Dashboard__icons"></i>
                  </Link>
                </td>
                <td>
                <i className="fas fa-trash Dashboard__icons" onClick={() => this.handleDeleteUser(user._id)}></i>
                </td>
              </tr>
            )
            })}
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}

export default DashboardUsers;
