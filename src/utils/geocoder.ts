import axios from 'axios';

class Locator {
  //from https://gist.github.com/mkhatib/5641004
  generateRandomPoint(center: { lng: number; lat: number }, radius: number) {
    const x0 = center.lng;
    const y0 = center.lat;
    // Convert Radius from meters to degrees.
    const rd = radius / 111300;

    const u = Math.random();
    const v = Math.random();

    const w = rd * Math.sqrt(u);
    const t = 2 * Math.PI * v;
    const x = w * Math.cos(t);
    const y = w * Math.sin(t);

    const xp = x / Math.cos(y0);

    // Resulting point.
    return { lat: y + y0, lng: xp + x0 };
  }

  async getLocation(location: string) {
    return axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?types=place&access_token=${process.env.MAPBOX_TOKEN}`
      )
      .then((resp) => {
        const location = { lat: 0, lng: 0 };
        location.lng = resp.data.features[0].center[0];
        location.lat = resp.data.features[0].center[1];
        const rad = 5000;
        return this.generateRandomPoint(location, rad);
      });
  }
}

const locator = new Locator();

export default locator;
