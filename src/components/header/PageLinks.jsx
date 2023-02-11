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
`;
