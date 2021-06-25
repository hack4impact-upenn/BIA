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
    const stringLocation = location;
    return axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?types=place&access_token=pk.eyJ1Ijoiams2MDYwNjA2MCIsImEiOiJja2J4Nm4yd3kwampvMnJwZ2l6a2hrY3RjIn0.7WBReAD5vV1__FmyUaPMbA`
      )
      .then((resp) => {
        var rad = 5000;
        if (
          stringLocation.toLowerCase().includes('washington') ||
          stringLocation.toLowerCase().includes('atlanta') ||
          stringLocation.toLowerCase().includes('austin')
        ) {
          rad = 18000;
        }
        if (
          stringLocation.toLowerCase().includes('new york') ||
          stringLocation.toLowerCase().includes('los angeles')
        ) {
          rad = 12000;
        }

        const location = { lat: 0, lng: 0 };
        location.lng = resp.data.features[0].center[0];
        location.lat = resp.data.features[0].center[1];

        return this.generateRandomPoint(location, rad);
      });
  }
}

const locator = new Locator();

export default locator;
