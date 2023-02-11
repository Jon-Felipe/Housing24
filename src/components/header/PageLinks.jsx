import React from 'react';
import styled from 'styled-components';

// links
import { pageLinks } from '../../utils/constants';

const PageLinks = () => {
  return (
    <PageLinkWrapper>
      {pageLinks.map((link) => {
        return <li key={link.id}>{link.text}</li>;
      })}
    </PageLinkWrapper>
  );
};

export default PageLinks;

const PageLinkWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  li {
    font-size: 1.2rem;
    color: #d2cfcf;
    letter-spacing: 1.5px;
    cursor: pointer;
  }
`;
