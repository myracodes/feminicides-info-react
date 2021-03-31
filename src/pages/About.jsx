import React from 'react';

const About = () => {
  return (
    <div className="page-container">
      <h1 className="title-1">À propos</h1>
      <div className="padding-top">
        Ce site internet est basé sur le travail du collectif Féminicides par compagnons ou ex, qui répertorie et dénonce les féminicides commis en France dans le cadre conjugal. <br/>
        La partie technique a été réalisée par 4 développeuses : Anaïs Engler, Anna Lefour, Mélusine Rey, et <a href="https://github.com/myracodes" target="_blank" rel="noreferrer">Myriam Mira</a>. {/* Je mets nos liens GitHub ou LinkedIn ou autre site/portfolio de votre choix ?*/}
      </div>

      <h1 className="title-1">Contact</h1>
      <div className="padding-top flex flex-column">
        <a href="mailto:address@e.mail">Contacter le collectif FPCE <br/>
        (Féminicides par compagnons ou ex)</a>
        <a href="https://www.facebook.com/feminicide" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://www.instagram.com/feminicidespar/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://twitter.com/feminicidesfr" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </div>
  )
}

export default About;
