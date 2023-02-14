import React from 'react';
import styled from 'styled-components';

const Card = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;

const CardWrapper = styled.article`
  border-radius: 0.5rem;
  background-color: var(--white);
  overflow: hidden;
`;
