import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import '../map.css';
import '../mapbox-gl.css';

mapboxgl.accessToken =
  'pk.eyJ1Ijoiams2MDYwNjA2MCIsImEiOiJja2J4Nm4yd3kwampvMnJwZ2l6a2hrY3RjIn0.7WBReAD5vV1__FmyUaPMbA';

const Map = () => {
  const mapContainerRef = useRef(null);

  // initialize map
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // styles: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/jk60606060/ckmxoum3w11cf17ld76oy7cgb',
      center: [-98.5795, 39.8283],
      zoom: 4.25,
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
          // random earthquake geojson file with points yay
          data:
            'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
        });

        map.addControl(new mapboxgl.NavigationControl());

        // Marker Layer
        map.addLayer({
          id: 'earthquakes',
          type: 'symbol',
          source: 'earthquakes',
          layout: {
            'icon-image': process.env.PUBLIC_URL + '/img/marker.png',
          },
        });
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
