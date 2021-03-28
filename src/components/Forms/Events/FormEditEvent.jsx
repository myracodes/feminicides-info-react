import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import apiHandler from "../../../api/apiHandler";

class FormEditEvent extends Component {
  state = {
    regionsList: []
  }

  componentDidMount() {
    this.setState({
      eventNumber: this.props.location.state.event.eventNumber,
      date: this.props.location.state.event.date,
      city: this.props.location.state.event.city,
      firstName: this.props.location.state.event.firstName,
      lastName: this.props.location.state.event.lastName,
      age: this.props.location.state.event.age,
      lng: this.props.location.state.event.coordinates.lng,
      lat: this.props.location.state.event.coordinates.lat,
      relationship: this.props.location.state.event.relationship,
      killerAge: this.props.location.state.event.killerAge,
      complaint: this.props.location.state.event.complaint,
      condemned: this.props.location.state.event.condemned,
      nbOtherVictims: this.props.location.state.event.nbOtherVictims,
      description: this.props.location.state.event.description,
      courtDecision: this.props.location.state.event.courtDecision,
      pressArticles: this.props.location.state.event.pressArticles,
      commemoration: this.props.location.state.event.commemoration,
      region: this.props.location.state.event.region.name,
      completeProfile: this.props.location.state.event.completeProfile
    });

    apiHandler
    .allRegions()
    .then(data => {
      this.setState({ regionsList: data.sort((a, b) => a.name.localeCompare(b.name)) })
    })
    .catch(error => console.log(error));
  }

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      eventNumber,
      date,
      city,
      firstName,
      lastName,
      age,
      relationship,
      killerAge,
      complaint,
      condemned,
      nbOtherVictims,
      description,
      courtDecision,
      pressArticles,
      commemoration,
      region,
      completeProfile
    } = this.state;
    
    apiHandler
      .editEvent(this.props.location.state.event._id, {
        eventNumber,
        date,
        city,
        firstName,
        lastName,
        age,
        coordinates: {
          lng: this.state.lng,
          lat: this.state.lat
        },
        relationship,
        killerAge,
        complaint,
        condemned,
        nbOtherVictims,
        description,
        courtDecision,
        pressArticles,
        commemoration,
        region,
        completeProfile
      })
      .then((data) => {
        console.log(data);
        this.props.history.push("/admin/tableau-de-bord");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log("state: ", this.state);

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Éditer l'événement n° {this.state.eventNumber}</h1>
        <label htmlFor="date">Date</label>
        <input
          onChange={this.handleChange}
          value={this.state.date}
          type="date"
          id="date"
          name="date"
        /> <br />

        <label htmlFor="city">Ville</label>
        <input
          onChange={this.handleChange}
          value={this.state.city}
          type="text"
          id="city"
          name="city"
        /> <br />

        <label htmlFor="firstName">Prénom</label>
        <input
          onChange={this.handleChange}
          value={this.state.firstName}
          type="text"
          id="firstName"
          name="firstName"
        /> <br />

        <label htmlFor="lastName">Nom</label>
        <input
          onChange={this.handleChange}
          value={this.state.lastName}
          type="text"
          id="lastName"
          name="lastName"
        /> <br />


        <label htmlFor="age">Âge</label>
        <input
          onChange={this.handleChange}
          value={this.state.age}
          type="number"
          id="age"
          name="age"
        /> <br />

        <p>Coordonnées géographiques</p>
        <label htmlFor="lng">Longitude</label>
        <input
          onChange={this.handleChange}
          value={this.state.lng}
          type="number"
          id="lng"
          name="lng"
        /> <br />

        <label htmlFor="lat">Latitude</label>
        <input
          onChange={this.handleChange}
          value={this.state.lat}
          type="number"
          id="lat"
          name="lat"
        /> <br />

        <label htmlFor="relationship">Relation avec son tueur</label>
        <input
          onChange={this.handleChange}
          value={this.state.relationship}
          type="text"
          id="relationship"
          name="relationship"
        /> <br />

        <label htmlFor="killerAge">Âge du tueur</label>
        <input
          onChange={this.handleChange}
          value={this.state.killerAge}
          type="text"
          id="killerAge"
          name="killerAge"
        /> <br />

        <label htmlFor="complaint">Nombre de plaintes</label>
        <input
          onChange={this.handleChange}
          value={this.state.complaint}
          type="text"
          id="complaint"
          name="complaint"
        /> <br />

        <label htmlFor="condemned">Tueur condamné ?</label>
        <input
          onChange={this.handleChange}
          value={this.state.condemned}
          type="checkbox"
          id="condemned"
          name="condemned"
        /> <br />

        <label htmlFor="otherVictims">Nombre de victimes collatérales</label>
        <input
          onChange={this.handleChange}
          value={this.state.otherVictims}
          type="number"
          id="otherVictims"
          name="otherVictims"
        /> <br />

        <label htmlFor="description">Description</label>
        <textarea
          onChange={this.handleChange}
          value={this.state.description}
          id="description"
          name="description"
          rows="5" cols="40"
        >
        </textarea> <br />

        <label htmlFor="courtDecision">Décision de justice</label>
        <input
          onChange={this.handleChange}
          value={this.state.courtDecision}
          type="text"
          id="courtDecision"
          name="courtDecision"
        /> <br />

        <label htmlFor="pressArticles">Article(s) de presse</label>
        <textarea
          onChange={this.handleChange}
          value={this.state.pressArticles}
          type="text"
          id="pressArticles"
          name="pressArticles"
          rows="5" cols="40"
        ></textarea> <br />

        <label htmlFor="commemoration">Collages commémoratifs et autres</label>
        <input
          onChange={this.handleChange}
          value={this.state.commemoration}
          type="file"
          id="commemoration"
          name="commemoration"
        /> <br />

        <label htmlFor="region">Région</label>
        <input
          onChange={this.handleChange}
          value={this.state.region}
          type="text"
          id="region"
          name="region"
        /> <br />

        <label htmlFor="completeProfile">Fiche complète ?</label>
        <input
          onChange={this.handleChange}
          value={this.state.completeProfile}
          type="checkbox"
          id="completeProfile"
          name="completeProfile"
        /> <br />

        <button>Mettre à jour</button>

      </form>
    )
  }
}

export default withRouter(FormEditEvent);
