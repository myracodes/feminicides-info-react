import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class DisplayMap extends React.Component {


    mapDomRef = React.createRef(null)
    map = React.createRef(null).current
    marker = React.createRef(null).current
    allMarkers = []
   

    componentDidMount(){
            this.initMap(3.4, 47)
            this.initMarkers()    
    }

    initMap = (lng, lat) => {
        // Embed the map where "mapDomRef" is defined in the render
        this.map = new mapboxgl.Map({
          container: this.mapDomRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: 5.3,
        });
    
        // Add zoom control on the top right corner
        //this.map.addControl(new mapboxgl.NavigationControl());
        
    
    }

    initMarkers = () => {
        this.clearAllMarkers()

        this.props.filteredInfos.forEach((event) => {
            if (event.coordinates) {
                let lng = event.coordinates.lng
                let lat = event.coordinates.lat
                if(lng && lat) {
                    this.addMarker(event)
                }
            }
        })
      
    }


    addMarker = (event) => {
        this.marker = new mapboxgl.Marker({ color: 'black' })
            .setLngLat(event.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(`<h1>${event.eventNumber}. ${event.firstName} ${event.lastName}</h1>
            <h2>${event.age} ans</h2>
            <p> Quand ? ${event.date.split('T00:00:00.000Z')}</p>
            <p>Où ? ${event.city}</p>
            <p>Tuée par son ${event.relationship}, ${event.killerAge} ans</p>
            <a href="/carte/details/${event._id}" >Lire plus</a>

            <p>A-t-il été condamné ? ${event.condemned}</p>
            <p>Autres victimes ? ${event.nbOtherVictims}</p>
            <p>Description : ${event.description}</p>
            <a href="${event.pressArticles[0]}"> > Articles de presse (lien)</a>
            <br>
            <a href="${event.commemoration[0]}"> > Commémorations (lien)</a>
            <hr>
            <p>Nombre de plaintes déposées avant les faits : ${event.complaint}</p>
            <p>Décision(s) de justice : ${event.courtDecision}</p>
            <hr>
            <h2>${event.region.name} & les VSS</h2>
            <p>Parti politique majoritaire au Conseil régional : ${event.region.politicalParty}</p>
            <p>Budget 2021 alloué aux VSS : ${event.region.regionVSSBudget} Md €</p>
            <p>Nb de personnel formés à la prise en charge des VSS : ${event.region.trainedStaff}</p>
            <p>Nb de places en hébergement d'urgence pour les femmes victimes de VSS : ${event.region.shelterPlaces}</p>
            <p>Nb de féminicides dans la région : ${event.region.events.length}</p>

          
            `))
            .addTo(this.map)
        
        this.allMarkers.push(this.marker)
    }

   


    clearAllMarkers = () => {
        console.log(this.allMarkers)
        this.allMarkers.forEach((marker) => {
            marker.remove()
        })
        this.allMarkers = []
    }

  



    render(){
        if(this.map) {
            this.initMarkers()
        }

        return(
        <div>
            <div ref={this.mapDomRef} style={{height: 850, width: "100%"}}></div>
        </div>
        )
    }

}

export default DisplayMap
