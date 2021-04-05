import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import apiHandler from "../../../api/apiHandler";

class FormEditEvent extends Component {
  state = {
    regionsList: [],
    eventsListLength: "",
    eventNumber: "",
    date: "",
    city: "",
    firstName: "",
    lastName: "",
    age: 0,
    lng: 0,
    lat: 0,
    relationship: "non renseigné",
    killerAge: "",
    complaint: 0,
    condemned: "non renseigné",
    nbOtherVictims: 0,
    otherVictims: "",
    description: "",
    courtDecision: "",
    pressArticles: "",
    commemoration: "",
    imageSource: "",
    region: "",
    completeProfile: false
  }

  componentDidMount() {
    // Get all regions to populate the dropdown select input
    apiHandler
      .allRegions()
      .then(data => {
        this.setState({ regionsList: data.sort((a, b) => a.name.localeCompare(b.name)) })
      })
      .catch(error => console.log(error));

    // Get all events just to have the length of the array and set it as the event's number
    apiHandler
      .allEvents()
      .then(data => this.setState({ eventsListLength: data.length + 1}))
      .catch(error => console.log(error));
  }

  handleChange = (event) => {
    const value = event.target.type === "checkbox" ?
                  event.target.checked 
                  : event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleImage = (event) => {
    const file = event.target.files[0];
    this.setState({ commemoration: file });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("eventNumber", this.state.eventsListLength);
    formData.append("date", this.state.date);
    formData.append("city", this.state.city);
    formData.append("firstName", this.state.firstName);
    formData.append("lastName", this.state.lastName);
    formData.append("age", this.state.age);
    formData.append("coordinates.lng", this.state.lng);
    formData.append("coordinates.lat", this.state.lat);
    formData.append("relationship", this.state.relationship);
    formData.append("killerAge", this.state.killerAge);
    formData.append("complaint", this.state.complaint);
    formData.append("condemned", this.state.condemned);
    formData.append("nbOtherVictims", this.state.nbOtherVictims);
    formData.append("otherVictims", this.state.otherVictims);
    formData.append("description", this.state.description);
    formData.append("courtDecision", this.state.courtDecision);
    formData.append("pressArticles", this.state.pressArticles);
    formData.append("commemoration", this.state.commemoration);
    formData.append("imageSource", this.state.imageSource);
    formData.append("region", this.state.region);
    formData.append("completeProfile", this.state.completeProfile);

    console.log(...formData);

    apiHandler
      .createEvent(formData)
      .then((data) => {
        console.log("created event: ", data);
        this.props.history.push("/admin/tableau-de-bord/evenements");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log("state: ", this.state);

    return (
      <div className="page-container">
        <h1 className="title-1">Ajouter un événement</h1>
        <br/><br/>
        <Link to="/admin/tableau-de-bord/evenements" className="btn-3 Dashboard__return-btn">Retour</Link> 
        <br/>
        <form onSubmit={this.handleSubmit} className="form-container Dashboard__form">
          <label htmlFor="eventNumber" className="form-label">N° de l'événement</label>
          <input
            value={this.state.eventsListLength}
            type="number"
            id="eventNumber"
            name="eventNumber"
            className="form-input"
          /> <br />

          <label htmlFor="date" className="form-label">Date</label>
          <input
            onChange={this.handleChange}
            value={this.state.date}
            type="date"
            id="date"
            name="date"
            className="form-input"
          /> <br />

          <label htmlFor="city" className="form-label">Ville</label>
          <input
            onChange={this.handleChange}
            value={this.state.city}
            type="text"
            id="city"
            name="city"
            className="form-input"
          /> <br />

          <label htmlFor="firstName" className="form-label">Prénom</label>
          <input
            onChange={this.handleChange}
            value={this.state.firstName}
            type="text"
            id="firstName"
            name="firstName"
            className="form-input"
          /> <br />

          <label htmlFor="lastName" className="form-label">Nom</label>
          <input
            onChange={this.handleChange}
            value={this.state.lastName}
            type="text"
            id="lastName"
            name="lastName"
            className="form-input"
          /> <br />


          <label htmlFor="age" className="form-label">Âge</label>
          <input
            onChange={this.handleChange}
            value={this.state.age}
            type="number"
            id="age"
            name="age"
            className="form-input"
          /> <br />

          <p>Coordonnées géographiques</p>
          <label htmlFor="lng" className="form-label">Longitude</label>
          <input
            onChange={this.handleChange}
            value={this.state.lng}
            type="number"
            id="lng"
            name="lng"
            className="form-input"
          /> <br />

          <label htmlFor="lat" className="form-label">Latitude</label>
          <input
            onChange={this.handleChange}
            value={this.state.lat}
            type="number"
            id="lat"
            name="lat"
            className="form-input"
          /> <br />

          <label htmlFor="relationship" className="form-label">Relation avec son tueur</label>
          <select
            onChange={this.handleChange}
            value={this.state.relationship}
            id="relationship"
            name="relationship"
            className="form-input"
          >
            <option value="compagnon">Compagnon</option>
            <option value="ex-compagnon">Ex-compagnon</option>
            <option value="compagnon supposé">Compagnon supposé</option>
            <option value="non renseigné">Non renseigné</option>
          </select> <br />

          <label htmlFor="killerAge" className="form-label">Âge du tueur</label>
          <input
            onChange={this.handleChange}
            value={this.state.killerAge}
            type="number"
            id="killerAge"
            name="killerAge"
            className="form-input"
          /> <br />

          <label htmlFor="complaint" className="form-label">Nombre de plaintes</label>
          <input
            onChange={this.handleChange}
            value={this.state.complaint}
            type="text"
            id="complaint"
            name="complaint"
            className="form-input"
          /> <br />

          <label htmlFor="condemned" className="form-label">Tueur condamné ?</label>
          <select
            onChange={this.handleChange}
            value={this.state.condemned}
            id="condemned"
            name="condemned"
            className="form-input"
          >
            <option value="condamné">Condamné</option>
            <option value="non condamné">Non condamné</option>
            <option value="en cours">En cours</option>
            <option value="non renseigné">Non renseigné</option>
          </select>  
          <br />

          <label htmlFor="nbOtherVictims" className="form-label">Nombre de tiers victimes</label>
          <input
            onChange={this.handleChange}
            value={this.state.nbOtherVictims}
            type="number"
            id="nbOtherVictims"
            name="nbOtherVictims"
            className="form-input"
          /> <br />

          <label htmlFor="otherVictims" className="form-label">Détails tiers victimes</label>
          <input
            onChange={this.handleChange}
            value={this.state.otherVictims}
            type="text"
            id="otherVictims"
            name="otherVictims"
            className="form-input"
            placeholder="Ex: sa mère, son amie, son nouveau compagnon..."
          /> <br />

          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            onChange={this.handleChange}
            value={this.state.description}
            id="description"
            name="description"
            rows="5" cols="40"
            className="form-input"
          >
          </textarea> <br />

          <label htmlFor="courtDecision" className="form-label">Décision de justice</label>
          <input
            onChange={this.handleChange}
            value={this.state.courtDecision}
            type="text"
            id="courtDecision"
            name="courtDecision"
            className="form-input"
          /> <br />

          <label htmlFor="pressArticles" className="form-label">Article(s) de presse</label>
          <textarea
            onChange={this.handleChange}
            value={this.state.pressArticles}
            type="text"
            id="pressArticles"
            name="pressArticles"
            rows="5" cols="40"
            className="form-input"
          ></textarea> <br />

          <label htmlFor="commemoration" className="form-label">Collages commémoratifs</label>
          <input
            onChange={this.handleImage}
            type="file"
            id="commemoration"
            name="commemoration"
            className="form-input"
          /> <br />

          <label htmlFor="imageSource" className="form-label">Source de l'image</label>
          <input 
            onChange={this.handleChange}
            value={this.state.imageSource}
            type="text"
            id="imageSource"
            name="imageSource"
            className="form-input"
          /> <br />

          <label htmlFor="region" className="form-label">Région</label>
          <select
            onChange={this.handleChange}
            value={this.state.region ? this.state.region._id : ""}
            type="text"
            id="region"
            name="region"
            className="form-input"
          >
            {this.state.regionsList.map(region => (
              <option value={region._id}>{region.name}</option>
            ))}
          </select>
          <br />
          <button className="btn-1 Dashboard__form-btn">Ajouter</button>

        </form>
      </div>
      
    )
  }
}

export default withRouter(FormEditEvent);
