import React from 'react';
import { useQuery } from 'react-query';
import api from '../api';
import Map from '../components/Map.tsx';
import CardWrapper from '../components/CardWrapper.tsx';

function IndexPage() {
  const { isLoading, error, data } = useQuery('users', () =>
    api.get('/api/users').then((res) => {
      return res.data;
    })
  );

  return (
    <div
      className="container center"
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      <div>
        <CardWrapper />
      </div>
      <div style={{ width: '70%' }}>
        <Map />
      </div>
    </div>
  );
}

export default IndexPage;
