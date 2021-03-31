import React from 'react';
import { Link } from "react-router-dom";
import apiHandler from '../api/apiHandler';
import NavDashboard from '../components/NavDashboard';
import moment from "moment";

class DashboardEvents extends React.Component {
  state = {
    events: []
  }

  componentDidMount() {
    apiHandler
      .allEvents()
      .then(data => this.setState({ events: data.sort((a, b) => a.eventNumber - b.eventNumber) }))
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
        <NavDashboard />
        <div className="Dashboard__container">
          <h1 className="title-1">Tableau de bord</h1> <br/>
          <h2 className="title-2">Événements</h2> <br/>
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
                    <i className="fas fa-edit Dashboard__icons"></i>
                  </Link>
                </td>
                <td>
                <i className="fas fa-trash Dashboard__icons" onClick={() => this.handleDeleteEvent(event._id)}></i>
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

export default DashboardEvents;
