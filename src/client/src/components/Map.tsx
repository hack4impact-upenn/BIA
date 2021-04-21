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
var d3 = require('d3-geo');
import { getPartners } from '../api/fetch.ts';
import { useQuery } from 'react-query';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here

const CITIES = [
  {
    city: 'New York',
    latitude: 40.7127837,
    longitude: -74.0059413,
  },
  {
    city: 'Chicago',
    latitude: 41.8781136,
    longitude: -87.6297982,
  },
];

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 4.5,
    bearing: 0,
    pitch: 0,
  });

  const navStyle = {
    top: 5,
    left: 0,
    padding: '10px',
  };

  const scaleControlStyle = {
    bottom: 36,
    right: 0,
    padding: '10px',
  };

  const print_marker = (city) => {
    console.log(city);
  };

  const partnerQuery = useQuery(['getPartners'], getPartners, {
    refetchOnWindowFocus: false,
  });
  console.log(partnerQuery.data);
  return (
    <>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/bndemers/ckmxqsh18137317lkh1ukwfxx"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {partnerQuery.data && (
          <Pins data={partnerQuery.data} onClick={print_marker} />
        )}

        <NavigationControl style={navStyle} />
      </MapGL>
    </>
  );
}

export default Map;
