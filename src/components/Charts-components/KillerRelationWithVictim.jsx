import React, { PureComponent } from "react";
import apiHandler from "../../api/apiHandler";
const Chart = require("chart.js");

export class killerRelationWithVictim extends PureComponent {
  state = {
    relationship: "",
  };

  node = React.createRef(null);
  chart = React.createRef(null);

  componentDidMount() {
    apiHandler
      .dataAllEvents()
      .then((events) => {
        let killerStatus = events.relationship;
        console.log("hey", killerStatus);

        let relationshipChart = new Chart(this.node.current, {
          type: "pie",
          data: {
            labels: [
              "Compagnon",
              "Ex-compagnon",
              "Compagnon présumé",
              "Non renseigné",
            ],
            datasets: [
              {
                label: "Relation avec la victime",
                data: [2, 5, 1, 6],
                backgroundColor: ["rgba(107, 255, 99, 0.2)", "blue", "red", "grey"],
              },
            ],
          },
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <canvas style={{ width: 800, height: 300 }} ref={this.node} />
      </div>
    );
  }
}

export default killerRelationWithVictim;
