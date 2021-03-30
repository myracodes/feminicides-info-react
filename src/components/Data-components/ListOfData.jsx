import React, { PureComponent } from "react";
import apiHandler from "../../api/apiHandler";

export class ListOfData extends PureComponent {
  state = {
    averageComplaints: [],
  };

  componentDidMount() {
      apiHandler
      .dataAllEvents()
      .then((events) => {
          console.log(events);
          let complaints = events.map((event) => {
              return event.complaint
            });
          let average = complaints.reduce((acc, val) => acc + val / complaints.length).toFixed(2)
          this.setState({averageComplaints: average})
      })

  }

  render() {
    return (
      <div>
        <ul>
          <li><p>Nombre moyen de plaintes déposées par la victime  : {this.state.averageComplaints}</p></li>
          <li><p>Âge moyen des victimes : </p></li>
          {/* <li><p></p></li> */}
        </ul>
      </div>
    );
  }
}

export default ListOfData;
