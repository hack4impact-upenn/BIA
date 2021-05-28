import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Colors';

const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: black;
  color: white;
  text-align: start;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  z-index: 99;
`;

const AppContainer = ({ children }) => {
  return (
    <div>
      {children}
      <FooterContainer>
        <h1> © Black Innovation Alliance</h1>
      </FooterContainer>
    </div>
  );
};

export default AppContainer;
