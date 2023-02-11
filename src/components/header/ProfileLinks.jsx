import React from 'react';
import styled from 'styled-components';

// links
import { profileLinks } from '../../utils/constants';

const ProfileLinks = () => {
  return (
    <ProfileLinksWrapper>
      {profileLinks.map((link) => {
        return <li key={link.id}>{link.text}</li>;
      })}
    </ProfileLinksWrapper>
  );
};

export default ProfileLinks;

const ProfileLinksWrapper = styled.ul``;
