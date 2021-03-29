import apiHandler from "../api/apiHandler";
import React, { Component } from "react";

const Chart = require("chart.js");

class Data extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    victimsAgeData: [],
    killerAgeData: [1, 50, 70, 80, 90, 100, 77, 88],
  };

  componentDidMount() {
    const node = this.node;

    apiHandler
      .dataAllEvents()
      .then((events) => {
        let eachAge = events.map((event) => event.age);
        let sortedAges = eachAge.sort();

        
        
        this.setState({ victimsAgeData: eachAge });
      })
      .catch((err) => console.log(err));

    let victimsAgeChart = new Chart(node, {
      type: "bar",
      data: {
        labels: [
          "25 ans ou moins",
          "26 à 35 ans",
          "36 à 45 ans",
          "46 à 55 ans",
          "56 à 65 ans",
          "66 à 75 ans",
          "76 à 85 ans",
          "86 ans et plus",
        ],
        datasets: [
          {
            label: "Âge des victimes",
            data: this.state.victimsAgeData,
            backgroundColor: [
              "rgba(107, 255, 99, 0.2)",
              "rgba(107, 255, 99, 0.2)",
              "rgba(107, 255, 99, 0.2)",
              "rgba(107, 255, 99, 0.2)",
              "rgba(107, 255, 99, 0.2)",
              "rgba(107, 255, 99, 0.2)",
              "rgba(107, 255, 99, 0.2)",
              "rgba(107, 255, 99, 0.2)",
            ],
          },
          {
            label: "Âge des assassins ou assassins présumés",
            data: this.state.killerAgeData,
            backgroundColor: [
              "rgba(255, 99, 99, 0.2)",
              "rgba(255, 99, 99, 0.2)",
              "rgba(255, 99, 99, 0.2)",
              "rgba(255, 99, 99, 0.2)",
              "rgba(255, 99, 99, 0.2)",
              "rgba(255, 99, 99, 0.2)",
              "rgba(255, 99, 99, 0.2)",
              "rgba(255, 99, 99, 0.2)",
            ],
          },
        ],
      },
    });
  }

  render() {

    if (this.state.victimsAgeData === []) {
      return <div>Chargement en cours...</div>
    }

    console.log('current state', this.state.victimsAgeData)

    return (
      <div>
        <canvas
          style={{ width: 800, height: 300 }}
          ref={(node) => (this.node = node)}
        />
      </div>
    );
  }
}

export default Data;
