import React from 'react';
import styled from 'styled-components';

// links
import { profileLinks } from '../../../utils/constants';

const ProfileLinks = () => {
  return (
    <ProfileLinksWrapper>
      {profileLinks.map((link) => {
        return (
          <li key={link.id}>
            {link.icon} {link.text}
          </li>
        );
      })}
    </ProfileLinksWrapper>
  );
};

export default ProfileLinks;

const ProfileLinksWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.5rem;
  li {
    display: flex;
    align-items: center;
    border: 1px solid var(--primary-500);
    border-radius: var(--borderRadius);
    background-color: var(--primary-500);
    color: var(--white);
    padding: 5px 15px;
    font-size: 1.15rem;
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    svg {
      margin-right: 5px;
    }
  }
  li:hover {
    background-color: var(--white);
    color: var(--primary-500);
    transition: var(--transition);
  }
`;
