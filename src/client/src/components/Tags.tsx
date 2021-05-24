import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Colors';

export const Tag = styled.span`
  margin: 0 6px 10px 0;
  font-weight: 300;

  padding: 10px;

  &.tag {
    border-radius: 10px;
    background-color: ${Colors.GREY};
    color: ${Colors.PURPLE};
    white-space: normal;
    display: inline-block;
    height: auto;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
  }
`;

const Tags = ({ tags }) => {
  console.log(tags);
  return (
    <>
      {tags.map((tag, index) => (
        <span>
          <Tag className="tag is-medium" key={index}>
            {tag}
          </Tag>
        </span>
      ))}
    </>
  );
};

export default Tags;
