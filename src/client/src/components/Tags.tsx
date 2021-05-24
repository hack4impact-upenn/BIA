import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Colors';

export const Tag = styled.span`
  margin: 5px 4px 4px 5px;
  font-weight: 200;
  font-size: 10px;
  max-width: 20px;
  background-color: ${Colors.GREY};
  color: ${Colors.PURPLE};
  padding: 10px;
  border-radius: 40px;
`;

const Tags = ({ tags }) => {
  //console.log(tags);
  return (
    <>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </>
  );
};

export default Tags;
