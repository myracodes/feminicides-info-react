import React, { PureComponent } from "react";
import apiHandler from "../../api/apiHandler";

export class ListOfData extends PureComponent {
  state = {
    averageComplaints: [],
    averageAge: [],
  };

  componentDidMount() {
    apiHandler
      .dataAllEvents()
      .then((events) => {
        /**
         * functions to re-use
         *
         */
        function giveAverage(array) {
          return array
            .reduce((acc, val) => acc + val / array.length)
            .toFixed(0);
        }
        /**
         * first retrieving the age of each victim
         * then calculating the average age
         */

        let ages = events.map((event) => {
          return event.age;
        });
        let averageAge = giveAverage(ages);
        this.setState({ averageAge: averageAge });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <p>Âge moyen des victimes : {this.state.averageAge}. </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListOfData;
