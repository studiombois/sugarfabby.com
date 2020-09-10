import Container from '@components/elements/Container/Container';
import SEO from '@components/elements/SEO/SEO';
import Navbar from '@components/modules/Navbar/Navbar';
import Footer from '@components/templates/Footer/Footer';
import React from 'react';
import styled from 'styled-components';

const PageContainer = styled(Container)`
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
      <Navbar />
      <PageContainer isTopSection>{children}</PageContainer>
      <Footer />
    </>
  );
};

export default MarkdownPage;
