import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line
import 'mapbox-gl/dist/mapbox-gl.css';
import '../map.css';
import projections from 'dirty-reprojectors';

const options = {
  forward: 'albersUsa',
  reverse: 'mercator',
  projections: { alberUsa: 'alberUsa', mercator: 'mercator' },
};
console.log(projections(options, [35, -77]));

//mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

mapboxgl.accessToken =
  'pk.eyJ1Ijoiams2MDYwNjA2MCIsImEiOiJja2J4Nm4yd3kwampvMnJwZ2l6a2hrY3RjIn0.7WBReAD5vV1__FmyUaPMbA';

const Map = (props) => {
  const { data } = props;
  const coords = data.map((org) => {
    return { id: org.organizationName, coordinates: [org.lat, org.long] };
  });
  const source = {
    type: 'canvas',
    canvas: 'idOfMyHTMLCanvas',
    animate: true,
    coordinates: coords,
  };

  const mapContainerRef = useRef(null);

  // initialize map
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/jk60606060/cknh2goxk0d6717o5fv913vam',
      center: [0, 0],
      zoom: 4,
    });

    map.on('load', function () {
      // custom marker image
      map.loadImage(process.env.PUBLIC_URL + '/img/marker.png', function (
        error,
        image
      ) {
        if (error) throw error;
        map.addImage(process.env.PUBLIC_URL + '/img/marker.png', image);
        map.addSource('earthquakes', {
          type: 'geojson',
          //random earthquake geojson file with points yay
          data:
            'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
        });

        map.addControl(new mapboxgl.NavigationControl());

        data.forEach((org) => {
          var coordinates = [org.long + 96, org.lat - 35];

          var marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
        });

        // Marker Layer
      });
    });

    map.on('click', 'earthquakes', function (e) {
      alert('you clicked a point. good job');
    });

    // clean up
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;
