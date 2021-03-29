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
            <p>A-t-il été condamné ? ${event.condemned}</p>
            <p>Autres victimes ? ${event.nbOtherVictims}</p>
            <p>Description : ${event.description}</p>
            <a href="${event.pressArticles[0]}">Dans la presse</a>
            <a href="${event.commemoration[0]}">Commémoration (lien)</a><hr>
            <p>Nombre de plaintes déposées avant les faits : ${event.complaint}</p>
            <p>Décision(s) de justice : ${event.courtDecision}</p>
            <hr>
            <h2> (remettre le dollar quand ça marchera, je l'enlève pour que ça compile :D){event.region.name} & les VSS</h2>
          
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
