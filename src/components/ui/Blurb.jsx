import React from 'react';
import styled from 'styled-components';

const Blurb = ({ icon, text }) => {
  return (
    <BlurbWrapper>
      {icon && icon}
      <p>{text}</p>
    </BlurbWrapper>
  );
};

export default Blurb;

const BlurbWrapper = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid var(--grey-100);
  border-radius: 30px;
  padding: 13px 25px;
  background-color: var(--white);
  cursor: pointer;
  svg {
    color: var(--grey-700);
    margin-right: 5px;
    font-size: 1.15rem;
  }
  p {
    color: var(--grey-500);
    font-size: 1rem;
  }
`;