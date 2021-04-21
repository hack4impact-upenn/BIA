import React, { Component,  useState, useEffect }from 'react';
import styled from 'styled-components';
import Select from "react-dropdown-select";
import colors from '../common/Colors';

const Container = styled.div`
  border-radius: 10px;
  height: 70px;
  overflow-y: auto;
  background-color: ${colors.GREY};
  color: ${colors.PURPLE};
  width: 140px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
    transition-duration: 0.5s;
  }
  
`;


const DropDown = (opts) => {
    return (
        <div className="is-pulled-left"
        style={{ marginTop: '100px', marginLeft: '10px', marginRight: '10px' }}>
            <Container>
            <Select options = {opts.down} values={[]} 
            placeholder = {opts.placeHolder}
            onChange={(value) => console.log(value)}/>
            </Container>
        </div>
    );

    
}

export default DropDown