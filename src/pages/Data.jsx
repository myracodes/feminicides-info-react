import apiHandler from "../api/apiHandler";
import React, { Component } from "react";

const Chart = require("chart.js");

class Data extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    victimsAgeData: [],
    // killerAgeData: [1, 50, 70, 80, 90, 100, 77, 88],
  };

  componentDidMount() {
    const node = this.node;

    apiHandler
      .dataAllEvents()
      .then((events) => {

        let under26 = 0;
        let under36 = 0;
        let under46 = 0;
        let under56 = 0;
        let under66 = 0;
        let under76 = 0;
        let under86 = 0;
        let moreThan86 = 0;
        let eachAge = events.map((event) => event.age);
        eachAge.forEach((age) => {
          console.log(age);

          if (age < 26) {
            under26++;
          } else if (age < 36 && age > 25) {
            under36++;
          } else if (age < 46 && age > 35) {
            under46++;
          } else if (age < 56 && age > 45) {
            under56++;
          } else if (age < 66 && age > 55) {
            under66++;
          } else if (age < 76 && age > 65) {
            under76++;
          } else if (age < 86 && age > 75) {
            under86++;
          } else if (age > 85) {
            moreThan86++;
          };
          // switch (age) {
          //   case age < 26:
          //     under26 = under26 + 1;
          //     console.log('switch age:', under26);
          //     break;
          //   case (age < 36 && age > 25) :
          //     under36+=1;
          //     break;
          //   case age < 46 && age > 35 :
          //     under46++;
          //     break;
          //   case age < 56 && age > 45 :
          //     under56++;
          //     break;
          //   case age < 66 && age > 55 :
          //     under66++;
          //     break;
          //   case age < 76 && age > 65 :
          //     under76++;
          //     break;
          //   case age < 86 && age > 75 :
          //     under86++;
          //     break;
          //   case age > 85 :
          //     moreThan86++;
          //     break;
          //     default: console.log('bibou');
          // }
        });
        this.setState({ victimsAgeData: [under26, under36, under46, under56, under66, under76, under86, moreThan86] });
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
            label: "Nombre de victimes",
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
            label: "Nombre d'assassins ou assassins présumés",
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

    return (
      <div>
        {console.log('current state', this.state.victimsAgeData)}
        <canvas
          style={{ width: 800, height: 300 }}
          ref={(node) => (this.node = node)}
        />
      </div>
    );
  }
}

export default Data;
