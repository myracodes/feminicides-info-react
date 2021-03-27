import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class DisplayMap extends React.Component {

    state = {}


    mapDomRef = React.createRef(null)
    map = React.createRef(null).current
    marker = React.createRef(null).current

    componentDidMount(){
        this.initMap(3.4, 47)
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
        this.map.addControl(new mapboxgl.NavigationControl());
    
        // Create a marker on the map with the coordinates ([lng, lat])
        //  this.marker = new mapboxgl.Marker({ color: 'red' })
        //    .setLngLat([lng, lat])
        //    .addTo(map)
       }

    render(){
        return(
        <div>
            <div ref={this.mapDomRef} style={{height: 850, width: "100%"}}></div>
        </div>
        )
    }

}

export default DisplayMap
