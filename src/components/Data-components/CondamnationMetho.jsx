import React from "react";

function CondamnationMetho() {
  return (
    <div>
      <h2>Statut judiciaire</h2>
      <h3>Méthodologie</h3>
      <div>
        <p>
          Ce graphique est basé sur les données de l'année 2021. Ces données
          sont mises à jour régulièrement. Cinq catégories sont représentées :          <ul>
            <li>
              Condamné signifie que l'assassin a été reconnu coupable.
            </li>
            <li>
              Non condamné signifie que l'assassin présumé a été acquitté.
            </li>
            <li>
              En cours signifie soit que l'assassin présumé est en fuite, soit qu'il a été appréhendé mais que l'enquête est encore en cours.
            </li>
            <li>
              Suicide après acte représente le nombre des cas où l'assassin ou assassin présumé s'est donné la mort après avoir tué sa compagne ou son ex-compagne.
            </li>
            <li>Non renseigné signifie une absence de donnée.</li>
          </ul>
        </p>
        <h3>Analyse</h3>
        <div>
          <p>
            L'année 2021 vient de commencer, il est donc logique que la plupart des cas soient "en cours".
          </p>
        </div>
      </div>
    </div>
  );
}

export default CondamnationMetho;
