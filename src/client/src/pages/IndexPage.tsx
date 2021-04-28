import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import api from '../api';
import Map from '../components/Map.tsx';
import CardWrapper from '../components/CardWrapper.tsx';
import styled from 'styled-components';
import Colors from '../common/Colors';
import ToolBar from '../components/ToolBar.tsx';

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
const Tbar = styled.div`
  width: 550px;
`;

function IndexPage() {
  //load data org data fron the API
  const { isLoading, error, data } = useQuery('organizations', () =>
    api.get('/api/org/').then((res) => {
      return res.data;
    })
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearchChange = (searchQuery) => {
    setSearchQuery(searchQuery);
  };
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  console.log(searchQuery);

  return (
    <HomeContainer>
      <Titlebar>Partner Map</Titlebar>
      <Tbar>
        <ToolBar
          changeSearch={handleSearchChange}
          changeFilter={handleFilterChange}
        />
      </Tbar>
      <div className="columns">
        <div className="column is-one-third" style={{ height: '70vh' }}>
          {isLoading ? (
            'Loading'
          ) : (
            <CardWrapper
              data={data}
              searchQuery={searchQuery}
              filter={filter}
            />
          )}
        </div>
        <div className="column" style={{ height: '70vh' }}>
          {isLoading ? 'Loading' : <Map data={data} />}
        </div>
      </div>
    </HomeContainer>
  );
}

export default IndexPage;
