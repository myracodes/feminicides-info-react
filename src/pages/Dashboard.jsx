import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiHandler from '../api/apiHandler';
import moment from "moment";

class Dashboard extends Component {
  state = {
    users: [],
    events: [],
    regions: []
  }

  componentDidMount() {
    apiHandler
      .getUsers()
      .then(data => this.setState({ users: data }))
      .catch(error => console.log(error));

    apiHandler
      .allEvents()
      .then(data => this.setState({ events: data }))
      .catch(error => console.log(error));

    apiHandler
      .allRegions()
      .then(data => this.setState({ regions: data.sort((a, b) => a.name.localeCompare(b.name)) }))
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
  
  handleDeleteEvent(eventID) {
    apiHandler
      .deleteEvent(eventID)
      .then(deletedEvent => {
        this.setState({ events: [...this.state.events.filter(event => eventID !== event._id)] });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1 className="title-1">Tableau de bord</h1>
        <section>
          <h2 className="title-3">Utilisatrices & utilisateurs</h2> <br />
          <Link to="/admin/nouvelle-utilisatrice" className="btn-3">Ajouter un.e utilisatrice.eur</Link>
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
                    <i className="fas fa-edit"></i>
                  </Link>
                </td>
                <td>
                <i className="fas fa-trash" onClick={() => this.handleDeleteUser(user._id)}></i>
                </td>
              </tr>
            )
            })}
            </tbody>
          </table>

        </section>
        <section>
          <h2 className="title-2">Événements</h2> <br />
          <Link to="/admin/nouvel-evenement" className="btn-2">Ajouter un événement</Link>
          <table>
            <thead>
              <tr>
                <th>N°</th>
                <th>Date</th>
                <th>Prénom</th>
                <th>Ville</th>
                <th>Éditer</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {this.state.events.map(event => (
                <tr key={event._id}>
                  <td>{event.eventNumber}</td>
                  <td>{moment(event.date).format('D/MM/YYYY')}</td>
                  <td>{event.firstName}</td>
                  <td>{event.city}</td>
                  <td>
                  <Link 
                  to={{pathname: `/admin/editer-event/${event._id}`,
                  state: {event: event}
                }}>
                    <i className="fas fa-edit"></i>
                  </Link>
                </td>
                <td>
                <i className="fas fa-trash" onClick={() => this.handleDeleteEvent(event._id)}></i>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section>
          <h2 className="title-3">Régions, collectivités & territoires</h2>
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
                      <i className="fas fa-eye"></i>
                    </Link>
                  </td>
                  <td>
                    <Link 
                    to={{pathname: `/admin/editer-region/${region._id}`,
                    state: {region: region}
                    }}>
                      <i className="fas fa-edit"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default Dashboard;
