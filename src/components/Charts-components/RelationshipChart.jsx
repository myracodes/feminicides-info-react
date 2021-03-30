import React, { PureComponent } from "react";
import apiHandler from "../../api/apiHandler";
import pattern from "patternomaly";
const Chart = require("chart.js");


export class relationshipChart extends PureComponent {
  state = {
    relationship: [],
  };

  node = React.createRef(null);
  chart = React.createRef(null);

  componentDidMount() {
    apiHandler
      .dataAllEvents()
      .then((events) => {
        let killerStatus = events.map((event) => {
          return event.relationship;
        });

        let compagnon = killerStatus.filter((value) => value === "compagnon")
          .length;
        let exCompagnon = killerStatus.filter(
          (value) => value === "ex-compagnon"
        ).length;
        let compagnonSup = killerStatus.filter(
          (value) => value === "compagnon supposé"
        ).length;
        let nonRens = killerStatus.filter((value) => value === "non renseigné")
          .length;
        let total = compagnon + exCompagnon + compagnonSup + nonRens;

        this.setState({
          relationship: [compagnon, exCompagnon, compagnonSup, nonRens],
        });

        let relationshipChart = new Chart(this.node.current, {
          type: "doughnut",
          data: {
            labels: [
              "Compagnon",
              "Ex-compagnon",
              "Compagnon supposé",
              "Non renseigné",
            ],
            datasets: [
              {
                label: "Relation avec la victime",
                data: this.state.relationship,
                backgroundColor: pattern.generate(["lightgreen", "blue", "red", "grey"]),
              },
            ],
          },
          options: {
            title: {
              display: true,
              text: `Amount of events : ${total}`,
            },
            legend: {
              display: true,
              labels: {
                fontColor: "black",
              },
            },
          },
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.relationship === []) {
      return <div>Chargement en cours...</div>;
    }

    return (
      <div>
        <canvas style={{ width: 800, height: 300 }} ref={this.node} />
      </div>
    );
  }
}

export default relationshipChart;
