import React, { Component } from 'react';
import apiHandler from "../../api/apiHandler";

export class ReadRegion extends Component {
  state = {
    name: "",
    politicalParty: "",
    regionVSSBudget: 0,
    events: [],
    trainedStaff: 0,
    VSSTrainingBudget: 0,
    shelterPlaces: 0
  }

  componentDidMount() {
    apiHandler
      .oneRegion(this.props.match.params.id)
      .then(selectedRegion => this.setState({
        name: selectedRegion.name,
        politicalParty: selectedRegion.politicalParty,
        regionVSSBudget: selectedRegion.regionVSSBudget,
        events: selectedRegion.events,
        trainedStaff: selectedRegion.trainedStaff,
        VSSTrainingBudget: selectedRegion.VSSTrainingBudget,
        shelterPlaces: selectedRegion.shelterPlaces
      }));
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p><b>Parti politique majoritaire au conseil régional :</b> {this.state.politicalParty}</p>
        <p><b>Budget alloué à la lutte contre les violences sexistes et sexuelles : </b>{this.state.regionVSSBudget} milliards d'€</p>
        <p><b>Féminicides :</b></p>
        <table>
          <thead>
            <tr>
              <th>N°</th>
              <th>Date</th>
              <th>Prénom</th>
              <th>Ville</th>
            </tr>
          </thead>
          <tbody>
            {this.state.events.map(event => (
              <tr key={event._id}>
                <td>{event.eventNumber}</td>
                <td>{event.date}</td>
                <td>{event.firstName}</td>
                <td>{event.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
        <p><b>Nombre de personnel formé :</b> {this.state.trainedStaff}</p>
        <p><b>Budget alloué à la formation du personnel : </b>{this.state.VSSTrainingBudget}</p>
        <p><b>Nombre de places en centre d'hébergement : </b>{this.state.shelterPlaces}</p>
      </div>
    )
  }
}

export default ReadRegion;