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
                backgroundColor: pattern.generate(["rgb(199, 178, 217)", "rgb(112, 43, 138)", "indigo", "lightgrey"]),
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
              duration: 2000,
              easing: 'easeInQuad'
            },
            title: {
              display: true,
              position: 'bottom',
              fontSize: 18,
              fontFamily: "Lato",
              text: `Relation entre la victime et le coupable ou l'assassin présumé - 2021`,
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
        <canvas ref={this.node} />
      </div>
    );
  }
}

export default relationshipChart;
