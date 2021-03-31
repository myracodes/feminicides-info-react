import React from 'react';
import apiHandler from '../../api/apiHandler';

class Details extends React.Component {

    state = {
        event:null
    }

    componentDidMount() { 

        const id = this.props.match.params._id;

        apiHandler
         .oneEvent(id)
         .then(data => this.setState({ event: data })
         .catch(error => console.log(error)))
    };


    render(){
        if(this.state.event === null){
            return <div>Chargement en cours...</div>
            
        }
        console.log("hey", this.props)
    return (
        <div>

            <p>{this.state.firstName}</p>

            <a href="/carte">Retour à la carte</a>
            
        </div>
    )
    }
}   

export default Details
