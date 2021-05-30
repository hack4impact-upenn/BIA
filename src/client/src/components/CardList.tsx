import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//import SocialsList from './SocialsList.tsx';
import Card from './Card.tsx';

const Container = styled.div`
  border-radius: 10px;
  max-height: 63vh;
  overflow-y: scroll;
  width: 30vw;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-left: 20px;
  position: absolute;

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

      const strings = item.programTypes;
      if (strings) {
        return filter.every((f) => {
          var valid = false;

          strings.forEach((s) => {
            if (
              f &&
              f.length > 2 &&
              s &&
              s.length > 2 &&
              s.toLowerCase().startsWith(f.toLowerCase())
            ) {
              valid = true;
            }
          });
          return valid;
        });
      } else {
        return true;
      }
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
