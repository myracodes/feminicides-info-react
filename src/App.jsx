import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ConnexionAdmin from './pages/ConnexionAdmin';
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Data from "./pages/Data";
import Map from "./pages/Map";
import Resources from "./pages/Resources";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/carte" component={Map} />
        <Route exact path="/donnees" component={Data} />
        <Route exact path="/ressources" component={Resources} />
        <Route exact path="/a-propos" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/espace-admin" component={Signin} />
        <Route exact path="/ajouter-admin" component={ConnexionAdmin} />
        <ProtectedRoute exact path="/admin/nouvel-utilisateur" component={Signup} />
        <ProtectedRoute exact path="/admin/tableau-de-bord" component={Dashboard} />
        <ProtectedRoute exact path="/admin/editer-utilisateur" component={EditUser} />
      </Switch>
    </div>
  );
}

export default App;
