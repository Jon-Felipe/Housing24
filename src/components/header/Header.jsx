import React from 'react';

// components
import NavLinks from './NavLinks';
import ProfileLinks from './ProfileLinks';

const Header = () => {
  return (
    <nav>
      <NavLinks />
      <ProfileLinks />
    </nav>
  );
};

export default Header;
