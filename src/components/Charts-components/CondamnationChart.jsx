import React, { PureComponent } from "react";
import apiHandler from "../../api/apiHandler";
import pattern from "patternomaly";
const Chart = require("chart.js");

export default class CondamnationChart extends PureComponent {
  state = {
    comdamnation: [],
  };

  node = React.createRef(null);
  chart = React.createRef(null);

  componentDidMount() {
    apiHandler
      .dataAllEvents()
      .then((events) => {
        let condamnation = events.map((event) => event.condemned);

        let notCondemned = condamnation.filter((val) => val === false).length;
        let condemned = condamnation.filter((val) => val !== false).length;

        this.setState({ comdamnation: [condemned, notCondemned] });

        let condamnationChart = new Chart(this.node.current, {
            type: 'bar',
            data: {
                labels: [ "Condamné", "Autre statut"],
                datasets: [
                    {
                        label: "Condamnation de l'auteur des faits",
                        data: this.state.comdamnation,
                        backgroundColor: pattern.generate(['black', 'orange'])
                    }
                ]
            }
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
