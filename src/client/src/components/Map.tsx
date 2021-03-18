import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import MapGL, { Marker } from 'react-map-gl';
import Pins from './Pins.tsx';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiYm5kZW1lcnMiLCJhIjoiY2tsenF2NGIzMGRxYTJvcDg2OXJlZmJ2biJ9.u0aRAyvkPsmNcxaF2kdfZQ'; // Set your mapbox token here

const CITIES = [
  {
    city: 'New York',
    population: '8,175,133',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg',
    state: 'New York',
    latitude: 40.6643,
    longitude: -73.9385,
  },
  {
    city: 'Philadelphia',
    population: '1,526,006',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Philly_skyline.jpg/240px-Philly_skyline.jpg',
    state: 'Pennsylvania',
    latitude: 40.0094,
    longitude: -75.1333,
  },
];

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 39.9,
    longitude: -75.16,
    zoom: 5,
    bearing: 0,
    pitch: 0,
  });

  const [popupInfo, setPopupInfo] = useState(null);

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
        <Pins data={CITIES} onClick={setPopupInfo} />
      </MapGL>
    </>
  );
}

export default Map;
