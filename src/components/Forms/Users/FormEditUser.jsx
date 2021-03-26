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

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   apiHandler
  //     .editUser(this.state)
  //     .then((data) => {
  //       this.props.history.push("/tableau-de-bord");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  render() {
    console.log(this.props);
    console.log(this.props.location.state);

    return (
      <div>
        <h1>Coucou</h1>

      </div>
      // <form onSubmit={this.handleSubmit}>
      //   <label htmlFor="firstName">Prénom</label>
      //   <input
      //     onChange={this.handleChange}
      //     value={this.state.userInfo.firstName}
      //     type="text"
      //     id="firstName"
      //     name="firstName"
      //   />
      //   <label htmlFor="lastName">Nom</label>
      //   <input
      //     onChange={this.handleChange}
      //     value={this.state.lastName}
      //     type="text"
      //     id="lastName"
      //     name="lastName"
      //   />
      //   <label htmlFor="email">E-mail</label>
      //   <input
      //     onChange={this.handleChange}
      //     value={this.state.email}
      //     type="email"
      //     id="email"
      //     name="email"
      //   />
      //   <label htmlFor="password">Mot de passe</label>
      //   <input
      //     onChange={this.handleChange}
      //     value={this.state.password}
      //     type="password"
      //     id="password"
      //     name="password"
      //   />
      //   <label htmlFor="role">Rôle</label>
      //   <select
      //     onChange={this.handleChange}
      //     value={this.state.role}
      //     id="role"
      //     name="role"
      //   >
      //     <option value="éditrice">Éditrice.eur</option>
      //     <option value="admin">Admin</option>
      //   </select>

      //   <button>Créer</button>
      // </form>
    );
  }
}

export default FormEditUser;
