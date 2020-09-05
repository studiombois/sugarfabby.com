import Box from '@components/elements/Box/Box';
import Container from '@components/elements/Container/Container';
import SEO from '@components/elements/SEO/SEO';
import Heading from '@components/elements/Text/Heading';
import Text from '@components/elements/Text/Text';
import Navbar from '@components/modules/Navbar/Navbar';
import Footer from '@components/templates/Footer/Footer';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';

const StyleContainer = styled(Container)`
  flex: 1 0 auto;
  > div {
    max-width: 768px;
    text-align: left;
  }
`;

const StyledHeading = styled(Heading)`
  line-height: 1.2;
`;

const Description = styled(Text)`
  max-width: 90%;
`;

const Post = ({ data: { mdx } }) => {
  return (
    <>
      <SEO frontmatter={mdx.frontmatter} isBlogPost />
      <Navbar />
      <StyleContainer isTopSection>
        <Box flexDirection="column" mb="30px">
          <StyledHeading size="h2">{mdx.frontmatter.title}</StyledHeading>
          <Description size="large" fontWeight="200">
            {mdx.frontmatter.description}
          </Description>
        </Box>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <Heading size="h4" style={{ textAlign: 'center' }}>
          Share This Article With Your Friends
        </Heading>
      </StyleContainer>
      <Footer />
    </>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        description
        author
        slug
      }
      body
    }
  }
`;

export default Post;
