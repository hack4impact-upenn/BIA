import React from 'react';
import styled from 'styled-components';
import SocialsList from './SocialsList.tsx';
import colors from '../common/Colors';
import Tags from './Tags.tsx';
const Container = styled.div`
  border-radius: 10px;
  height: 580px;
  overflow-y: auto;
  width: 400px;
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
  padding: 0px;
  positon: relative;
`;
const TopBar = styled.div`
  padding: 10px;
  background: ${colors.YELLOW};
  width: 100%
  positon: relative;
  margin-bottom: 15px;
`;
const InfoDiv = styled.div`
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 8px;
`;
const DescriptionDiv = styled.div`
  display: inline-block;
  height: 300px
  padding: 10px;
  margin-left: 20px;
  margin-bottom: 8px;
`;
const Avatar = styled.img`
  display: inline;
  width: 80px;
  height: 80px;
  margin-left: 10px;
  background: ${colors.WHITE};
  border-radius: 50%;
`;
const Arrow = styled.button`
  display: inline;
  width: 50px;
  height: 30px;
  border-radius: 50%;
  background: ${colors.PURPLE}
  color: black;
`;
const OrgTitle = styled.span`
  display: inline;
  margin-left: 10px;
  font-size: 25px;
  font-weight: 500;
  color: ${colors.PURPLE};
`;
const OrgName = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: ${colors.YELLOW};
`;
const OrgCity = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: white;
`;
const OrgYear = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: white;
`;
const OrgWebsite = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: white;
`;
const OrgDescription = styled.p`
  text-align: start;
  color: white;
  font-size: 10px;
  margin-bottom: 6px;
`;
const TagBar = styled.div`
  padding: 0px;
  height: 50px;
  margin-top: 10px;
  positon: absolute;
`;
const TagBlock = styled.button`
  font-size: 20px;
  font-weight: 500;
  background: white
  color: black;
  border: 2px solid white;
  border-radius: 3px;
`;
const dummyOrg = {
  name: 'Black Innovation Alliance',
  yearFounded: '2000',
  location: 'Philadelphia, PA',
  tags: ['Innovation', 'Entrepreneuership'],
  shortDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  longDisc:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates laudantium minima natus saepe explicabo, sapiente animi, neque, quisquam quaerat similique id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nam molestiae sed fugit ipsum perspiciatis ipsa ipsam voluptates',
  facebook: 'facebok.com',
  website: 'hack4impact.org/',
};
//we will provide an org to this component, but for now we are using the dummy org object to fill these fields
const ExpandedCard = (props) => {
  return (
    <div
      className="is-pulled-left"
      style={{ marginTop: '100px', marginLeft: '50px' }}
    >
      <Container>
        <TopBar>
          <Arrow onClick={props.handleClick()} />
          <OrgTitle>{dummyOrg.name}</OrgTitle>
        </TopBar>
        <Titlebar>
          <Avatar src={process.env.PUBLIC_URL + '/img/BIA.jpeg'} />
          <InfoDiv>
            <OrgName>{dummyOrg.name}</OrgName>
            <OrgYear>Established: {dummyOrg.yearFounded}</OrgYear>
            <OrgCity>{dummyOrg.location}</OrgCity>
            <OrgWebsite> Website: {dummyOrg.website}</OrgWebsite>
          </InfoDiv>
        </Titlebar>
        <DescriptionDiv>
          <OrgDescription>{dummyOrg.longDisc}</OrgDescription>
        </DescriptionDiv>
        <TagBar>
          <Tags tags={dummyOrg.tags}></Tags>
        </TagBar>
        <SocialsList org={dummyOrg} />
      </Container>
    </div>
  );
};
export default ExpandedCard;
