import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import "../../styles/Map.css";
import "../../styles/global.css";

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
            .setPopup(new mapboxgl.Popup()
                .setHTML(`<div class="popup-container">
            <h1 class="title-1">${event.eventNumber}. ${event.firstName} ${event.lastName}</h1>
        
            <p>Le <b>${event.date.split('T00:00:00.000Z')}</b> ${event.firstName} ${event.lastName} a été tuée par son ${event.relationship} (${event.killerAge} ans) à <b>${event.city}.</b><br>Elle avait <b>${event.age} ans.</b></p>
            <a class="btn-3" href="${process.env.NODE_ENV === "production" ? process.env.REACT_APP_BACKEND_URL : ""}/carte/detail/${event._id}" >Lire plus</a>            </div>
            `)
            .setMaxWidth("300px"))

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
        <div className="mapbox">
            <div ref={this.mapDomRef} style={{height: 850, width: "100%"}}></div>
        </div>
        )
    }

}

export default DisplayMap
