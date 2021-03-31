import React, { PureComponent } from "react";
import apiHandler from "../../api/apiHandler";

export class ListOfData extends PureComponent {
  state = {
    averageComplaints: [],
    highestComplaint: [],
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
        let complaints = events.map((event) => {
          return event.complaint;
        });
        let averageComp = giveAverage(complaints);

        let maxComp = Math.max(...complaints);

        this.setState({
          averageComplaints: averageComp,
          maxComplaint: maxComp,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <h2>Plaintes avant le féminicide</h2>
            <p>
              Nombre moyen de plaintes déposées par la victime :{" "}
              {this.state.averageComplaints}.
            </p>
            <p>
              Le plus haut nombre de plaintes déposées contre l'assassin ou
              assassin suspect : {this.state.maxComplaint}.
            </p>
            <p>
              Ces chiffres sont précisés à titre indicatif. En effet, il ne sont
              pas toujours le reflet de la réalité des femmes victimes de
              violences conjugales.
            </p>
            <p>
              Tout d'abord, une absence de plaintes déposées par la femme
              assassinée ne signifie pas qu'elle n'était pas victime de
              violences. Dans bien des cas, un compagnon violent est tout de
              même connu des forces de l'ordre, que ce soit suite au passage de
              la police ou des gendarmes au domicile après un signalement
              extérieur, par les voisins par exemple.
            </p>
            <p>
              Ensuite, aujourd'hui encore, les femmes victimes de violences sont
              confrontées à des refus de prendre leur plainte. Ou bien on leur
              impose le dépôt d'une main courante plutôt que d'une plainte. Et
              même lorsqu'une ou plusieurs plaintes ont été déposées, aucune
              mesure n'est prise à l'encontre du compagnon ou ex-compagnon, ou
              bien des mesures insuffisantes. Une enquête parue en novembre
              2019, réalisée par la Mission sur les homicides conjugaux de
              l'Inspection générale de la Justice, révèlait par exemple que
              "dans 41 % des cas, la victime avait alerté les services de
              police/gendarmerie et les services d’enquêtes avaient également
              été informés de faits de violences par le fait de signalement ou à
              l’occasion d’interventions au domicile. Pourtant, 82 % des
              mains-courantes et procès-verbaux de renseignement judiciaire
              n’avaient fait l’objet d’aucune investigation et 80 % des plaintes
              déposées par les victimes avaient abouti à un classement sans
              suite."
            </p>
            <p>
              Il ne faut pas oublier, aussi, que beaucoup de femmes sont se
              voient contraintes par leur compagnon ou ex de retirer leur
              plainte, sous la menace.
            </p>
            <br></br>
            <hr></hr>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListOfData;
