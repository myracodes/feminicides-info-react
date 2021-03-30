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
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <h3>Plaintes avant le féminicide</h3>
            <p>
              Nombre moyen de plaintes déposées par la victime :
              {this.state.averageComplaints}.
            </p>
            <p>
              Dans bien des cas, le conjoint violent est connu des forces de
              l'ordre, que ce soit suite au passage de la police ou des
              gendarmes au domicile après un signalement extérieur, ou bien
              parce que la victime avait déjà déposé des mains courantes ou
              porté plainte contre le compagnon ou ex-compagnon. Aujourd'hui
              encore, les femmes victimes de violences sont confrontées à des
              refus de prendre leur plainte ou à une minimisation du motif
              de leur plainte. Et même lorsqu'une ou
              plusieurs plaintes sont déposées, aucune mesures n'est prise à
              l'encontre du compagnon ou ex-compagnon, ou bien des mesures
              insuffisantes. Une enquête parue en novembre 2019, réalisée par la
              Mission sur les homicides conjugaux de l'Inspection générale de la
              Justice, révèlait par exemple que "dans 41 % des cas, la victime avait alerté
              les services de police/gendarmerie et les services d’enquêtes
              avaient également été informés de faits de violences par le fait
              de signalement ou à l’occasion d’interventions au domicile.
              Pourtant, 82 % des mains-courantes et procès-verbaux de
              renseignement judiciaire n’avaient fait l’objet d’aucune
              investigation et 80 % des plaintes déposées par les victimes
              avaient abouti à un classement sans suite." 
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListOfData;
