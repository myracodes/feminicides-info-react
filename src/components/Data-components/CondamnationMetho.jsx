import React from "react";

function CondamnationMetho() {
  return (
    <div>
      <h2>Statut judiciaire</h2>
      <h3>Méthodologie</h3>
      <div>
        <p>
          Cinq catégories sont représentées :
          <ul>
            <li>
              - "Condamné" signifie que l'assassin a été reconnu coupable.
            </li>
            <li>
              - "Non condamné" signifie que l'assassin présumé a été acquitté.
            </li>
            <li>
              - "En cours" signifie soit que l'assassin présumé est en fuite,
              soit qu'il a été appréhendé mais que l'enquête est encore en
              cours.
            </li>
            <li>
              - "Suicide après acte" représente le nombre des cas où l'assassin
              ou assassin présumé s'est donné la mort après avoir tué sa
              compagne ou son ex-compagne.
            </li>
          </ul>
        </p>
        <h3>Analyse</h3>
        <div>
          <p>
            L'année 2021 vient de commencer, la plupart des cas sont donc encore
            en cours. Le rendu d'un jugement dans ce genre d'affaire varie entre
            *** et ***. Les suicides et tentatives de suicides après
            l'assassinat sont également fréquents dans les affaires de
            féminicides.
          </p>
        </div>
      </div>
    </div>
  );
}
export default CondamnationMetho;
