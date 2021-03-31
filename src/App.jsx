import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Users/Signin";
import Signup from "./pages/Users/Signup";
import ConnexionAdmin from './components/Forms/Users/ConnexionAdmin';
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Data from "./pages/Data";
import Map from "./pages/Map";
import Resources from "./pages/Resources";
import EditUser from "./pages/Users/EditUser";
import AddEvent from "./pages/Events/AddEvent";
import EditEvent from "./pages/Events/EditEvent";
import EditRegion from "./pages/Regions/EditRegion";
import ReadRegion from "./pages/Regions/ReadRegion";

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
        <ProtectedRoute exact path="/admin/tableau-de-bord" component={DashboardHome} />
        <ProtectedRoute exact path="/admin/nouvelle-utilisatrice" component={Signup} />
        <ProtectedRoute exact path="/admin/editer-utilisatrice/:id" component={EditUser} />
        <ProtectedRoute exact path="/admin/nouvel-evenement" component={AddEvent} />
        <ProtectedRoute exact path="/admin/editer-event/:id" component={EditEvent} />
        <ProtectedRoute exact path="/admin/editer-region/:id" component={EditRegion} />
        <Route exact path="/admin/consulter-region/:id" 
                        render={(historyProps) => {
                          return <ReadRegion {...historyProps} />
                        }}
        />
      </Switch>
    </div>
  );
}

export default App;
