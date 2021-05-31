import React from 'react';
import styled from 'styled-components';
import SocialsList from './SocialsList.tsx';
import colors from '../common/Colors';

const Container = styled.div`
  border-radius: 10px;
  height: auto;
  overflow: hidden;
  width: 28vw;
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

  @media screen and (max-width: 768px) {
    max-width: 75vw;
    padding: 8px;
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
  @media screen and (max-width: 768px) {
    margin-left: 16px;
    margin-bottom: 6px;
  }
`;

const Avatar = styled.img`
  display: inline;
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 50%;
  border: 2px solid white;
  @media screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

const OrgName = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: ${colors.YELLOW};
  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 50;
  }
`;

const OrgCity = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-weight: 40;
  }
`;
const OrgDescription = styled.p`
  text-align: start;
  color: white;
  font-size: 12px;
  margin-bottom: 6px;
  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
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
  //console.log(process.env);
  return (
    <div
      className="is-pulled-left"
      style={{ marginBottom: '20px', marginLeft: '2px', marginRight: '10px' }}
    >
      <Container>
        <div onClick={() => props.handleClick()}>
          <Titlebar>
            <Avatar
              src={
                'https://' +
                  //process.env.AWS_BUCKET_NAME +
                  'bia-h4i' +
                  '.s3.amazonaws.com/' +
                  props.org.logoURL || process.env.PUBLIC_URL + '/img/BIA.jpeg'
              }
            />
            <InfoDiv>
              <OrgName>{props.org.organizationName}</OrgName>
              <OrgCity>{props.org.headquarterCity}</OrgCity>
            </InfoDiv>
          </Titlebar>
          <OrgDescription>{props.org.shortDescription}</OrgDescription>
        </div>
        <SocialsList org={props.org} />
      </Container>
    </div>
  );
};

export default Card;
