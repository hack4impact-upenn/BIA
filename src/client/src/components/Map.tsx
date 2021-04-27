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
import { useQuery } from 'react-query';
import axios from 'axios';
import geocoder from '../api/geocoder';
import locator from '../api/geocoder';
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here

const R = 6378137.0; // radius of Earth in meters
const projection = d3.geoAlbersUsa().translate([0, 0]).scale(R);
const projectionMercartor = d3.geoMercator().translate([0, 0]).scale(R);

function convertToAlbers(city) {
  const location = geocoder.getLocation(city.city);
  location.then((resp) => {
    const converted = projectionMercartor.invert(
      projection([resp.lng, resp.lat])
    );
    const newlng = converted[0];
    const newlat = converted[1];
    city.newlng = newlng;
    city.newlat = newlat;
    return city;
  });
}

const CITIES = [
  {
    city: 'New York',
    latitude: 40.7127837,
    longitude: -74.0059413,
  },
  {
    city: 'New York',
    latitude: 40.7127837,
    longitude: -74.0059413,
  },
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

CITIES.map(convertToAlbers);

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

  const { isLoading, error, data } = useQuery('users', () =>
    axios.get('/api/org/').then((res) => {
      return res.data;
    })
  );

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
        {!isLoading && <Pins data={CITIES} onClick={print_marker} />}

        <NavigationControl style={navStyle} />
      </MapGL>
    </>
  );
}

export default Map;
