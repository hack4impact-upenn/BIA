import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import api from '../api';
import Map from '../components/Map.tsx';
import CardWrapper from '../components/CardWrapper.tsx';
import styled from 'styled-components';
import Colors from '../common/Colors';
import ToolBar from '../components/ToolBar.tsx';
import Navbar from '../components/Navbar.tsx';

const screenWidth = window.screen.width;

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
  font-size: 14px;
  text-align: start;
  font-family: 'Montserrat', sans-serif;
  margin-top: 2px;
  margin-bottom: 20px;
  color: ${Colors.SECONDARY_GREY};
`;

const HomeContainer = styled.div`
  padding: 10px 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  position: relative;
  overflow-x: hidden;
  flex-grow: 1;
  background-color: ${Colors.HOMEPAGE_GREY} @media screen and (max-width: 768px) {
    padding: 2px;
  }
`;
const Tbar = styled.div`
  width: 40vw;
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
  const [targetCard, setTargetCard] = useState<any>(null);

  return (
    <div style={{ display: 'flex', flexFlow: 'column', height: '100%' }}>
      <Navbar />
      <HomeContainer>
        <Titlebar>Black Innovation Alliance Membership</Titlebar>
        <Discbar>
          The{' '}
          <a href="https://blackinnovationalliance.com">
            Black Innovation Alliance
          </a>{' '}
          is a national coalition made up of approximately 50 Innovator Support
          Organizations (ISOs) across 24 cities and nearly as many states. Our
          members are dedicated to the development and advancement of Black
          start-up founders, small business owners and creative technologists
          across the country - all for the purpose of increasing ownership in
          the innovation economy and driving economic independence.
        </Discbar>

        <Tbar>
          <ToolBar
            changeSearch={handleSearchChange}
            changeFilter={handleFilterChange}
          />
        </Tbar>
        <hr
          style={{
            border: '1px solid #1d1e68',
            marginBottom: '20px',
            marginTop: '20px',
            marginLeft: screenWidth > 1280 ? '30px' : '20px',
            marginRight: screenWidth > 1280 ? '10px' : '30px',
          }}
        />

        {screenWidth > 1280 ? (
          <div
            className="columns"
            style={{ padding: '10px', paddingTop: '0px' }}
          >
            <div
              className="column is-one-third is-full-mobile"
              style={{ height: '70vh' }}
            >
              {isLoading ? (
                'Loading'
              ) : (
                <CardWrapper
                  data={data}
                  searchQuery={searchQuery}
                  filter={filter}
                  targetCard={targetCard}
                  changeTargetCard={setTargetCard}
                />
              )}
            </div>
            <div className="column" style={{ height: '70vh' }}>
              {isLoading ? (
                'Loading'
              ) : (
                <Map data={data} changeOrg={setTargetCard} />
              )}
            </div>
          </div>
        ) : (
          <div style={{ padding: '10px', paddingTop: '0px' }}>
            {isLoading ? (
              'Loading'
            ) : (
              <CardWrapper
                data={data}
                searchQuery={searchQuery}
                filter={filter}
                changeTargetCard={setTargetCard}
                targetCard={targetCard}
              />
            )}
          </div>
        )}
      </HomeContainer>
    </div>
  );
}

export default IndexPage;
