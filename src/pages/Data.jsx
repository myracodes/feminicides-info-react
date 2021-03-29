import React, { Component } from 'react';
const Chart = require("chart.js");

class Data extends React.Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    victimsAgeData: [1, 50, 70, 80, 90, 100, 77, 88],
    killerAgeData: [1, 50, 70, 80, 90, 100, 77, 88],
  }


  componentDidMount() {
    const node = this.node;

    let victimsAgeChart = new Chart(node, {
      type: "bar",
      data: {
        labels: ["25 ans ou moins", "26 à 35 ans", "36 à 45 ans", "46 à 55 ans", "56 à 65 ans", "66 à 75 ans", "76 à 85 ans", "86 ans et plus"],
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
              "rgba(107, 255, 99, 0.2)"
            ]
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
              "rgba(255, 99, 99, 0.2)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <canvas
          style={{ width: 800, height: 300 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}

export default Data;