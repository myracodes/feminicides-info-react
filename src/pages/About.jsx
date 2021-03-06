import React from 'react';
import ProfileCard from './../components/About-components/ProfileCard';

const About = () => {
  return (
    <div className="page-container">
      <h1 className="title-1">À propos</h1>
      <div className="padding-top flex flex-column cards-container">
        <div className="padding-top">
          Ce site internet est basé sur le travail du collectif Féminicides par compagnons ou ex, qui répertorie et dénonce les féminicides commis en France dans le cadre conjugal. <br />
        </div>
        <div className="padding-top">
          Il a été réalisé par 4 développeuses : <br />

          <span className="padding-top flex wrap">

            <span className="padding-top">
              <ProfileCard
                firstName="Anaïs"
                lastName="Engler"
                picture="/photos/Anais.jpg"
                gitHub="https://github.com/anachannn"
              />
            </span>
            <span className="padding-top">
              <ProfileCard
                firstName="Anna"
                lastName="Lefour"
                picture="/photos/Anna.jpg"
                gitHub="https://github.com/ankapieka"
              />
            </span>
            <span className="padding-top">
              <ProfileCard
                firstName="Mélusine"
                lastName="Rey"
                picture="/photos/Mélu.jpg"
                gitHub="https://github.com/zelumine"
              />
            </span>
            <span className="padding-top">
              <ProfileCard
                firstName="Myriam"
                lastName="Mira"
                picture="/photos/My.jpg"
                gitHub="https://github.com/myracodes"
              />
            </span>
          </span>
        </div>
        <div className="padding-top">
          Ce projet a été réalisé dans le cadre du bootcamp Fullstack web development d'<a href="https://www.ironhack.com/fr">Ironhack</a>. 
        </div>

      </div>

      <h1 className="title-1">Contact</h1>
      <div className="padding-top flex flex-column">
        <a href="mailto:address@e.mail">Contacter le collectif FPCE <br />
        (Féminicides par compagnons ou ex)</a>
        <div className="flex-row social padding-top">
          <a href="https://www.facebook.com/feminicide" target="_blank" rel="noreferrer"><i class="fab fa-facebook-square fa-3x"></i></a> &nbsp; &nbsp;
          <a href="https://www.instagram.com/feminicidespar/" target="_blank" rel="noreferrer"><i class="fab fa-instagram fa-3x"></i></a> &nbsp; &nbsp;
          <a href="https://twitter.com/feminicidesfr" target="_blank" rel="noreferrer"><i class="fab fa-twitter-square fa-3x"></i></a>
        </div>
      </div>
    </div>
  )
}

export default About;
