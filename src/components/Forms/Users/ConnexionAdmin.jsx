import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../../components/Auth/withUser";
import apiHandler from "../../api/apiHandler";

class FormSignup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: ""
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.props.context.setUser(data);
        this.props.history.push("/tableau-de-bord");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/" />;
    }

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

        <button>Créer</button>
      </form>
    );
  }
}

export default withRouter(withUser(FormSignup));