import Container from '@components/elements/Container/Container';
import SEO from '@components/elements/SEO/SEO';
import React from 'react';
import styled from 'styled-components';

const StyleContainer = styled(Container)`
  flex: 1 0 auto;
  > div {
    max-width: 768px;
    text-align: left;
  }
`;

const MarkdownPage = ({ children, pageContext }) => {
  return (
    <>
      <SEO frontmatter={pageContext.frontmatter} />
      <StyleContainer>{children}</StyleContainer>
    </>
  );
};

export default MarkdownPage;
