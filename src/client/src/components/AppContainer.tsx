import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Colors';

const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: ${Colors.PURPLE};
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 99;
`;

const AppContainer = ({ children }) => {
  return (
    <div>
      {children}
      <FooterContainer>
        <h1 style={{ color: Colors.YELLOW }}>Black Innovation Alliance</h1>
      </FooterContainer>
    </div>
  );
};

export default AppContainer;
