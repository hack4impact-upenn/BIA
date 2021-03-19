import React from 'react';
import styled from 'styled-components';
import SocialsList from './SocialsList.tsx';
import colors from '../common/Colors';

// work here for task 1.2

// const Card = (props) => {
//   return <div>card</div>;
// };s

const Container = styled.div`
  border-radius: 10px;
  height: 250px;
  width: 600px;
  padding: 10px;
  background-color: ${colors.PURPLE};

  justify-content: center;
  margin: auto;
  align-items: center;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
    transition-duration: 0.5s;
  }
`;

const Titlebar = styled.div`
  width: 100%;
  padding: 0px;
`;

const StyledP = styled.p`
  color: white;
  font-size: 18px;
`;

const InfoDiv = styled.div`
  max-width: 280px;
  margin: 0px;
`;

const StyledSpan = styled.span`
  color: white;
  font-size: 12px;
`;

const Avatar = styled.img`
  display: inline;
  width: 60px;
  height: 60px;
  background: black;
  border-radius: 50%;
  margin: 0;
`;

const OrgName = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 500;
  color: ${colors.YELLOW};
`;

const OrgCity = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;
const OrgDescription = styled.p`
  text-align: start;
  color: white;
  font-size: 12px;
`;

const dummyOrg = {
  name: 'Hack for Impact',
  location: 'Philadelphia, PA',
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'hack4impact.org/',
};

const Card = ({ descriptionText, photo, name, cityState }) => (
  <div style={{ marginTop: '100px' }}>
    <Container>
      <Titlebar>
        <Avatar src={photo} />
        <InfoDiv>
          <OrgName>{dummyOrg.name}</OrgName>
          <OrgCity>{dummyOrg.location}</OrgCity>
        </InfoDiv>
      </Titlebar>
      <OrgDescription>{dummyOrg.shortDisc}</OrgDescription>
      <SocialsList org={dummyOrg} />
    </Container>
  </div>
);

export default Card;
