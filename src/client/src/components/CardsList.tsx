import React from 'react';
import Card from './Card.tsx';
import styled from 'styled-components';
import colors from '../common/Colors';

// var Dimensions = require('Dimensions');
// var {
//   width,
//   height
// } = Dimensions.get('window');

const Container = styled.div`
  border-radius: 10px;
  height: 795px;
  overflow-y: auto;
  width: 440px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
  margin: auto;
  position: relative;
`;

const dummyOrg1 = {
  name: 'Black Innovation Alliance',
  location: 'Philadelphia, PA',
  tags: ['Inoovation', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'hack4impact.org/',
};
const dummyOrg2 = {
  name: 'Hack4Impact',
  location: 'Philadelphia, PA',
  tags: ['Social Impact', 'Tech'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'hack4impact.org/',
};
const dummyOrg3 = {
  name: 'Here-to-Serve',
  location: 'Philadelphia, PA',
  tags: ['HealthCare', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'here-to-serve.org/',
};

const dummyOrg4 = {
  name: 'Here-to-Serve',
  location: 'Philadelphia, PA',
  tags: ['HealthCare', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'here-to-serve.org/',
};

const dummyOrg5 = {
  name: 'Here-to-Serve',
  location: 'Philadelphia, PA',
  tags: ['HealthCare', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'here-to-serve.org/',
};

const dummyOrg6 = {
  name: 'Here-to-Serve',
  location: 'Philadelphia, PA',
  tags: ['HealthCare', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'here-to-serve.org/',
};

const dummyOrg7 = {
  name: 'Here-to-Serve',
  location: 'Philadelphia, PA',
  tags: ['HealthCare', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'here-to-serve.org/',
};

const dummyOrg8 = {
  name: 'Here-to-Serve',
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
const dummyCards = dummyOrgs.map((org) => Card(org));

const CardsList = ({ orgs }) => {
  const cardArray = dummyOrgs.map((curr) => <Card org={curr} />);
  return (
    <div>
      <Container>{cardArray}</Container>
    </div>
  );
};

export default CardsList;
