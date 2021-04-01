import React from "react";

function CondamnationMetho() {
  return (
    <div>
      <h2 className="title-2">
        Statut judiciaire de l'assassin ou de l'assassin présumé
      </h2>
      <h3 className="title-3">Méthodologie</h3>
      <div className="padding-top">
        <div>
          <p>
            Cinq catégories sont représentées :
          </p>
          <ul>
            <li>
              <b>Condamné</b> signifie que l'assassin a été jugé et reconnu
              coupable.
            </li>
            <li>
              <b>Non condamné</b> signifie que l'assassin présumé a jugé et
              acquitté.
            </li>
            <li>
              <b>En cours</b> signifie soit que l'assassin présumé est en fuite,
              soit qu'il a été appréhendé mais que l'enquête est encore en
              cours.
            </li>
            <li>
              <b>Suicide après acte</b> représente le nombre des cas où l'assassin
              ou assassin présumé s'est donné la mort après avoir tué sa
              compagne ou son ex-compagne.
            </li>
          </ul>
        </div>

        <h3 className="title-3">Analyse</h3>
        <div className="padding-top">
          <p>
            L'année 2021 vient de commencer, la plupart des cas sont donc encore
            en cours. Les suicides et tentatives de suicides après l'assassinat
            sont également fréquents dans les affaires de féminicides. Ici, les
            compagnons et ex-compagnons suspects ont été appréhendés. Mais il
            arrive dans certains cas, non représentés dans ce graphique, que le
            compagnon ou ex-compagnon suspecté ne soit pas inquiété.
          </p>
        </div>
      </div>
    </div>
  );
}
export default CondamnationMetho;
