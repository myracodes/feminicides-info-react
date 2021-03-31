import React from "react";
import TotalNumber from "../Total-Events/TotalNumber";

function IntroData() {
  return (
    <div className="total-num-box">
      <div class="total-num-phrase">Le nombre de féminicides en France cette année s'élève à</div>
      <div className="total-num-data">
        <TotalNumber />
      </div>
      <p>
        Dans cette page sont exploitées des données relatives aux féminicides
        qui ont lieu en France métropolitaine, dans les DOM-COM et dans les
        autres territoires français aux statuts particuliers. Elles sont mises à
        jour régulièrement. Sont pris en compte les féminicides commis sur des
        femmes cisgenres et transgenres. Sauf mention contraire, les
        données présentées datent de l'année en cours. Dans tous nos graphiques,
        la catégorie "Non renseigné" signifie une absence de données.
      </p>
      <br></br>
    </div>
  );
}

export default IntroData;
