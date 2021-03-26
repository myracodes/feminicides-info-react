import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import apiHandler from "../../../api/apiHandler";

class FormEditUser extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: ""
  };

  componentDidMount() {
    this.setState({
      firstName: this.props.location.state.user.firstName,
      lastName: this.props.location.state.user.lastName,
      email: this.props.location.state.user.email,
      password: this.props.location.state.user.password,
      role: this.props.location.state.user.role
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
      .editUser(this.props.location.state.user._id, this.state)
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

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">Prénom</label>
        <input
          onChange={this.handleChange}
          value={this.state.firstName}
          type="text"
          id="firstName"
          name="firstName"
        />
        <label htmlFor="lastName">Nom</label>
        <input
          onChange={this.handleChange}
          value={this.state.lastName}
          type="text"
          id="lastName"
          name="lastName"
        />
        <label htmlFor="email">E-mail</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          onChange={this.handleChange}
          value={this.state.password}
          type="password"
          id="password"
          name="password"
        />
        <label htmlFor="role">Rôle</label>
        <select
          onChange={this.handleChange}
          value={this.state.role}
          id="role"
          name="role"
        >
          <option value="éditrice">Éditrice.eur</option>
          <option value="admin">Admin</option>
        </select>

        <button>Mettre à jour</button>
      </form>
    );
  }
}

export default withRouter(FormEditUser);
