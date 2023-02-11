import React from 'react';
import styled from 'styled-components';

// components
import PageLinks from './PageLinks';
import ProfileLinks from './ProfileLinks';

const NavLinks = () => {
  return (
    <NavWrapper>
      <PageLinks />
      <ProfileLinks />
    </NavWrapper>
  );
};

export default NavLinks;

const NavWrapper = styled.nav`
  display: none;

  @media screen and (min-width: 670px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }
`;
