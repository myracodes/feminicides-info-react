import React, { Component } from 'react';
import apiHandler from "../../api/apiHandler";
import moment from "moment";
import "../../styles/global.css";
import { Link } from "react-router-dom";
import "../../styles/Map.css";

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
    // Get ONE region's info from the database
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
      <div key={this.props.match.params.id} className="page-container">
        <h1 className="title-1">{this.state.name}</h1>
        <div className="text-box">
          <p><b>Parti politique majoritaire au conseil régional :</b> {this.state.politicalParty}</p>
          <p><b>Budget alloué à la lutte contre les violences sexistes et sexuelles : </b>{this.state.regionVSSBudget} milliards d'€</p>
          <p><b>Féminicides :</b></p>
          
          <table className="Dashboard__table-region">
            <thead className="Dashboard__table-row-title">
              <tr>
                <th className="Dashboard__table-cell">N°</th>
                <th className="Dashboard__table-cell">Date</th>
                <th className="Dashboard__table-cell">Prénom</th>
                <th className="Dashboard__table-cell">Ville</th>
              </tr>
            </thead>

            <tbody>
              {this.state.events.map(event => (
                <tr key={event._id} className="Dashboard__table-row">
                  <td className="Dashboard__table-cell">{event.eventNumber}</td>
                  <td className="Dashboard__table-cell">{moment(event.date).format('D/MM/YYYY')}</td>
                  <td className="Dashboard__table-cell">{event.firstName}</td>
                  <td className="Dashboard__table-cell">{event.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br/>
          <p><b>Nombre de personnel formé :</b> {this.state.trainedStaff}</p>
          <p><b>Budget alloué à la formation du personnel : </b>{this.state.VSSTrainingBudget}</p>
          <p><b>Nombre de places en centre d'hébergement : </b>{this.state.shelterPlaces}</p>
        </div>
        <br/>
        <Link to="/admin/tableau-de-bord/regions" className="btn-3 Dashboard__return-btn">Retour</Link>       
      </div>
    )
  }
}

export default ReadRegion;
