import React from 'react'
//import apiHandler from '../../api/apiHandler'

class Filters extends React.Component {

    state = {
        regions:[]
        
    }

// componentDidMount() { /*pour avoir toutes les régions*/

//     apiHandler
//     .get()
//     .then()
//     .catch()
// }

handleSubmitAge = (event) => {

    let inputAgeMin = 0;
    let inputAgeMax = 100;
    if(event.target.value === "15-25"){
        inputAgeMin = 15
        inputAgeMax = 25
    } else if (event.target.value === "25-35"){
        inputAgeMin = 25
        inputAgeMax = 35
    } else if (event.target.value === "35-45"){
        inputAgeMin = 35
        inputAgeMax = 45
    } else if (event.target.value === "45-55"){
        inputAgeMin = 45
        inputAgeMax = 55
    } else if (event.target.value === "55-65"){
        inputAgeMin = 55
        inputAgeMax = 65
    } else if (event.target.value === "65-75"){
        inputAgeMin = 65
        inputAgeMax = 75
    } else if (event.target.value === "75-100"){
        inputAgeMin = 75
        inputAgeMax = 100
    }


    this.props.searchByAge(inputAgeMin, inputAgeMax)
}

handleSubmitRegion = (event) => {
    let inputRegion = event.target.value;
    this.props.searchByRegion(inputRegion)

}

    render(){
    return (
        <div>

        <form>
            <label htmlFor="age">Rechercher par tranche d'âges</label>
             <select className="age-input">
                <option className="select-option" value="15-25">15 - 25 ans</option>
                <option className="select-option" value="25-35">25 - 35 ans</option>
                <option className="select-option" value="35-45">35 - 45 ans</option>
                <option className="select-option" value="45-55">45 - 55 ans</option>
                <option className="select-option" value="55-65">55 - 65 ans</option>
                <option className="select-option" value="65-75">65 - 75 ans</option>
                <option className="select-option" value="75-100">75 ans et plus</option>
            </select>
            <button onSubmit={this.handleSubmitAge}>Rechercher</button>
        </form>
            
        <form>
            <label htmlFor="regions">Rechercher par région</label>
            <select className="region-input">
                {this.state.regions.map((region) => {
                    return (<option key={region.name} className="select-option" value={region.name}>{region.name}</option>
                    )
                })}
               
            </select>

            <button onSubmit={this.handleSubmitRegion}>Rechercher</button>

        </form>     



            
        </div>
    )
    }
}

export default Filters
