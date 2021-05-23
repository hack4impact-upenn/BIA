import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//import SocialsList from './SocialsList.tsx';
import Card from './Card.tsx';

const Container = styled.div`
  border-radius: 10px;
  max-height: 70vh;
  overflow-y: scroll;
  width: 440px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 768px) {
    max-width: 80vw;
    padding: 2px 4px;
    margin: 0px;
    overflow-x: hidden;
  }
`;

const CardsList = (props) => {
  const { data } = props;
  const { searchQuery } = props;
  const { filter } = props;

  const [renderedArray, setArray] = useState(data);

  useEffect(() => {
    const searchedArray = data.filter((item) => {
      if (!searchQuery || searchQuery.length < 3) {
        return true;
      }
      const strings = [
        item.organizationName,
        item.longDisc,
        item.shortDisc,
        item.headquarterCity,
      ];
      return strings.some(
        (string) =>
          string && string.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    });
    const filteredArray = searchedArray.filter((item) => {
      if (!filter || filter.length < 1) {
        return true;
      }

      const string = item.programTypes[0];
      return filter.some((f) => {
        return (
          f &&
          f.length > 2 &&
          string &&
          string.toLowerCase().startsWith(f.toLowerCase())
        );
      });
      //return
    });
    setArray(filteredArray);
  }, [filter, searchQuery]);

  const cardArray = renderedArray.map((curr) => (
    <div key={curr._id}>
      <Card org={curr} handleClick={() => props.switch(curr)} />
    </div>
  ));
  return (
    <div>
      <Container>{cardArray}</Container>
    </div>
  );
};

export default CardsList;
