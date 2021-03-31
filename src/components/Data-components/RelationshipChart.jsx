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

        function giveArrayLength(array, value) {
          return array.filter((elem) => elem === value).length;
        };

        let compagnon = giveArrayLength(killerStatus, "compagnon");
        let exCompagnon = giveArrayLength(killerStatus, "ex-compagnon");
        let compagnonSup = giveArrayLength(killerStatus, "compagnon supposé");
        let nonRens = giveArrayLength(killerStatus, "non renseigné");

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
                backgroundColor: pattern.generate(["mediumorchid", "mediumpurple", "indigo", "lightgrey"]),
              },
            ],
          },
          options: {
            title: {
              display: true,
              text: `Relation`,
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
      <div className="chart">
        <canvas style={{ width: 800, height: 300 }} ref={this.node} />
      </div>
    );
  }
}

export default relationshipChart;
