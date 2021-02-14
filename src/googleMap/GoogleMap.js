import React, { Component, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../googleMap/GoogleMap.css'

const mapStyles = {
    width: "643px",
    height: '500px',
};

export class GoogleMap extends Component { 
    render() {
    const latt = this.props.lat;
    const lngg = this.props.lng;

    const shelterAddress = this.props.shelterAddress
    var address = shelterAddress;

   
    return (
        <div className="mapContainer">
        <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        center={
            {
            lat: latt,
            lng: lngg
            }
        }
        >
          <Marker position={{lat: latt, lng: lngg}} />
      </Map>
        </div>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCgvjTPE6Hqy9fEVo4332nys7Cpunn06oE'
})(GoogleMap);