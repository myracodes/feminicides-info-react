import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import apiHandler from "../../../api/apiHandler";

class FormEditEvent extends Component {
  state = {
    regionsList: [],
    completeProfile: false
  }

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
      </form>
    )
  }
}

export default withRouter(FormEditEvent);
