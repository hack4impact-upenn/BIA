import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from 'react-map-gl';
import Pins from './Pins.tsx';

console.log(process.env);

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiYm5kZW1lcnMiLCJhIjoiY2tsenF2NGIzMGRxYTJvcDg2OXJlZmJ2biJ9.u0aRAyvkPsmNcxaF2kdfZQ'; // Set your mapbox token here

const CITIES = [
  {
    city: 'New York',
    latitude: 40.6643,
    longitude: -73.9385,
  },
  {
    city: 'Philadelphia',
    latitude: 40.0094,
    longitude: -75.1333,
  },
];

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 39.9,
    longitude: -75.16,
    zoom: 5,
    bearing: 0,
    pitch: 0,
  });

  const geolocateStyle = {
    top: 0,
    left: 0,
    padding: '10px',
  };

  const fullscreenControlStyle = {
    top: 36,
    left: 0,
    padding: '10px',
  };

  const navStyle = {
    top: 72,
    left: 0,
    padding: '10px',
  };

  const scaleControlStyle = {
    bottom: 36,
    left: 0,
    padding: '10px',
  };

  const print_marker = (city) => {
    console.log(city);
  };

  return (
    <>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Pins data={CITIES} onClick={print_marker} />
        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </MapGL>
    </>
  );
}

export default Map;
