import React from "react";
import TotalNumber from "../components/Total-Events/TotalNumber";
import "./../styles/global.css";
import "./../styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="homepage-canva page-container">
        <div className="text-and-map">
          <div className="all-text">
            <div className="catchphrase">
              Depuis le début de l'année, 26 femmes ont été tuées par leur compagnon ou ex.
            </div>
            <div className="text-homepage">
              <p>
                Travail éprouvant mais nécessaire pour que ces femmes restent
                encore un peu vivantes, nommées quand c'est possible et non plus
                une parmi d'autres anonymes dans le chiffre global annuel.
                Chiffre dont pas grand monde ne s'émeut ni ne s'indigne parmi
                les politiques et même la société... Nous ajusterons le nombre
                des orphelin·e·s, victimes directes ou collatérales du
                terrorisme patriarcal familial, toléré, minimisé, ignoré des
                politiques... tellement moins spectaculaire, donc moins
                effrayant que le terrorisme religieux et pourtant tout aussi
                mortifère !
              </p>
            </div>
          </div>

          <div className="map-num-container">
            <div className="home-total-num fade-in">
              <TotalNumber />
            </div>
            <img
              className="home-map"
              src="https://res.cloudinary.com/dcbzfldni/image/upload/v1617270285/mapFrance_tlaq0d.png"
              alt="carte homepage"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
