import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Colors';

export const Tag = styled.span`
  margin: 0 6px 8px 0;
  font-weight: 300;
  font-size: 12px;
  padding: 10px;

  &.tag {
    background: ${(props) =>
      props.type === 'normal'
        ? Colors.ORANGE
        : props.type === 'inovatorSupport'
        ? Colors.YELLOW
        : Colors.blue};
    color: ${Colors.white};
    white-space: normal;
    display: inline-block;
    height: auto;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    border-radius: 10px;
  }
`;

const Tags = ({ tags }) => {
  console.log(tags);
  return (
    <>
      {tags.map((tag, index) => (
        <span>
          <Tag className="tag is-medium" type={tag.type} key={index}>
            {tag.text}
          </Tag>
        </span>
      ))}
    </>
  );
};

export default Tags;
