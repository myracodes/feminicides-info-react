import React from 'react';
import DisplayMap from "../components/Map-components/DisplayMap";
import Filters from "../components/Map-components/Filters";
import PopUpDetails from "../components/Map-components/PopUpDetails";
import SearchBar from "../components/Map-components/SearchBar";
import apiHandler from '../api/apiHandler';

class Map extends React.Component {

  state = {
    allInfos:[],
    filteredInfos:[]
  }

  componentDidMount() {
     apiHandler
      .mapAllEvents()
      .then(data => {
        console.log(data)
        this.setState({ allInfos: data, filteredInfos: data })
        console.log(this.state)
    })
      .catch(error => console.log(error));
      
   }

  searchByName = (inputName) => {
    let filArr = this.state.allInfos.filter((event) => {
      return event.firstName.includes(inputName)
    })

    this.setState({ filteredInfos: filArr})
  }

  searchByAge = (inputAgeMin, inputAgeMax) => {
    let filArr = this.state.allInfos.filter((event) => {
      return event.age > inputAgeMin && event.age < inputAgeMax
        })

    this.setState({ filteredInfos: filArr})
  }

  searchByRegion = (inputRegion) => {
    let filArr = this.state.allInfos.filter((event) => {
      return event.region === inputRegion
    })

    this.setState({ filteredInfos: filArr})
  }

  render(){
    if(!this.state.filteredInfos) return <div>Chargement en cours...</div>;
  return (
    
    <div>
      <h1>Carte des Féminicides conjuguaux en France</h1>
      
      <DisplayMap filteredInfos= {this.state.filteredInfos}/>
      <SearchBar searchByName={this.searchByName}/>
      <Filters searchByAge={this.searchByAge} searchByRegion={this.searchByRegion}/>
      <PopUpDetails/>

    </div>
  )
  }
}

export default Map;
