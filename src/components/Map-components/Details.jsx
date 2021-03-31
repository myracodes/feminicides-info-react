import React from 'react';
import apiHandler from '../../api/apiHandler';
import { Link } from "react-router-dom";


class Details extends React.Component {

    state = {
        event:null
    }

    componentDidMount() { 

        const eventId = this.props.match.params.id;

        apiHandler
        .mapOneEvent(eventId)
        .then(data => this.setState({event : data.data}))
        .catch(error => console.log(error))
    
    };


    render(){
        if(this.state.event === null){
            return <div>Chargement en cours...</div>
            
        }
        console.log("hey", this.props)
    return (
        <div>

            <h1>{this.state.event.eventNumber}. {this.state.event.firstName} {this.state.event.lastName}</h1>
            <h2>{this.state.event.age} ans</h2>
            <p> Quand ? {this.state.event.date.split('T00:00:00.000Z')}</p>
            <p>Où ? {this.state.event.city}</p>
            <p>Tuée par son {this.state.event.relationship}, {this.state.event.killerAge} ans</p>


            <p>A-t-il été condamné ? {this.state.event.condemned}</p>
            <p>Autres victimes ? {this.state.event.nbOtherVictims}</p>
            <p>Si oui, qui ? {this.state.event.otherVictims}</p>
            <p>Description : {this.state.event.description}</p>
            <p>Nombre de plaintes déposées avant les faits : {this.state.event.complaint}</p>
            <p>Décision(s) de justice : {this.state.event.courtDecision}</p>
            <hr></hr>
            <a href={this.state.event.pressArticles[0]}>Articles de presse (lien)</a>
            <br></br>
            <a href={this.state.event.commemoration[0]}>Commémorations (lien)</a>
            <hr></hr>
            <h2>{this.state.event.region.name} et les VSS</h2>
            <p>Parti politique majoritaire au Conseil régional : {this.state.event.region.politicalParty}</p>
            <p>Budget 2021 alloué aux VSS : {this.state.event.region.regionVSSBudget} Md €</p>
            <p>Nb de personnel formés à la prise en charge des VSS : {this.state.event.region.trainedStaff}</p>
            <p>Nb de places en hébergement d'urgence pour les femmes victimes de VSS : {this.state.event.region.shelterPlaces}</p>
            <p>Nb de féminicides dans la région : {this.state.event.region.events.length}</p>


            <Link to={`/carte`}>Retour à la carte</Link>
            
        </div>
    )
    }
}   

export default Details
