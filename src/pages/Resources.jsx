import React from 'react';
import Gallery from './../components/Resources-components/Gallery';
import "../styles/Ressources.css";

const Ressources = () => {
  return (
    <div className="page-container">
      <h1 className="title-1">Ressources</h1><br/>

    <div className="flex">
      <div className="container-ressources">
        <h2 className="title-2">Arrêtons les violences</h2>
      
        <div className="flex flex-column padding-top">
          <p> Vous cherchez une association près de chez vous informer ou pour vous engager ? Vous-même ou une proche avez besoin d'aide ? Nous vous conseillons le site du gouvernement <a href="https://arretonslesviolences.gouv.fr/" target="_blank" rel="noreferrer">Arrêtons les violences</a> pour trouver les ressources nécessaires. Plusieurs entrées : </p>
          <br></br>
          <a className="btn-2 btn-center" href="https://arretonslesviolences.gouv.fr/besoin-d-aide" target="_blank" rel="noreferrer">Besoin d'aide</a> <br/>
          <a className="btn-2 btn-center" href="https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles/associations" target="_blank" rel="noreferrer">Chercher une association</a> <br/>
        </div>
      
      </div>

      <div className="container-ressources flex flex-column">
        <h2 className="title-2">Informations complémentaires</h2>
        <br></br>

        <div className="flex flex-column padding-top">
        <p>Pour plus d'informations, consultez le site du <b>Haut Conseil à l'Égalité (HCE).</b> La commission « Violences de genre » est en charge de l’évaluation des plans nationaux de lutte contre les violences faites aux femmes.</p>
        <br></br>
        <a className="btn-3 btn-center" href="https://www.haut-conseil-egalite.gouv.fr/violences-de-genre/" target="_blank" rel="noreferrer">En savoir plus</a> <br/>
        </div>

      </div>
      </div>
     

      <div className="archives">
        <h2 className="title-2">Historique des féminicides recensés en France</h2>
        <p>Travail réalisé par le Collectif Féminicides par Compagnons ou ex en France.</p>
        <ul className="cartes-annees flex flex-row">
          <li>
          <a className="archives-btn" href="https://www.google.com/maps/d/u/1/viewer?hl=fr&mid=1AoTHJTAvWz-P1ddCKe1NhWtdsOQgcLPA&ll=50.45705082693985%2C18.134848058083932&z=3&fbclid=IwAR2-jJGcwvBFX91wDKM7ThWJMF1bqaUv-iV_mnwAlCpZfZnR6OX3jjqFJzs" target="_blank" rel="noreferrer">
            2021</a>
          </li>
          <li>
            <a className="archives-btn" href="https://www.google.com/maps/d/u/0/viewer?mid=1KlTxeXvul_y_lfo0JuTdnuksqA1LW6JS&ll=20.78613373268215%2C-72.02392537146807&z=3" target="_blank" rel="noreferrer">
            2020</a>
          </li>
          <li>
            <a className="archives-btn" href="https://www.google.com/maps/d/u/0/viewer?mid=1Y9bFj8Cjfl3rKwuyDBB5-LNkdKKAjtq9&ll=18.015497665816977%2C0&z=2" target="_blank" rel="noreferrer">
            2019</a>
          </li>
          <li>
            <a className="archives-btn" href="https://www.google.fr/maps/d/u/0/viewer?mid=19gV1RSgQ5LNG51BeE-WiV7G8m1MocfXZ&ll=-3.81666561775622e-14%2C-69.01567619999992&z=1" target="_blank" rel="noreferrer">
            2018</a>
          </li>
          <li>
            <a className="archives-btn" href="https://www.google.com/maps/d/u/0/viewer?mid=15ZxvoBUgO4ttolUFSoU5UmuRe98&ll=46.09722818637166%2C3.7726595062499815&z=5" target="_blank" rel="noreferrer">
            2017</a>
          </li>
        </ul>


      </div>

      <img className="img-ressources btn-center" src="https://res.cloudinary.com/dcbzfldni/image/upload/v1617286322/61637_ovdea0.jpg" alt="photo"/>

    </div>
  )
}

export default Ressources;
