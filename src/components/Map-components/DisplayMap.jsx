import React from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

// Mapbox token
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class DisplayMap extends React.Component {

    state = {}


    mapDomRef = React.createRef(null)
    map = React.createRef(null).current
    marker = React.createRef(null).current

    initMap = (lng, lat) => {
        // Embed the map where "mapDomRef" is defined in the render
        this.map = new mapboxgl.Map({
          container: this.mapDomRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: 10,
        });
    
        // Add zoom control on the top right corner
        this.map.addControl(new mapboxgl.NavigationControl());
    
        // Create a marker on the map with the coordinates ([lng, lat])
        //  this.marker = new mapboxgl.Marker({ color: 'red' })
        //    .setLngLat([lng, lat])
        //    .addTo(map)
       }

    render(){
        return(
        <div>
            <div ref={this.mapDomRef} style={{height: 400, width: "100%"}}></div>
        </div>
        )
    }

}

export default DisplayMap
