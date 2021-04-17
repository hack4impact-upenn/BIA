import React from 'react';
import { useQuery } from 'react-query';
import api from '../api';
import Map from '../components/Map.tsx';
import CardWrapper from '../components/CardWrapper.tsx';
import styled from 'styled-components';
import Colors from '../common/Colors';

const Titlebar = styled.div`
  font-size: 48px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 15px;
  color: ${Colors.PURPLE};
`;

const HomeContainer = styled.div`
  padding: 10px;
  position: relative;
  overflow-x: hidden;
  max-width: 100vw;
  @media screen and (max-width: 768px) {
    padding: 2px;
  }
`;

function IndexPage() {
  const { isLoading, error, data } = useQuery('users', () =>
    api.get('/api/users').then((res) => {
      return res.data;
    })
  );

  return (
    <HomeContainer>
      <Titlebar>Partner Map</Titlebar>

      <div className="columns">
        <div className="column is-one-third">
          <CardWrapper />
        </div>
        <div className="column">
          <Map />
        </div>
      </div>
    </HomeContainer>
  );
}

export default IndexPage;
