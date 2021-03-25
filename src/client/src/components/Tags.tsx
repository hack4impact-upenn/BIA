import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Colors';

export const Tag = styled.span`
  margin: 5px 4px 4px 5px;
  font-weight: 300;
  background-color: white;
  color: ${Colors.PURPLE};
  border-radius: 10%;
  padding: 5px;
`;

const Tags = ({ tags }) => {
  console.log(tags);
  return (
    <>
      {tags.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
    </>
  );
};

export default Tags;
