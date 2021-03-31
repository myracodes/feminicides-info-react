import React from "react";
import TotalNumber from "../Total-Events/TotalNumber";

function IntroData() {
  return (
    <div>
      Le nombre de féminicides en France cette année s'élève à <TotalNumber />.
      <p>
        Ce graphique est basé sur les données de l'année 2021. Ces données sont
        mises à jour régulièrement. Nous avons choisi de traiter des féminicides
        commis sur des femmes cisgenres et transgenres. Les données récupérées concernent la
        France métropolitaine, les DOM-COM et les autres territoires français
        aux statuts particuliers. Sauf mention contraire, nous exploitons des
        données de l'année en cours.
        Les catégories "Non renseigné" signifient une absence de données.
      </p>
    </div>
  );
}

export default IntroData;
