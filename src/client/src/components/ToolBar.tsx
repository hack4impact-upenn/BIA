import React, { Component,  useState, useEffect }from 'react';
import styled from 'styled-components';
import Select from "react-dropdown-select";
import SearchBar from './SearchBar.tsx';
import colors from '../common/Colors';
import DropDown from './DropDown.tsx';
import SmallButton from './SmallButtons.tsx';
import { FaGripHorizontal, FaGripLines, FaMapMarkerAlt, FaSearch  } from 'react-icons/fa';
import form from 'react-form'

const Container = styled.div`
  border-radius: 10px;
  height: 70px;
  overflow-y: auto;
  background-color: ${colors.GREY};
  color: ${colors.PURPLE};
  width: 340px;
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

//const[sortOption, setSortOption] = useState('')
//const[programOption, setProgramOptions] = useState('')
//const [values, setValues] = useState({
 //   sortOption: '', programOption: '',
     
 // });

const sortOptions = [
    { value: 'state', label: 'State' },
    { value: 'alphabetical', label: 'Alphabetical' },
    
  ];
  const programOptions = [
    { value: 'size', label: 'Size' },
    { value: 'focus', label: 'Focus' },
    { value: 'type', label: 'Type' },
    { value: 'stage', label: 'Stage' },
    { value: 'scope', label: 'Scope' },
    
  ]

  
  const sortSelect = styled.select`
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: ${colors.PURPLE};
`;

const ButtonContainer = styled.button`
  border-radius: 10px;
  height: 70;
  width: 10;
  padding: 10px;
  background-color: ${colors.GREY};
  position: relative;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
    transition-duration: 0.5s;
  }
`;

  const ToolBar = () => {
    return (
    <div>
        
        <DropDown down = {sortOptions} placeHolder = "Sort By"/>
        
        <DropDown down = {programOptions} placeHolder = "Program"/>  
        <div 
        className="is-pulled-left"
        style={{ marginTop: '100px', marginLeft: '10px', marginRight: '10px' }}>
          <Container>
          <div className="input-container">
        <FaSearch size={20} style = {{marginRight: '5px', marginTop: '10px' }}/>
        <input  type="text" placeholder="ZipCode" name="zipcode"/>
          </div>
        </Container>
        </div>

        
          
        
        <div className="is-pulled-right"
        style={{ marginTop: '100px', marginLeft: '10px', marginRight: '10px' }} >
        <ButtonContainer>
        <FaMapMarkerAlt size={20}  />
          </ButtonContainer> 

          <ButtonContainer>
        <FaGripHorizontal size={20}  />
          </ButtonContainer> 

          <ButtonContainer>
        <FaGripLines size={20}  />
          </ButtonContainer> 
        </div>
        
    </div>
    
    );
   
  }

  export default ToolBar
  

