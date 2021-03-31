import React from "react";
import TotalNumber from "../Total-Events/TotalNumber";

function IntroData() {
  return (
    <div>
      Le nombre de féminicides en France cette année s'élève à <TotalNumber />.
      <p>
        Les données présentées sont mises à jour régulièrement. Sont traités les
        féminicides commis sur des femmes cisgenres et transgenres. 
        /**(je pense qu'il faut le préciser car la question se pose, quitte à changer après le modèle pour ajouter une key genre) */
        Les données
        récupérées concernent la France métropolitaine, les DOM-COM et les
        autres territoires français aux statuts particuliers. Sauf mention
        contraire, sont exploitées des données de l'année en cours. La catégorie
        "Non renseigné" signifie une absence de données.
      </p>
      <br></br>
    </div>
  );
}

export default IntroData;
