import React from "react";

function RelationshipMetho() {
  return (
    <div>
      <h2 className="title-2">Relation entre la victime et le coupable ou l'assassin présumé</h2>
      <h3 className="title-3">Méthodologie</h3>
      <div className="method-text padding-top">
        <div>
          <p>
            Nous avons choisi d'utiliser le terme "compagnon" de façon générique afin d'englober les diverses relations
            possibles entre victimes et assassin/assassin présumé : mari, ex-mari, conjoint, petit-ami, etc.
          </p>
          <ul>
            <li>
              <b>Compagnon</b> signifie que la victime et le coupable ou l'assassin
              présumé entretenaient une relation au moment des faits.
            </li>
            <li>
              <b>Ex-compagnon</b> signifie que la relation entre les deux personnes
              avait cessé.
            </li>
            <li>
              <b>Compagnon supposé</b> signifie que l'enquête en cours n'a pas permis
              de déterminer la relation entre les deux personnes, pour le
              moment.
            </li>
          </ul>
        </div>


        <h3 className="title-3">Analyse</h3>
        <div className="padding-top">
          <p>
            Le nombre de "compagnon" et "ex-compagnon" est quasiment identique.
            Les femmes qui trouvent les ressources nécessaires et la force de
            quitter leur compagnon violent vivent sous la menace de représailles
            (harcèlement, menaces, pistage...). Elles n'ont "pas le droit" de
            quitter leur compagnon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RelationshipMetho;
