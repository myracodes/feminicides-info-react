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
       
    return (
        <div className="page-container">

            <h1 className="title-1">{this.state.event.eventNumber}. {this.state.event.firstName} {this.state.event.lastName}</h1> <br/>
            <h2 className="title-2">{this.state.event.age} ans</h2> <br/>
            <p className="padding-top">Le <b>{this.state.event.date.split('T00:00:00.000Z')}</b>, à <b>{this.state.event.city}</b></p>
            <p>Tuée par son <b>{this.state.event.relationship}</b> ({this.state.event.killerAge} ans)</p>


            <p>A-t-il été condamné ? {this.state.event.condemned}</p>
            <p>Autres victimes ? {this.state.event.nbOtherVictims}</p>
            <p>Si oui, qui ? {this.state.event.otherVictims}</p>
        
            <p className="padding-top"><b>Description : </b>{this.state.event.description}</p>
            <hr/>
            <p className="padding-top">Nombre de plaintes déposées avant les faits : {this.state.event.complaint}</p>
            <p>Décision(s) de justice : {this.state.event.courtDecision}</p>
            
            <p>Dans la presse : <a href={this.state.event.pressArticles[0]}>lien</a></p>
            
            <p>Commémoration :</p>
            <img src={this.state.event.commemoration} alt="collage commémoratif" className="padding-top"/>
            <p>Crédit photo : {this.state.event.imageSource}</p> {console.log(this.state.event.imageSource, "source")}
            <div className="filters-box">
            <h2 className="title-2 padding-top">La région {this.state.event.region.name} et le traitement des violences sexistes et sexuelles (VSS)</h2>
            <p className="padding-top">Parti politique majoritaire au Conseil régional : {this.state.event.region.politicalParty}</p>
            <p>Budget 2021 alloué à la lutte contre les VSS : {this.state.event.region.regionVSSBudget} Md €</p>
            <p>Nb de personnel formés à la prise en charge des victimes de violences : {this.state.event.region.trainedStaff}</p>
            <p>Nb de places en hébergement d'urgence pour les femmes victimes de violences : {this.state.event.region.shelterPlaces}</p>
            <p><b>Nb de féminicides dans la région : {this.state.event.region.events.length}</b></p>
            <br></br>
            </div>
            <br/>

            <Link className="btn-1" to={`/carte`}>Retour à la carte</Link>
            
        </div>
    )
    }
}   

export default Details
