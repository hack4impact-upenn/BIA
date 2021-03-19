import React from 'react';
import styled from 'styled-components';
import Social from './Social.tsx';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;

const SocialsList = ({ org }) => {
  return (
    <div className="is-pulled-right">
      <Wrapper>
        {org.website && <Social type="link" link={org.website} />}
        {org.linkedin && <Social type="linkedin" link={org.linkedin} />}
        {org.facebook && <Social type="facebook" link={org.facebook} />}
        {org.twitter && <Social type="twitter" link={org.twitter} />}
        {org.instagram && <Social type="instagram" link={org.instagram} />}
      </Wrapper>
    </div>
  );
};

export default SocialsList;
