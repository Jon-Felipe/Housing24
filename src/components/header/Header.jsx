import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <div className='header-content'>
        <h2>housing24</h2>
        <div className='toggle-btn'>
          <button>x</button>
        </div>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 90vw;
    max-width: 1440px;
    h2 {
      letter-spacing: 1px;
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
`;
