import React, { useEffect } from 'react';
import { useState } from 'react';

import styled from 'styled-components';
//import SocialsList from './SocialsList.tsx';
import Card from './Card.tsx';
import ReactPaginate from 'react-paginate';

const Container = styled.div`
  border-radius: 10px;
  max-height: 68vh;
  overflow-y: scroll;
  width: 440px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;

  @media screen and (max-width: 768px) {
    max-width: 80vw;
    margin: auto;
    align-items: center;
    overflow-x: hidden;
  }
`;

const dummyOrg1 = {
  name: 'Black Innovation Alliance',
  yearFounded: '2000',
  programType: 'type 1',
  longDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  location: 'Philadelphia, PA',
  tags: ['Inoovation', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'hack4impact.org/',
  instagram: 'here-to-serve.org/',
  linkedin: 'wooo.com',
};
const dummyOrg2 = {
  name: 'Hack4Impact',
  yearFounded: '2000',
  programType: 'type 2',
  longDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  location: 'Philadelphia, PA',
  tags: ['Social Impact', 'Tech'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'hack4impact.org/',
  twitter: 'here-to-serve.org/',
  linkedin: 'wooo.com',
};
const dummyOrg3 = {
  name: 'Here-to-Serve',
  yearFounded: '2000',
  programType: 'type 1',
  longDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  location: 'Philadelphia, PA',
  tags: ['HealthCare', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'here-to-serve.org/',
  linkedin: 'wooo.com',
};

const dummyOrg4 = {
  name: 'Here-to-Serve',
  yearFounded: '2000',
  programType: 'type 2',
  longDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  location: 'Philadelphia, PA',
  tags: ['HealthCare', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  website: 'here-to-serve.org/',
  instagram: 'here-to-serve.org/',
  linkedin: 'wooo.com',
};

const dummyOrg5 = {
  name: 'Here-to-Serve',
  yearFounded: '2000',
  programType: 'type 2',
  longDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  location: 'Philadelphia, PA',
  tags: ['HealthCare', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  website: 'here-to-serve.org/',
  twitter: 'here-to-serve.org/',
  instagram: 'here-to-serve.org/',
  linkedin: 'wooo.com',
};

const dummyOrg6 = {
  name: 'Here-to-Serve',
  yearFounded: '2000',
  programType: 'type 2',
  longDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  location: 'Philadelphia, PA',
  tags: ['HealthCare', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'here-to-serve.org/',
  twitter: 'here-to-serve.org/',
  instagram: 'here-to-serve.org/',
  linkedin: 'wooo.com',
};

const dummyOrg7 = {
  name: 'Here-to-Serve',
  yearFounded: '2000',
  programType: 'type 1',
  longDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  location: 'Philadelphia, PA',
  tags: ['HealthCare', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'here-to-serve.org/',
};

const dummyOrg8 = {
  name: 'Here-to-Serve',
  yearFounded: '2000',
  programType: 'type 1',
  longDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  location: 'Philadelphia, PA',
  tags: ['HealthCare', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'here-to-serve.org/',
};
const dummyOrgs = [
  dummyOrg1,
  dummyOrg2,
  dummyOrg3,
  dummyOrg4,
  dummyOrg5,
  dummyOrg6,
  dummyOrg7,
  dummyOrg8,
];

const CardsList = (props) => {
  const { searchQuery } = props;
  const { filter } = props;
  const [renderedArray, setArray] = useState(dummyOrgs);
  const [currentPage, setCurrentPage] = useState(0);
  //const [data, setData] = useState([]);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const PER_PAGE = 5;
  const offset = currentPage * PER_PAGE;

  useEffect(() => {
    console.log(filter);
    const searchedArray = dummyOrgs.filter((item) => {
      if (!searchQuery || searchQuery.length < 3) {
        return true;
      }
      const string = item.name;
      return string.toLowerCase().startsWith(searchQuery.toLowerCase());
    });
    const filteredArray = searchedArray.filter((item) => {
      if (!filter || filter.length < 1) {
        return true;
      }
      const string = item.programType;
      return filter.some((f) => {
        console.log(string);
        console.log(f);
        return (
          f && f.length > 2 && string.toLowerCase().startsWith(f.toLowerCase())
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
  const pageCount = Math.ceil(cardArray.length / PER_PAGE);
  const currentPageData = cardArray.slice(offset, offset + PER_PAGE);
  return (
    <div>
      <Container>
        <ReactPaginate
          previousLabel={'← Previous'}
          nextLabel={'Next →'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          previousLinkClassName={'pagination__link'}
          nextLinkClassName={'pagination__link'}
          disabledClassName={'pagination__link--disabled'}
          activeClassName={'pagination__link--active'}
        />
        {currentPageData}
      </Container>
    </div>
  );
};

export default CardsList;
