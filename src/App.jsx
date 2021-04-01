import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Users/Signin";
import Signup from "./pages/Users/Signup";
// import ConnexionAdmin from './components/Forms/Users/ConnexionAdmin';
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardHome from "./pages/DashboardHome";
import DashboardEvents from "./pages/DashboardEvents";
import DashboardRegions from "./pages/DashboardRegions";
import DashboardUsers from "./pages/DashboardUsers";
import About from "./pages/About";
import Data from "./pages/Data";
import Map from "./pages/Map";
import Ressources from "./pages/Resources";
import EditUser from "./pages/Users/EditUser";
import AddEvent from "./pages/Events/AddEvent";
import EditEvent from "./pages/Events/EditEvent";
import EditRegion from "./pages/Regions/EditRegion";
import ReadRegion from "./pages/Regions/ReadRegion";
import Details from "./components/Map-components/Details";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/carte" component={Map} />
        <Route exact path="/carte/detail/:id" 
                        render={(historyProps) => {
                          return <Details {...historyProps} />
                        }}
        />
        <Route exact path="/donnees" component={Data} />
        <Route exact path="/ressources" component={Ressources} />
        <Route exact path="/a-propos" component={About} />
        <Route exact path="/espace-admin" component={Signin} />
        {/* <Route exact path="/ajouter-admin" component={ConnexionAdmin} /> */}
        <ProtectedRoute exact path="/admin/tableau-de-bord" component={DashboardHome} />
        <ProtectedRoute exact path="/admin/tableau-de-bord/evenements" component={DashboardEvents} />
        <ProtectedRoute exact path="/admin/tableau-de-bord/regions" component={DashboardRegions} />
        <ProtectedRoute exact path="/admin/tableau-de-bord/users" component={DashboardUsers} />
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
