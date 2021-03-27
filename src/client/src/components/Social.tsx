import React from 'react';
import styled from 'styled-components';
import { Icon } from '../common/Icon.tsx';
import colors from '../common/Colors';

const IconWrapper = styled.a`
  display: inline-block;
  position: relative;
  margin-left: 5px;
  padding: 0px;
  cursor: pointer;
  width: 34px;
  height: 34px;
  padding: 0px;
  border: 1px solid #000000;
  text-decoration: none;
  text-align: start;
  color: ${colors.PURPLE};
  background-color: ${colors.YELLOW};
  font-size: 25px;
  font-weight: normal;
  line-height: 2em;
  border-radius: 27px;
`;

const Social = (props) => {
  const { type, link } = props;
  return (
    <>
      <IconWrapper href={`http://${link}`} target="blank">
        <Icon name={type} />
      </IconWrapper>
    </>
  );
};

export default Social;
