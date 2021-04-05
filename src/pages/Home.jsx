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
              <p className="txt-catchphrase">
                En France, un homme<span className="color-secondary">assassine</span>&nbsp;sa compagne ou&nbsp;ex-compagne tous les
                <br />
                <div className="background-color">
                  <p className="two-days-text">2 jours</p>
                </div>
              </p>
            </div>
            {/* <div className="text-homepage">
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
            </div> */}
          </div>

          <div className="map-num-container">
            <div className="map-phrase">
              <br></br>Depuis le début de l'année, elles sont :
            </div>
            <div className="home-total-num fade-in">
              <br />
              <div>
                <TotalNumber />
              </div>
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
