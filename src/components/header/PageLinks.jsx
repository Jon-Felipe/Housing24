import React from 'react';
import styled from 'styled-components';

// links
import { pageLinks } from '../../utils/constants';

const PageLinks = () => {
  return (
    <PageLinksWrapper>
      {pageLinks.map((link) => {
        return <li key={link.id}>{link.text}</li>;
      })}
    </PageLinksWrapper>
  );
};

export default PageLinks;

const PageLinksWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  li {
    font-size: 1.15rem;
    letter-spacing: var(--letterSpacing);
    color: var(--grey-500);
    cursor: pointer;
  }
  li:hover {
    color: var(--primary-500);
    font-weight: bold;
    transform: scale(1.1);
    text-decoration: underline;
  }
`;
