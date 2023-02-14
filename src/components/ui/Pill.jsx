import React from 'react';
import styled from 'styled-components';

const Pill = ({ children }) => {
  return <PillWrapper>{children}</PillWrapper>;
};

export default Pill;

const PillWrapper = styled.div`
  background-color: var(--primary-50);
  border-radius: var(--borderRadius);
  padding: 3px 5px;
`;
