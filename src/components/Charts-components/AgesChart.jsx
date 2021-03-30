import apiHandler from "../../api/apiHandler";
import React, { Component } from "react";
import { Route } from "react-router-dom";

const Chart = require("chart.js");

class Data extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * Initial state of victims and killers ages is an empty array.
   * Later, the relevant information will be dynamically displayed
   */
  state = {
    victimsAgeData: [],
    killerAgeData: [],
  };

  node = React.createRef(null)
  chart = React.createRef(null)

  componentDidMount() {
    // const node = this.node;

    apiHandler
      .dataAllEvents()
      .then((events) => {

        /**
         * Sets the initial amount of victims within an age range.
         * This number will be dynamically increased depending on the data retrieved from the database (see below)
         */
        let under26 = 0;
        let under36 = 0;
        let under46 = 0;
        let under56 = 0;
        let under66 = 0;
        let under76 = 0;
        let under86 = 0;
        let moreThan86 = 0;

        /**
         * Sets the initial amount of killers within an age range.
         * This number will be dynamically increased depending on the data retrieved from the database (see below)
         */
        let killerUnder26 = 0;
        let killerUnder36 = 0;
        let killerUnder46 = 0;
        let killerUnder56 = 0;
        let killerUnder66 = 0;
        let killerUnder76 = 0;
        let killerUnder86 = 0;
        let killerMoreThan86 = 0;

        /**
         * For each event, takes the age of the victim. The if statement inside the forEach will increase by 1 the amout of people in the relevant age range (see above)
         */
        let eachAge = events.map((event) => event.age);
        eachAge.forEach((age) => {
          // console.log(age);

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

          /**
           * We tried a switch before going for an "if else", would appreciate feedback on why it did not work. Maybe because it's inside a forEach?
           */
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

        /**
         * For each event, takes the age of the killer. The if statement inside the forEach will increase by 1 the amout of people in the relevant age range (see above)
         */
        let eachKillerAge = events.map((event) => event.killerAge);
        eachKillerAge.forEach((killerAge) => {
          if (killerAge < 26) {
            killerUnder26++;
          } else if (killerAge < 36 && killerAge > 25) {
            killerUnder36++;
          } else if (killerAge < 46 && killerAge > 35) {
            killerUnder46++;
          } else if (killerAge < 56 && killerAge > 45) {
            killerUnder56++;
          } else if (killerAge < 66 && killerAge > 55) {
            killerUnder66++;
          } else if (killerAge < 76 && killerAge > 65) {
            killerUnder76++;
          } else if (killerAge < 86 && killerAge > 75) {
            killerUnder86++;
          } else if (killerAge > 85) {
            killerMoreThan86++;
          };
        });

        this.setState({ victimsAgeData: [under26, under36, under46, under56, under66, under76, under86, moreThan86], killerAgeData: [killerUnder26, killerUnder36, killerUnder46, killerUnder56, killerUnder66, killerUnder76, killerUnder86, killerMoreThan86] });

        let agesChart = new Chart(this.node.current, {
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
                label: "Victimes",
                data: [under26, under36, under46, under56, under66, under76, under86, moreThan86],
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
                label: "Assassins ou assassins présumés",
                data: [killerUnder26, killerUnder36, killerUnder46, killerUnder56, killerUnder66, killerUnder76, killerUnder86, killerMoreThan86],
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
      })
      .catch((err) => console.log(err));
  }

  render() {
    // if (this.state.victimsAgeData === []) {
    //   return <div>Chargement en cours...</div>
    // }

    return (
      <div>        
        <canvas
          style={{ width: 800, height: 300 }}
          ref={this.node}
        />
      </div>
    );
  }
};

export default Data;
