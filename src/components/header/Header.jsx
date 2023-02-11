import React from 'react';
import styled from 'styled-components';

// components
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <HeaderWrapper>
      <div className='header-content'>
        <div className='header-actions'>
          <h1>Housing24</h1>
          <div className='toggle-btn'>
            <p>x</p>
          </div>
        </div>
        <NavLinks />
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  height: 5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  .header-content {
    width: 90vw;
    max-width: 1440px;
    margin: 0 auto;
  }
  .header-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 670px) {
    .toggle-btn {
      display: none;
    }
    .header-content {
      display: grid;
      grid-template-columns: 200px 1fr;
    }
  }
`;
