import React from 'react';
import styled from 'styled-components';

// components
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <HeaderWrapper>
      <div className='header-content'>
        <div className='header-action'>
          <h2>
            housing<span>24</span>
          </h2>
          <div className='toggle-btn'>
            <button>x</button>
          </div>
        </div>
        <NavLinks />
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  .header-content {
    width: 90vw;
    max-width: 1440px;
    margin: 0 auto;
  }
  .header-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      letter-spacing: 1px;
      cursor: pointer;
      span {
        color: var(--primary-500);
        font-weight: bold;
      }
    }
  }
  .toggle-btn {
    button {
      background-color: transparent;
      border: transparent;
      font-size: 2rem;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px) {
    .toggle-btn {
      display: none;
    }
    .header-content {
      display: grid;
      grid-template-columns: 250px 1fr;
    }
  }
`;
