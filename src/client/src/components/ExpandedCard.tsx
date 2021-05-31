import React from 'react';
import styled from 'styled-components';
import SocialsList from './SocialsList.tsx';
import colors from '../common/Colors';
import Tags from './Tags.tsx';
import { FaArrowLeft } from 'react-icons/fa';

const Container = styled.div`
  border-radius: 0px 0px 10px 10px;
  height: 56vh;
  max-height: 56vh;
  overflow-y: auto;
  width: 28vw;
  position: relative;
  padding: 10px;
  background-color: ${colors.PURPLE};
  justify-content: center;
  margin: auto;
  align-items: center;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
`;

const SocialWrapping = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
`;

const Titlebar = styled.div`
  padding: 0px;
  positon: relative;
`;

const TopBar = styled.div`
  padding-top: 15px;
  padding-left: 20px;
  background: ${colors.YELLOW};
  width: 28vw;
  height: 6vh;
  margin: auto;
  border-radius: 10px 10px 0px 0px;
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
  width: 100px;
  height: 100px;
  margin-bottom: 0.2vw;
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
  pointer: cursor;
`;

const OrgTitle = styled.span`
  display: inline;
  margin-left: 35px;
  position: relative;
  margin-top: 20px;
  font-size: 25px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 500;
  color: ${colors.WHITE};
`;

const OrgName = styled.span`
  display: block;
  font-size: 1.6em;
  font-weight: 600;
  color: ${colors.YELLOW};
`;

const OrgCity = styled.span`
  display: block;
  font-size: 1.1em;
  font-weight: 400;
  color: white;
`;

const OrgYear = styled.span`
  display: block;
  font-size: 1.1em;
  font-weight: 400;
  color: white;
`;

const OrgWebsite = styled.span`
  display: block;
  font-size: 1.1em;
  font-weight: 400;
  color: white;
`;

const OrgDescription = styled.p`
  text-align: start;
  color: white;
  font-size: 1.05em;
  font-weight: 300;
  margin-bottom: 6px;
`;
const TagBar = styled.div`
  padding-left: 15px;
  height: 50px;
  margin-top: 10px;
  positon: absolute;
  overflow-wrap: break-word;
`;

const ExpandedCard = (props) => {
  return (
    <div>
      <TopBar>
        <FaArrowLeft
          size={20}
          style={{ cursor: 'pointer' }}
          onClick={props.switchToList()}
        />
        <OrgTitle>{props.org.organizationName}</OrgTitle>
      </TopBar>
      <Container>
        <Titlebar>
          <Avatar
            src={
              'https://' +
                //process.env.AWS_BUCKET_NAME +
                'bia-h4i' +
                '.s3.amazonaws.com/' +
                props.org.logoURL || process.env.PUBLIC_URL + '/img/BIA.png'
            }
          />
          <InfoDiv>
            <OrgName>{props.org.organizationName}</OrgName>
            <OrgYear>Established: {props.org.yearFounded}</OrgYear>
            <OrgCity>{props.org.headquarterCity}</OrgCity>
            <OrgWebsite>
              {' '}
              Website: <a href={props.org.website}> {props.org.website} </a>
            </OrgWebsite>
            <OrgWebsite> Contact: {props.org.contactEmail}</OrgWebsite>
          </InfoDiv>
        </Titlebar>
        <DescriptionDiv>
          <OrgDescription>{props.org.longDescription}</OrgDescription>
        </DescriptionDiv>
        <TagBar>
          {props.org.programTypes && (
            <Tags tags={props.org.programTypes}></Tags>
          )}
        </TagBar>
        <SocialWrapping>
          <SocialsList org={props.org} />
        </SocialWrapping>
      </Container>
    </div>
  );
};

export default ExpandedCard;
