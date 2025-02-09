// src/MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 37.7749,  // Example: San Francisco latitude
  lng: -122.4194 // Example: San Francisco longitude
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAB1Cujn_IzQirKG5WSIQ-npvbJzPXWA9U">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Additional map features like markers can be added here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MapComponent);
