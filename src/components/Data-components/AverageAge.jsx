import React, { PureComponent } from "react";
import apiHandler from "../../api/apiHandler";

export class ListOfData extends PureComponent {
  state = {
    averageAge: [],
    agesWithoutZeroLength: [],
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
          return (array.reduce((acc, val) => acc + val) / array.length).toFixed(
            0
          );
        }
        /**
         * first retrieving the age of each victim
         * extracting the "0" default value to avoid distort result
         * then calculating the average age
         */

        let ages = events.map((event) => {
          return event.age;
        });
        let agesWithoutZero = ages.filter((val) => val !== 0);
        let agesWithoutZeroLength = agesWithoutZero.length;
        let averageAge = giveAverage(agesWithoutZero);
        this.setState({
          averageAge: averageAge,
          agesWithoutZeroLength: agesWithoutZeroLength,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <p className="to-center">
              Âge moyen des victimes : <b> {this.state.averageAge} ans.</b>{" "}
            </p>
            <p>
              Lorsque l'âge des victimes n'est pas renseigné, il est de 0 par
              défaut. Pour ne pas la fausser la moyenne, ces valeurs nulles sont
              exclues. Le résultat affiché ici a donc été calculé sur{" "}
              {this.state.agesWithoutZeroLength} valeurs.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListOfData;
