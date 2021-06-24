import React from 'react';
import styled from 'styled-components';
import SocialsList from './SocialsList.tsx';
import colors from '../common/Colors';
import Tags from './Tags.tsx';
import { FaArrowLeft } from 'react-icons/fa';

const screenWidth = window.screen.width;
var displayWidth = screenWidth < 1280 ? '80vw' : '28vw';
displayWidth = screenWidth > 1680 ? '24vw' : displayWidth;
var displayHeight = screenWidth < 1280 ? '68vh' : '56vh';

const Container = styled.div`
  border-radius: 0px 0px 10px 10px;
  height: ${displayHeight};
  max-height: ${displayHeight};
  overflow-y: auto;
  width: ${displayWidth};
  position: relative;
  padding: 10px;
  background-color: ${colors.PURPLE};
  justify-content: center;
  margin: auto;
  align-items: center;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    max-width: 90vw;
    padding: 10px 0px;
    width: auto;
    margin: 0px;
    margin-left: 5px;
    margin-right: 15px;
    overflow-x: hidden;
  }
`;

const SocialWrapping = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
`;

const Titlebar = styled.div`
  padding: 0px;
  positon: relative;
  display: flex;
  align-items: flex-start;
`;

const TopBar = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  background: ${colors.YELLOW};
  width: ${displayWidth};
  height: 6vh;
  margin: auto;
  border-radius: 10px 10px 0px 0px;

  @media screen and (min-width: 1460px) {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  @media screen and (max-width: 768px) {
    max-width: 90vw;
    width: auto;
    margin: 0px;
    margin-left: 5px;
    margin-right: 15px;
    overflow-x: hidden;
  }
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
  margin-bottom: 0px;
`;

const Avatar = styled.img`
  display: inline;
  width: 80px;
  height: 80px;
  margin-bottom: 0.2vw;
  margin-left: 10px;
  background: black;
  border-radius: 50%;
  border: 2px solid white;

  @media screen and (min-width: 1460px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
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
  word-wrap: break-word;
  font-size: 25px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 500;
  color: ${colors.WHITE};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const OrgName = styled.span`
  display: block;
  font-weight: 600;
  color: ${colors.YELLOW};
  font-size: 20px;
  @media screen and (min-width: 1460px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const OrgCity = styled.span`
  display: block;
  font-weight: 400;
  color: white;
  font-size: 18px;
  @media screen and (min-width: 1460px) {
    font-size: 22px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
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
  font-weight: 300;
  margin-bottom: 0px;

  font-size: 14px;
  @media screen and (min-width: 1460px) {
    font-size: 17px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const TagBar = styled.div`
  padding-left: 15px;
  height: 50px;
  margin-top: 10px;
  positon: absolute;
  overflow-wrap: break-word;
`;

const ExpandedCard = (props) => {
  var tagsArray = props.org.programTypes
    ? props.org.programTypes.map((normal) => {
        return { type: 'normal', text: normal };
      })
    : [];
  if (props.org.focusArea && props.org.innovatorSupport) {
    tagsArray.push(
      { type: 'inovatorSupport', text: props.org.innovatorSupport },
      { type: 'growthStage', text: props.org.focusArea }
    );
  }
  tagsArray.sort((a, b) => {
    if (a.type === 'growthStage') return -1;
    else return 0;
  });
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
          <div className="flex-item">
            <Avatar
              src={
                props.org.logoURL
                  ? 'https://' +
                    //process.env.AWS_BUCKET_NAME +
                    'bia-h4i' +
                    '.s3.amazonaws.com/' +
                    props.org.logoURL
                  : `${process.env.PUBLIC_URL}/img/BIA2.jpeg`
              }
            />
          </div>
          <div className="flex-item">
            <InfoDiv>
              <OrgName>{props.org.organizationName}</OrgName>
              <OrgCity>{props.org.headquarterCity}</OrgCity>
            </InfoDiv>
          </div>
        </Titlebar>
        <DescriptionDiv>
          <OrgDescription>{props.org.longDescription}</OrgDescription>
        </DescriptionDiv>
        <TagBar>{tagsArray && <Tags tags={tagsArray}></Tags>}</TagBar>
        <SocialWrapping>
          <SocialsList org={props.org} />
        </SocialWrapping>
      </Container>
    </div>
  );
};

export default ExpandedCard;
