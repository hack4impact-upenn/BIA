import React from 'react';
import styled from 'styled-components';
import { Icon } from '../common/Icon.tsx';
import colors from '../common/Colors';

const IconWrapper = styled.span`
  display: inline-block;
  position: relative;
  margin: 5px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border: 2px solid #ddd; /* add border to the buttons */
  box-shadow: 0 3px 3px #999;
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
      <IconWrapper>
        <a href={`http://${link}`} target="blank">
          <Icon name={type} />
        </a>
      </IconWrapper>
    </>
  );
};

export default Social;
