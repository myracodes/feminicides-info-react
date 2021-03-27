import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import apiHandler from "../../../api/apiHandler";

class FormEditEvent extends Component {
  state = {}

  componentDidMount() {
    this.setState({
      eventNumber: this.props.location.state.event.eventNumber,
      date: this.props.location.state.event.date,
      city: this.props.location.state.event.city,
      firstName: this.props.location.state.event.firstName,
      lastName: this.props.location.state.event.lastName,
      age: this.props.location.state.event.age,
      coordinates: this.props.location.state.event.coordinates,
      relationship: this.props.location.state.event.relationship,
      killerAge: this.props.location.state.event.killerAge,
      complaint: this.props.location.state.event.complaint,
      condemned: this.props.location.state.event.condemned,
      nbOtherVictims: this.props.location.state.event.nbOtherVictims,
      description: this.props.location.state.event.description,
      courtDecision: this.props.location.state.event.courtDecision,
      pressArticles: this.props.location.state.event.pressArticles,
      commemoration: this.props.location.state.event.commemoration,
      region: this.props.location.state.event.region,
      completeProfile: this.props.location.state.event.completeProfile
    });
  }

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    apiHandler
      .editEvent(this.props.location.state.event._id, this.state)
      .then((data) => {
        console.log(data);
        this.props.history.push("/admin/tableau-de-bord");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form>
        <h1>{this.state.firstName}</h1>
      </form>
    )
  }
}

export default withRouter(FormEditEvent);
