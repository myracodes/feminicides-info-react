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
         * first retrieving the number of complaint filed by the victim
         * then calculating the average number of complaints
         */
        console.log(events);
        let complaints = events.map((event) => {
          return event.complaint;
        });
        let averageComp = giveAverage(complaints);
        this.setState({ averageComplaints: averageComp }); //normal que ce soit 0 pour l'instant

        /**
         * first retrieving the age of each victim
         * then calculating the average age
         */
        console.log(events);
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
            <p>
              Nombre moyen de plaintes déposées par la victime : {this.state.averageComplaints}.
            </p>
          </li>
          <li>
            <p>Âge moyen des victimes : {this.state.averageAge}. </p>
          </li>
          {/* <li><p></p></li> */}
        </ul>
      </div>
    );
  }
}

export default ListOfData;
