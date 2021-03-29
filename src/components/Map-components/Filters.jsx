import React from 'react'
import apiHandler from '../../api/apiHandler'

class Filters extends React.Component {

    state = {
        regions:[],
        regionName:null,
        ageRange:null
        
    }

 componentDidMount() { 

    apiHandler
     .mapRegions()
     .then(data => {
         let dataName = data.map((region) => {
             return region.name
         })
         .sort()
         this.setState({ regions: dataName })
        })
     .catch(error => console.log(error));
 }

handleChangeAge = (event) => {
    const ageRange = event.target.value;
    this.setState({ ageRange: ageRange })
}

handleSubmitAge = (event) => {

    event.preventDefault()

    let inputAgeMin = 0;
    let inputAgeMax = 0;
    if(this.state.ageRange === "1525"){
        inputAgeMin = 15
        inputAgeMax = 25
    } else if (this.state.ageRange  === "2635"){
        inputAgeMin = 26
        inputAgeMax = 35
    } else if (this.state.ageRange  === "3645"){
        inputAgeMin = 36
        inputAgeMax = 45
    } else if (this.state.ageRange  === "4655"){
        inputAgeMin = 46
        inputAgeMax = 55
    } else if (this.state.ageRange  === "5665"){
        inputAgeMin = 56
        inputAgeMax = 65
    } else if (this.state.ageRange  === "6675"){
        inputAgeMin = 66
        inputAgeMax = 75
    } else if (this.state.ageRange  === "76100"){
        inputAgeMin = 76
        inputAgeMax = 100
    }


    this.props.searchByAge(inputAgeMin, inputAgeMax)
}

handleChangeRegion = (event) => {
    const regionName = event.target.value;
    this.setState({regionName: regionName})
}

handleSubmitRegion = (event) => {

    event.preventDefault()

    this.props.searchByRegion(this.state.regionName)
}

    render(){
    return (
        <div>
            <h2>Filtres de recherche</h2>

        <form onSubmit={this.handleSubmitAge}>
            <label htmlFor="age">Rechercher par tranche d'âges</label>
             <select onChange={this.handleChangeAge} className="age-input">
                <option className="select-option" value="1525">15 - 25 ans</option>
                <option className="select-option" value="2635">26 - 35 ans</option>
                <option className="select-option" value="3645">36 - 45 ans</option>
                <option className="select-option" value="4655">46 - 55 ans</option>
                <option className="select-option" value="5665">56 - 65 ans</option>
                <option className="select-option" value="6675">66 - 75 ans</option>
                <option className="select-option" value="76100">76 ans et plus</option>
            </select>
            <button type="submit">Rechercher</button>
        </form>
            
        <form onSubmit={this.handleSubmitRegion}>
            <label htmlFor="regions">Rechercher par région ou territoire</label>
            <select onChange={this.handleChangeRegion} className="region-input" name="regions">
                {this.state.regions.map((regionName) => {
                    return (<option key={regionName} className="select-option" value={regionName} >{regionName}</option>
                    )
                })}
               
            </select>

            <button type="submit">Rechercher</button>

        </form>     



            
        </div>
    )
    }
}

export default Filters
