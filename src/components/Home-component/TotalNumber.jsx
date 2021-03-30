import React, { PureComponent } from 'react';
import apiHandler from '../../api/apiHandler'

export class TotalNumber extends PureComponent {

    state = {
        numberOfVictims : [],
    }

    componentDidMount() {
        apiHandler
        .allEvents()
        .then((events) => { 
            let victimsNum = events.length;
            this.setState({ numberOfVictims: victimsNum})
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <div>{this.state.numberOfVictims} féminicides depuis le 1er janvier</div>
            </div>
        )
    }
}

export default TotalNumber
