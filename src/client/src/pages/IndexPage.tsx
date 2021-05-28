import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import api from '../api';
import Map from '../components/Map.tsx';
import CardWrapper from '../components/CardWrapper.tsx';
import styled from 'styled-components';
import Colors from '../common/Colors';
import ToolBar from '../components/ToolBar.tsx';
import Navbar from '../components/Navbar.tsx';

const Titlebar = styled.div`
  padding: 0px 30px;
  font-size: 28px;
  text-align: start;
  font-family: 'Montserrat Alternates', sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${Colors.PURPLE};
`;

const Discbar = styled.div`
  padding: 0px 30px;
  font-size: 12px;
  text-align: start;
  font-family: 'Montserrat', sans-serif;
  margin-top: 2px;
  margin-bottom: 10px;
  color: ${Colors.SECONDARY_GREY};
`;

const HomeContainer = styled.div`
  padding: 10px;
  position: relative;
  overflow-x: hidden;
  background-color: ${Colors.HOMEPAGE_GREY} 
  max-width: 100vw;
  @media screen and (max-width: 768px) {
    padding: 2px;
  }
`;
const Tbar = styled.div`
  width: 30vw;
  padding: 0px 10px;
`;

function IndexPage() {
  //load data org data fron the API
  const { isLoading, error, data } = useQuery('organizations', () =>
    api.get('/api/org/').then((res) => {
      return res.data.result;
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
    <>
      <Navbar />
      <HomeContainer>
        <Titlebar>The Black Innovation Alliance Map</Titlebar>
        <Discbar>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          numquam natus dolore eum dolor, distinctio quidem molestias sed
          voluptatem nisi ab hic, repellat asperiores non incidunt labore error
          officia inventore!
        </Discbar>
        <hr style={{ border: '1px solid #1d1e68' }} />
        <Tbar>
          <ToolBar
            changeSearch={handleSearchChange}
            changeFilter={handleFilterChange}
          />
        </Tbar>
        <div className="columns" style={{ padding: '10px' }}>
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
    </>
  );
}

export default IndexPage;
