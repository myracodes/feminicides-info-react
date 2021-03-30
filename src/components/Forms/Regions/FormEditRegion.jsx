import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
        this.props.history.push("/admin/tableau-de-bord");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.name}</h1>
        <label htmlFor="name">Nom de la région</label>
        <input 
        onChange={this.handleChange}
        value={this.state.name}
        type="text"
        id="name"
        name="name"
        /> <br />

        <label htmlFor="politicalParty">Parti politique majoritaire au conseil régional</label>
        <input 
        onChange={this.handleChange}
        value={this.state.politicalParty}
        type="text"
        id="politicalParty"
        name="politicalParty"
        /> <br />

        <label htmlFor="regionVSSBudget">Budget alloué à la lutte contre les violences sexistes et sexuelles (en milliards d'€)</label>
        <input 
        onChange={this.handleChange}
        value={this.state.regionVSSBudget}
        type="number"
        id="regionVSSBudget"
        name="regionVSSBudget"
        /> <br />

        <label htmlFor="events">Féminicides</label>
        <p>Pour éditer un féminicide, passez par la liste des événements.</p>
        {this.state.events.map(event => (
          <input 
            value={`N° ${event.eventNumber} : ${event.firstName} à ${event.city}`}
            type="text"
            id="events"
            name="events"
            />
        ))} <br />

        <label htmlFor="trainedStaff">Personnel formé</label>
        <input 
        onChange={this.handleChange}
        value={this.state.trainedStaff}
        type="number"
        id="trainedStaff"
        name="trainedStaff"
        /> <br />

        <label htmlFor="VSSTrainingBudget">Budget alloué à la formation du personnel</label>
        <input 
        onChange={this.handleChange}
        value={this.state.VSSTrainingBudget}
        type="number"
        id="VSSTrainingBudget"
        name="VSSTrainingBudget"
        /> <br />

        <label htmlFor="shelterPlaces">Nombre de places en centre d'hébergement</label>
        <input 
        onChange={this.handleChange}
        value={this.state.shelterPlaces}
        type="number"
        id="shelterPlaces"
        name="shelterPlaces"
        /> <br />

        <button>Mettre à jour</button>
      </form>
    )
  }
}

export default withRouter(FormEditEvent);
