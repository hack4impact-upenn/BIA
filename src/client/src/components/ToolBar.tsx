import React, { Component, useState, useEffect, ReactElement } from 'react';
import styled from 'styled-components';
import colors from '../common/Colors';
import Select from 'react-select';

const styles = {
  control: ({ background, ...base }) => {
    return {
      ...base,
      boxShadow: 'none',
      color: colors.PURPLE,
      background: colors.GREY,
      width: `150px`,
    };
  },
  option: ({ background, ...base }, { isFocused, isSelected }) => {
    const isEmphasized = isFocused || isSelected;
    return {
      ...base,
      background: isEmphasized ? colors.GREY : background,
      color: colors.PURPLE,
    };
  },

  singleValue: (base) => {
    return {
      ...base,
      color: colors.PURPLE,
    };
  },
};

const components = {
  IndicatorSeparator: () => null,
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    max-width: 80vw;
  }
`;

const Input = styled.input`
  outline: none;
  color: ${colors.PURPLE};
  width: 100%;
  font-size: 1em;
  display: inline;
  width: 200px;
  padding: 8px 10px;
  background: ${colors.GREY};
  border-radius: 5px;
  &:hover,
  &:active,
  &:focus {
    background: ${colors.GREY};
    border: none;
    border-radius: none;
  }
  @media screen and (max-width: 768px) {
    max-width: 80vw;
    width: 150px;
  }
`;

const sortOptions = [
  { value: 'state', label: 'State' },
  { value: 'alphabetical', label: 'Alphabetical' },
];
const programOptions = [
  { value: 'type 1', label: 'Type 1' },
  { value: 'type 2', label: 'Type 2' },
  //{ value: 'type', label: 'Type' },
  // { value: 'stage', label: 'Stage' },
  //{ value: 'scope', label: 'Scope' },
];

const sortSelect = styled.select`
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: ${colors.PURPLE};
  @media screen and (max-width: 768px) {
    max-width: 80vw;
  }
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
  @media screen and (max-width: 768px) {
    max-width: 80vw;
  }
`;

type ToolbarProps = {
  changeSearch: (state: string) => void;
  changeFilter: (state: string) => void;
};

const ToolBar = ({
  changeSearch,
  changeFilter,
}: ToolbarProps): ReactElement => {
  const [searchQuery, setSearchQuery] = useState('');
  const [programType, setProgramType] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    changeSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    changeFilter(e.map((item) => item.value));
  };

  return (
    <Container>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div className="flex">
          <Input
            className="input"
            value={searchQuery}
            placeholder={`Search by Name or State`}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex" style={{ marginLeft: '50px' }}>
          <Select
            isMulti
            components={components}
            styles={styles}
            onChange={handleFilterChange}
            name="colors"
            options={programOptions}
            placeholder="Search by Program Type"
            className="basic-multi-select"
            classNamePrefix="select"
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                //neutral50: colors.PURPLE,
                //neutral150: colors.PURPLE,
                //primary: colors.PURPLE,
              },
            })}
          />
        </div>
      </div>
    </Container>
  );
};

export default ToolBar;
