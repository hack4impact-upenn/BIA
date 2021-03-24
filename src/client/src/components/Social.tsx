import React from 'react';
import styled from 'styled-components';
import { Icon } from '../common/Icon.tsx';
import colors from '../common/Colors';

const IconWrapper = styled.span`
  display: inline-block;
  position: relative;
  margin-left: 5px;
  cursor: pointer;
  width: 45px;
  height: 45px;
  border: 1px solid #000000;
  padding: 0px;
  text-decoration: none;
  text-align: center;
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
      <a href={`http://${link}`} target="blank">
        <IconWrapper>
          <Icon name={type} />
        </IconWrapper>
      </a>
    </>
  );
};

export default Social;
