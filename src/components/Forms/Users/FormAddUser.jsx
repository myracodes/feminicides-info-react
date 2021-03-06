import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { withUser } from "../../Auth/withUser";
import apiHandler from "../../../api/apiHandler";

class FormSignup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "éditrice"
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
        this.props.history.push("/admin/tableau-de-bord/users");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="page-container">
        <h1 className="title-1">Ajouter un.e nouvel.le utilisateurice</h1>
        <br/><br/>
        <Link to="/admin/tableau-de-bord/users" className="btn-3 Dashboard__return-btn">Retour</Link> 
        <br/>
        <form onSubmit={this.handleSubmit} className="form-container Dashboard__form">
          <label htmlFor="firstName" className="form-label">Prénom</label>
          <input
            onChange={this.handleChange}
            value={this.state.firstName}
            type="text"
            id="firstName"
            name="firstName"
            className="form-input"
          />
          <label htmlFor="lastName" className="form-label">Nom</label>
          <input
            onChange={this.handleChange}
            value={this.state.lastName}
            type="text"
            id="lastName"
            name="lastName"
            className="form-input"
          />
          <label htmlFor="email" className="form-label">E-mail</label>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
            id="email"
            name="email"
            className="form-input"
          />
          <label htmlFor="password" className="form-label">Mot de passe</label>
          <input
            onChange={this.handleChange}
            value={this.state.password}
            type="password"
            id="password"
            name="password"
            className="form-input"
          />
          <label htmlFor="role" className="form-label">Rôle</label>
          <select
            onChange={this.handleChange}
            value={this.state.role}
            id="role"
            name="role"
            className="form-input"
          >
            <option default value="éditrice">Éditrice.eur</option>
            <option value="admin">Admin</option>
          </select>

          <button className="btn-1 Dashboard__form-btn">Créer</button>
        </form>
      </div>
    );
  }
}

export default withRouter(withUser(FormSignup));
