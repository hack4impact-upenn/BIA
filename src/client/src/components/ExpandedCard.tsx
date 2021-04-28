import React from 'react';
import styled from 'styled-components';
import SocialsList from './SocialsList.tsx';
import colors from '../common/Colors';
import Tags from './Tags.tsx';
import { FaArrowLeft } from 'react-icons/fa';

const Container = styled.div`
  border-radius: 10px;
  height: 580px;
  overflow-y: auto;
  width: 440px;
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
  @media screen and (max-width: 768px) {
    max-width: 80vw;
    max-height: 120vw;
    padding: 8px;
    overflow-x: none;
  }
`;

const Titlebar = styled.div`
  padding: 0px;
  positon: relative;
  @media screen and (max-width: 768px) {
    max-width: 80vw;
  }
`;

const TopBar = styled.div`
  padding: 10px;

  background: ${colors.YELLOW};
  width: 500px;
  height: 70px;
  margin-left: -10px;
  margin-top: -10px;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    max-width: 100vw;
  }
`;

const InfoDiv = styled.div`
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 8px;
  @media screen and (max-width: 768px) {
    max-width: 80vw;
  }
`;

const DescriptionDiv = styled.div`
  display: inline-block;
  height: 300px
  padding: 10px;
  margin-left: 20px;
  margin-bottom: 8px;
  @media screen and (max-width: 768px) {
    max-width: 80vw;
  }
`;

const Avatar = styled.img`
  display: inline;
  width: 80px;
  height: 80px;
  margin-left: 10px;
  background: black;
  border-radius: 50%;
  border: 2px solid white;
`;

const Arrow = styled.button`
  display: inline;
  width: 50px;
  height: 30px;
  border-radius: 50%;
  background: ${colors.YELLOW}
  color: black;
`;

const OrgTitle = styled.span`
  display: inline;
  margin-left: 35px;
  position: relative;
  margin-top: 20px;
  font-size: 25px;
  font-weight: 500;
  color: ${colors.WHITE};
  @media screen and (max-width: 768px) {
    max-width: 80vw;
    font-size: 22px;
  }
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
  @media screen and (max-width: 768px) {
    max-width: 80vw;
  }
`;
const TagBar = styled.div`
  padding: 0px;
  height: 50px;
  margin-top: 10px;
  positon: absolute;
  @media screen and (max-width: 768px) {
    max-width: 80vw;
  }
`;

const ExpandedCard = (props) => {
  return (
    <div>
      <Container>
        <TopBar>
          <FaArrowLeft size={20} onClick={props.switchToList()} />
          <OrgTitle>{props.org.name}</OrgTitle>
        </TopBar>
        <Titlebar>
          <Avatar src={process.env.PUBLIC_URL + '/img/BIA.jpeg'} />
          <InfoDiv>
            <OrgName>{props.org.name}</OrgName>
            <OrgYear>Established: {props.org.yearFounded}</OrgYear>
            <OrgCity>{props.org.location}</OrgCity>
            <OrgWebsite> Website: {props.org.website}</OrgWebsite>
          </InfoDiv>
        </Titlebar>
        <DescriptionDiv>
          <OrgDescription>{props.org.longDisc}</OrgDescription>
        </DescriptionDiv>
        <TagBar>
          <Tags tags={props.org.tags}></Tags>
        </TagBar>
        <SocialsList org={props.org} />
      </Container>
    </div>
  );
};

export default ExpandedCard;
