import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import apiHandler from "../../../api/apiHandler";

class FormEditEvent extends Component {
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
    this.setState({
      name: this.props.location.state.region.name,
      politicalParty: this.props.location.state.region.politicalParty,
      regionVSSBudget: this.props.location.state.region.regionVSSBudget,
      events: this.props.location.state.region.events,
      trainedStaff: this.props.location.state.region.trainedStaff,
      VSSTrainingBudget: this.props.location.state.region.VSSTrainingBudget,
      shelterPlaces: this.props.location.state.region.shelterPlaces
    })
  }

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    apiHandler
      .editRegion(this.props.location.state.region._id, this.state)
      .then((data) => {
        console.log(data);
        this.props.history.push("/admin/tableau-de-bord/regions");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1 className="title-2">{this.state.name}</h1>
        <br/><br/>
        <Link to="/admin/tableau-de-bord/regions" className="btn-3 Dashboard__return-btn">Retour</Link> 
        <br/>
        <form onSubmit={this.handleSubmit} className="form-container Dashboard__form">
          <label htmlFor="name" className="form-label">Nom de la région</label>
          <input 
          onChange={this.handleChange}
          value={this.state.name}
          type="text"
          id="name"
          name="name"
          className="form-input"
          /> <br />

          <label htmlFor="politicalParty" className="form-label">Parti politique majoritaire au conseil régional</label>
          <input 
          onChange={this.handleChange}
          value={this.state.politicalParty}
          type="text"
          id="politicalParty"
          name="politicalParty"
          className="form-input"
          /> <br />

          <label htmlFor="regionVSSBudget" className="form-label">Budget alloué à la lutte contre les violences sexistes et sexuelles (en milliards d'€)</label>
          <input 
          onChange={this.handleChange}
          value={this.state.regionVSSBudget}
          type="number"
          id="regionVSSBudget"
          name="regionVSSBudget"
          className="form-input"
          /> <br />

          <label htmlFor="events" className="form-label">Féminicides</label>
          <p>Pour éditer un féminicide, passez par la liste des événements.</p>
          {this.state.events.map(event => (
            <input 
              value={`N° ${event.eventNumber} : ${event.firstName} à ${event.city}`}
              type="text"
              id="events"
              name="events"
              className="form-input"
              />
          ))} <br />

          <label htmlFor="trainedStaff" className="form-label">Nombre de personnel formé</label>
          <input 
          onChange={this.handleChange}
          value={this.state.trainedStaff}
          type="number"
          id="trainedStaff"
          name="trainedStaff"
          className="form-input"
          /> <br />

          <label htmlFor="VSSTrainingBudget" className="form-label">Budget alloué à la formation du personnel</label>
          <input 
          onChange={this.handleChange}
          value={this.state.VSSTrainingBudget}
          type="number"
          id="VSSTrainingBudget"
          name="VSSTrainingBudget"
          className="form-input"
          /> <br />

          <label htmlFor="shelterPlaces" className="form-label">Nombre de places en centre d'hébergement</label>
          <input 
          onChange={this.handleChange}
          value={this.state.shelterPlaces}
          type="number"
          id="shelterPlaces"
          name="shelterPlaces"
          className="form-input"
          /> <br />

          <button className="btn-2 Dashboard__form-btn">Mettre à jour</button>
        </form>
      </div>
    )
  }
}

export default withRouter(FormEditEvent);
