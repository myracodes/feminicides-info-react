import React from 'react'
import apiHandler from '../../api/apiHandler'

class PopUpDetails extends React.Component {

    state = {
        event:null
    }

    //  componentDidMount(){
    //      const id = this.props.match.params._id
    //      apiHandler
    //       .mapOneEvent(id)
    //       .then(data => this.setState({ event: data }))
    //       .catch(error => console.log(error));
    //  }

    render(){

        // if(this.state.event === null){
        //     return <div>Chargement en cours</div>
        // }

    return (
        <div>
            <h1>Détails</h1>
            {/* <h1>{this.state.event.number}</h1> */}
        </div>
    )
}
}

export default PopUpDetails
