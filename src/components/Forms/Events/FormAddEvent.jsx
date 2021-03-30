import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
    region: "",
    completeProfile: false
  }

  componentDidMount() {
    apiHandler
      .allRegions()
      .then(data => {
        this.setState({ regionsList: data.sort((a, b) => a.name.localeCompare(b.name)) })
      })
      .catch(error => console.log(error));

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
    formData.append("region", this.state.region);
    formData.append("completeProfile", this.state.completeProfile);

    console.log(...formData);

    apiHandler
      .createEvent(formData)
      .then((data) => {
        apiHandler.editRegion(data.region, { $push: { events: data._id }})
        .then(editedRegion => console.log("Événément ajouté à la région"))
        .catch(error => console.log(error));
        console.log("created event: ", data);
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
        <h1>Ajouter un événement</h1>
        <label htmlFor="eventNumber">N° de l'événement</label>
        <input
          value={this.state.eventsListLength}
          type="number"
          id="eventNumber"
          name="eventNumber"
        /> <br />

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
        <select
          onChange={this.handleChange}
          value={this.state.relationship}
          id="relationship"
          name="relationship"
        >
          <option value="compagnon">Compagnon</option>
          <option value="ex-compagnon">Ex-compagnon</option>
          <option value="compagnon supposé">Compagnon supposé</option>
          <option value="non renseigné">Non renseigné</option>
        </select> <br />

        <label htmlFor="killerAge">Âge du tueur</label>
        <input
          onChange={this.handleChange}
          value={this.state.killerAge}
          type="number"
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
        <select
          onChange={this.handleChange}
          value={this.state.condemned}
          id="condemned"
          name="condemned"
        >
          <option value="condamné">Condamné</option>
          <option value="non condamné">Non condamné</option>
          <option value="en cours">En cours</option>
          <option value="non renseigné">Non renseigné</option>
        </select>  
         <br />

        <label htmlFor="nbOtherVictims">Nombre de victimes collatérales</label>
        <input
          onChange={this.handleChange}
          value={this.state.nbOtherVictims}
          type="number"
          id="nbOtherVictims"
          name="nbOtherVictims"
        /> <br />

        <label htmlFor="otherVictims">Détails victimes collatérales</label>
        <input
          onChange={this.handleChange}
          value={this.state.otherVictims}
          type="text"
          id="otherVictims"
          name="otherVictims"
          placeholder="Ex: sa mère, son amie, son nouveau compagnon..."
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

        <label htmlFor="commemoration">Collages commémoratifs</label>
        <input
          onChange={this.handleImage}
          type="file"
          id="commemoration"
          // name="commemoration"
        /> <br />

        <label htmlFor="imageSource">Source de l'image</label>
        <input 
          onChange={this.handleChange}
          type="text"
          id="imageSource"
          name="imageSource"
        /> <br />

        <label htmlFor="region">Région</label>
        <select
          onChange={this.handleChange}
          value={this.state.region ? this.state.region._id : ""}
          type="text"
          id="region"
          name="region"
        >
          {this.state.regionsList.map(region => (
            <option value={region._id}>{region.name}</option>
          ))}
        </select>
        <br />

        <label htmlFor="completeProfile">Fiche complète ?</label>
        <input
          onChange={this.handleChange}
          value={this.state.completeProfile}
          type="checkbox"
          id="completeProfile"
          name="completeProfile"
        /> <br />

        <button>Ajouter</button>

      </form>
    )
  }
}

export default withRouter(FormEditEvent);
