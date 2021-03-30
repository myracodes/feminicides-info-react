import React from 'react';
import DisplayMap from "../components/Map-components/DisplayMap";
import Filters from "../components/Map-components/Filters";
import SearchBar from "../components/Map-components/SearchBar";
import apiHandler from '../api/apiHandler';

class Map extends React.Component {

  state = {
    allInfos:[],
    filteredInfos:null,
  }

  componentDidMount() {
     apiHandler
      .mapAllEvents()
      .then(data => this.setState({ allInfos: data, filteredInfos: data }))
      .catch(error => console.log(error));
      
   }

  searchByName = (inputName) => {
    let filArr = this.state.allInfos.filter((event) => {
      return event.firstName.includes(inputName)
    })

    this.setState({ filteredInfos: filArr})
  }

  searchByAge = (inputAgeMin, inputAgeMax) => {
    console.log(inputAgeMin, inputAgeMax)
    let filArr = this.state.allInfos.filter((event) => {
      return event.age > inputAgeMin && event.age < inputAgeMax
        })

    console.log(this.state.allInfos)
    this.setState({ filteredInfos: filArr})
  }

  searchByRegion = (inputRegion) => {
    console.log(this.state.allInfos)

    let filArr = this.state.allInfos.filter((event) => {
      if(!event.region) return false
      return event.region.name === inputRegion
    })
    console.log(filArr)
    this.setState({ filteredInfos: filArr})
  }

  handleReset = (event) => {

    event.preventDefault()
    this.setState({filteredInfos : this.state.allInfos})

}

  render(){
  if(!this.state.filteredInfos) return <div>Chargement en cours...</div>;
  return (
    
    <div>
      <h1>Carte des Féminicides conjuguaux en France</h1>
      
      <DisplayMap filteredInfos={this.state.filteredInfos}/>
      <SearchBar searchByName={this.searchByName}/>
      <Filters searchByAge={this.searchByAge} searchByRegion={this.searchByRegion}/>
      
      <button onClick={this.handleReset}>Réinitialiser les filtres</button>

    </div>
  )
  }
}

export default Map;
