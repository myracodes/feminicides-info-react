import React from 'react';
import { Link } from "react-router-dom";
import apiHandler from '../api/apiHandler';
import NavDashboard from '../components/NavDashboard';
import "../styles/Dashboard.css";

let gridStyle;

class DashboardUsers extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    apiHandler
      .getUsers()
      .then(data => this.setState({ users: data }))
      .catch(error => console.log(error));

    gridStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateRows: `repeat(${this.state.users.length}, 1fr)`,
      gap: "5px 5px",
    }
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
    console.log("state users length: ", this.state.users.length);
    return (
      <div>
        <NavDashboard />
        <div className="Dashboard__container-parent">
          <h1 className="title-1">Tableau de bord</h1> <br/>
          <h2 className="title-2">Utilisateurices</h2> <br/><br/>
          <Link to="/admin/nouvelle-utilisatrice" className="btn-2">Ajouter un.e utilisateurice</Link><br/><br/>
          <table className="Dashboard__table">
            <thead>
              <tr className="Dashboard__table-row-title">
                <th className="Dashboard__table-cell">Prénom</th>
                <th className="Dashboard__table-cell">Nom</th>
                <th className="Dashboard__table-cell">Éditer</th>
                <th className="Dashboard__table-cell">Supprimer</th>
              </tr>
            </thead>
            <tbody>
            {this.state.users.map(user => {
              return (
              <tr className="Dashboard__table-row" key={user._id}>
                <td className="Dashboard__table-cell">
                  {user.firstName}
                </td>
                <td className="Dashboard__table-cell">
                  {user.lastName}
                </td>
                <td className="Dashboard__table-cell">
                  <Link 
                  to={{pathname: `/admin/editer-utilisatrice/${user._id}`,
                  state: {user: user}
                }}>
                    <i className="fas fa-edit Dashboard__icons"></i>
                  </Link>
                </td>
                <td className="Dashboard__table-cell">
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
