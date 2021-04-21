import React, { Component, useState, useEffect, ReactElement } from 'react';
import styled from 'styled-components';
import colors from '../common/Colors';
import Select from 'react-select';
import Icon from '../common/Icon';

const styles = {
  control: ({ background, ...base }) => {
    return {
      ...base,
      boxShadow: 'none',
      color: colors.PURPLE,
      background: colors.GREY,
      width: `250px`,
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
  margin: auto;
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
`;

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
];

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
        <div className="flex-item">
          <Input
            className="input"
            value={searchQuery}
            placeholder={`Search by state entries`}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex-item">
          <Select
            defaultValue={programOptions[0]}
            isMulti
            components={components}
            styles={styles}
            name="colors"
            options={programOptions}
            placeholder="program"
            className="basic-multi-select"
            classNamePrefix="select"
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                neutral50: colors.PURPLE,
                neutral150: colors.PURPLE,
                primary: colors.PURPLE,
              },
            })}
          />
        </div>
      </div>
    </Container>
  );
};

export default ToolBar;
