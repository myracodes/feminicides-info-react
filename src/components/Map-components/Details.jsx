import React from 'react';
import apiHandler from '../../api/apiHandler';
import { Link } from "react-router-dom";


class Details extends React.Component {

    state = {
        event:null
    }

    componentDidMount() { 

        console.log(this.state.event, "state");
        console.log(this.state.region, "region");
        // console.log(this.state.region.name, "region.name");
        const eventId = this.props.match.params.id;

        apiHandler
        .mapOneEvent(eventId)
        .then(data => this.setState({event : data.data}))
        .catch(error => console.log(error))
        console.log(this.state.event, "state after api handler");
    };


    render(){
        if(this.state.event === null){
            return <div>Chargement en cours...</div>
            
        }
       
    return (
        <div className="page-container">

            <h1 className="title-1">{this.state.event.eventNumber}. {this.state.event.firstName} {this.state.event.lastName}</h1> <br/>
            
            <div className="text-box">

                <p>Le <b>{this.state.event.date.split('T00:00:00.000Z')}, {this.state.event.firstName} {this.state.event.lastName}</b> a été tuée par son {this.state.event.relationship} ({this.state.event.killerAge} ans) à <b>{this.state.event.city}.</b><br></br>Elle avait <b>{this.state.event.age} ans.</b></p>
                <br></br>
                <p>A-t-il été condamné ? {this.state.event.condemned}</p>
                <p>Autres victimes connues ? {this.state.event.otherVictims}</p>
                <p className="padding-top"><b>Description : </b>{this.state.event.description}</p>

                <p className="padding-top"><b>Nombre de plaintes déposées avant les faits : {this.state.event.complaint}</b></p>
                <p>Etat de l'enquête : {this.state.event.courtDecision}</p>
            
                <p>Dans la presse : <a href={this.state.event.pressArticles[0]}>Lien vers l'article</a></p>

                <div className="flex flex-column commemoration">
                <img src={this.state.event.commemoration} alt="collage commémoratif" className="padding-top"/>
                <p>Crédit photo : {this.state.event.imageSource}</p> {console.log(this.state.event.imageSource, "source")}
                </div>

            

            <div className="filters-box padding-top">
                <h2 className="title-2 padding-top">La région {this.state.event.region.name} et le traitement des violences sexistes et sexuelles (VSS)</h2>
                <p className="padding-top">Parti politique majoritaire au Conseil régional : {this.state.event.region.politicalParty}</p>
                <p>Budget 2021 alloué à la lutte contre les VSS : {this.state.event.region.regionVSSBudget} Md €</p>
                <p>Nb de personnel formés à la prise en charge des victimes de violences : {this.state.event.region.trainedStaff}</p>
                <p>Nb de places en hébergement d'urgence pour les femmes victimes de violences : {this.state.event.region.shelterPlaces}</p>
                <p><b>Nb de féminicides dans la région : {this.state.event.region.events.length}</b></p>
           
            </div>
            </div>
            <br/>

            <Link className="btn-1" to={`/carte`}>Retour à la carte</Link>
            
        </div>
    )
    }
}   

export default Details
