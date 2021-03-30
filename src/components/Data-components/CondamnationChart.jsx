import React, { PureComponent } from "react";
import apiHandler from "../../api/apiHandler";
import pattern from "patternomaly";
const Chart = require("chart.js");

export default class CondamnationChart extends PureComponent {
  state = {
    condemned: [],
    notCondemned: [],
    ongoing: [],
    suicide: [],
    nonRens: []
  };

  node = React.createRef(null);
  chart = React.createRef(null);

  componentDidMount() {
    apiHandler
      .dataAllEvents()
      .then((events) => {
        let condamnation = events.map((event) => event.condemned);

        let notCondemned = condamnation.filter((val) => val === "non condamné")
          .length;
        let condemned = condamnation.filter((val) => val === "condamné").length;
        let ongoing = condamnation.filter((val) => val === "en cours").length;
        let suicide = condamnation.filter((val) => val === "suicide après acte").length;
        let nonRens = condamnation.filter((val) => val === "non renseigné")
          .length;

        this.setState({
          condemned: condemned,
          notCondemned: notCondemned,
          ongoing: ongoing,
          suicide: suicide,
          nonRens: nonRens,
        });

        let condamnationChart = new Chart(this.node.current, {
          type: "bar",
          data: {
            labels: [
              "Statut judiciaire de l'assassin ou de l'assassin présumé",
            ],
            datasets: [
              {
                label: "Condamné",
                data: [this.state.condemned],
                backgroundColor: pattern.draw("square", "thistle"),
              },
              {
                label: "Non condamné",
                data: [this.state.notCondemned],
                backgroundColor: pattern.draw("disc", "plum"),
              },
              {
                label: "En cours",
                data: [this.state.ongoing],
                backgroundColor: pattern.draw("cross", "orchid"),
              },
              {
                label: "Suicide après acte",
                data: [this.state.suicide],
                backgroundColor: pattern.draw("line", "purple"),
              },
              {
                label: "Non renseigné",
                data: [this.state.nonRens],
                backgroundColor: "lightgrey",
              },
            ],
          },
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.nonRens === []) {
      return <div>Chargement en cours</div>;
    }

    return (
      <div>
        <canvas style={{ width: 800, height: 300 }} ref={this.node} />
      </div>
    );
  }
}
