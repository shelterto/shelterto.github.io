import React, { Component, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";


Geocode.setApiKey("AIzaSyCgvjTPE6Hqy9fEVo4332nys7Cpunn06oE");

Geocode.setLanguage("en");

Geocode.setLocationType("ROOFTOP");

Geocode.enableDebug();

const mapStyles = {
    width: "643px",
    height: '500px',
};

export class GoogleMap extends Component { 

  render() {

    const shelterAddress = this.props.shelterAddress
    var address = shelterAddress;
    var latt =43.653530;
    var lngg =-79.383918;

    Geocode.fromAddress(address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          latt=lat;
          lngg=lng;
          console.log(latt, lngg);
        },
      );

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        center={
            {
            lat: latt,
            lng: lngg
            }
        }
      >
          <Marker
            position={{ 
                lat: latt,
                lng: lngg
             }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCgvjTPE6Hqy9fEVo4332nys7Cpunn06oE'
})(GoogleMap);