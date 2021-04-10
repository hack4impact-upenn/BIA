import React from 'react';
import styled from 'styled-components';
import SocialsList from './SocialsList.tsx';
import colors from '../common/Colors';

// work here for task 1.2

const Container = styled.div`
  border-radius: 10px;
  height: 200px;
  width: 400px;
  padding: 10px;
  background-color: ${colors.PURPLE};
  justify-content: center;
  margin: auto;
  cursor: pointer;
  align-items: center;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
    transition-duration: 0.5s;
  }
`;

const Titlebar = styled.div`
  padding: 0px;
  positon: relative;
`;

const InfoDiv = styled.div`
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 8px;
`;

const Avatar = styled.img`
  display: inline;
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 50%;
  border: 2px solid white;
`;

const OrgName = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: ${colors.YELLOW};
`;

const OrgCity = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: white;
`;
const OrgDescription = styled.p`
  text-align: start;
  color: white;
  font-size: 10px;
  margin-bottom: 6px;
`;

const dummyOrg = {
  name: 'Black Innovation Alliance',
  location: 'Philadelphia, PA',
  tags: ['Inoovation', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'hack4impact.org/',
};
//we will provide an org to this component, but for now we are using the dummy org object to fill these fields
const Card = (props) => {
  return (
    <div
      className="is-pulled-left"
      style={{ marginBottom: '20px', marginLeft: '10px', marginRight: '10px' }}
    >
      <Container>
        <div onClick={() => props.handleClick()}>
          <Titlebar>
            <Avatar src={process.env.PUBLIC_URL + '/img/BIA.jpeg'} />
            <InfoDiv>
              <OrgName>{props.org.name}</OrgName>
              <OrgCity>{props.org.location}</OrgCity>
            </InfoDiv>
          </Titlebar>
          <OrgDescription>{props.org.shortDisc}</OrgDescription>
        </div>
        <SocialsList org={props.org} />
      </Container>
    </div>
  );
};

export default Card;
