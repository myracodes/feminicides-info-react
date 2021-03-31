import React from "react";
import TotalNumber from "../components/Total-Events/TotalNumber"

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <TotalNumber/>
        <p>Colors</p>
        <p className="color-1">Hello</p>
        <p className="color-2">Hello</p>
        <p className="color-3">Hello</p>
        <p className="color-4">Hello</p>

        <h1 className="title-1">Titre 1</h1>
      <h2 className="title-2">Titre 2</h2>
      <h3 className="title-3">Titre 3</h3>
      <button className="btn-1">Bouton 1</button>
      <button className="btn-2">Bouton 2</button>
      <button className="btn-3">Bouton 3</button>
      <p>Form</p>
      <form className="form-container">
        <label className="form-label">Une question</label>
        <input className="form-input"placeholder="Une réponse"></input>
        <label className="form-label">Une autre question</label>
        <input className="form-input"placeholder="Une réponse"></input>
        <button className="btn-3">Rechercher</button>
      </form>
      </div>
    );
  }
}

export default Home;
