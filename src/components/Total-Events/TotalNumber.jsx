import React, { PureComponent } from 'react';
import apiHandler from '../../api/apiHandler'
import '../../styles/Data.css'

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
                <div className="total-num-text">{this.state.numberOfVictims}</div>
            </div>
        )
    }
}

export default TotalNumber
