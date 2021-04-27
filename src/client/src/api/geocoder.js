import axios from 'axios';

class Locator {
  //from https://gist.github.com/mkhatib/5641004
  generateRandomPoint(center, radius) {
    var x0 = center.lng;
    var y0 = center.lat;
    // Convert Radius from meters to degrees.
    var rd = radius / 111300;

    var u = Math.random();
    var v = Math.random();

    var w = rd * Math.sqrt(u);
    var t = 2 * Math.PI * v;
    var x = w * Math.cos(t);
    var y = w * Math.sin(t);

    var xp = x / Math.cos(y0);

    // Resulting point.
    return { lat: y + y0, lng: xp + x0 };
  }

  async getLocation(location) {
    return axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?types=place&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
      )
      .then((resp) => {
        const location = {};
        location.lng = resp.data.features[0].center[0];
        location.lat = resp.data.features[0].center[1];
        const rad = 5000;
        return this.generateRandomPoint(location, rad);
      });
  }
}

const locator = new Locator();

export default locator;
