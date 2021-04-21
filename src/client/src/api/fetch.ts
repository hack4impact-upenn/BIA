import axios from 'axios';

const getPartners = (key: string, { accessToken }: { accessToken: string }) => {
  return new Promise((resolve, reject) => {
    axios
      .get('/api/orgs')
      .then((res) => {
        resolve(res.data);
      })
      .catch((err: Error) => reject(err));
  });
};

export { getPartners };
