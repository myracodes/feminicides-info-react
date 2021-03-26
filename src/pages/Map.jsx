import React from 'react';
import axios from 'axios';
import DisplayMap from "../components/Map-components/DisplayMap";
import Filters from "../components/Map-components/Filters";
import PopUpDetails from "../components/Map-components/PopUpDetails";
import SearchBar from "../components/Map-components/SearchBar";

class Map extends React.Component {

  state = {
    filteredInfos = []
  }

  componentDidMount()

  searchByName = (inputName) => {
    let filArr = this.props.events.filter((event) => {
      return event.firstName.includes(inputText)
    })

    this.setState({ filteredInfos = filArr})
  }

  searchByAge = (inputAgeMin, inputAgeMax) => {
    let filArr = this.props.events.filter((event) => {
      return event.age > inputAgeMin && event.age < inputAgeMax
        })

    this.setState({ filteredInfos = filArr})
  }

  searchByRegion = (inputRegion) => {
    let filArr = this.props.events.filter((event) => {
      return event.region === inputRegion
    })

    this.setState({ filteredInfos = filArr})
  }

  render(){
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
