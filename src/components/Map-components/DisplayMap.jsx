import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import apiHandler from '../../api/apiHandler';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class DisplayMap extends React.Component {

    state = {
        filteredInfos: null
    }


    mapDomRef = React.createRef(null)
    map = React.createRef(null).current
    marker = React.createRef(null).current

    componentDidMount(){

        apiHandler
        .mapAllEvents()
        .then(data => {
            this.setState({filteredInfos: data})
            this.initMap(3.4, 47)
            this.initMarkers()
            console.log(this.state.filteredInfos)
        })
        
        // this.addMarker([2,48])
        // this.setState({filteredInfos: this.props.filteredInfos})
         
        
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
    
    }

    initMarkers = () => {
        let eventsToDisplay = this.state.filteredInfos
        eventsToDisplay.forEach((event) => {
            if (event.coordinates) {
                let lng = event.coordinates.lng
                let lat = event.coordinates.lat
                if(lng && lat) {
                    console.log(event.coordinates)
                    this.addMarker(event.coordinates)
                }
            }
        })
        

    }

    addMarker = (coordinates) => {
        this.marker = new mapboxgl.Marker({ color: 'red' })
            .setLngLat(coordinates)
            .addTo(this.map)
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
