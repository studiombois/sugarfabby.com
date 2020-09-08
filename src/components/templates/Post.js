import Box from '@components/elements/Box/Box';
import Container from '@components/elements/Container/Container';
import Link from '@components/elements/MDX/Link';
import SEO from '@components/elements/SEO/SEO';
import Heading from '@components/elements/Text/Heading';
import Text from '@components/elements/Text/Text';
import Navbar from '@components/modules/Navbar/Navbar';
import Footer from '@components/templates/Footer/Footer';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
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
  margin-top: 10px;
`;

const Description = styled(Text)`
  max-width: 90%;
`;

const Credit = styled(Text)`
  text-align: center;
  margin: 10px 0;
  color: gray;
`;

const Tag = styled(Text)`
  span {
    font-size: inherit;
    color: var(--color-primary);
  }
`;

const Post = ({ data: { mdx } }) => {
  const { body, frontmatter } = mdx;
  const {
    title,
    description,
    banner,
    bannerCredit,
    bannerLink,
    date,
    category,
  } = frontmatter;

  return (
    <>
      <SEO
        frontmatter={frontmatter}
        metaImage={banner.childImageSharp.fluid.src}
        isBlogPost
      />
      <Navbar />
      <StyleContainer isTopSection>
        <Box flexDirection="column" mb="30px">
          <Tag size="small">
            <span>{category}</span>
            {` • ${date}`}
          </Tag>
          <StyledHeading size="h2">{title}</StyledHeading>
          <Description size="large" fontWeight="200">
            {description}
          </Description>
        </Box>
        {banner && (
          <Box flexDirection="column" mb="30px">
            <Img
              fluid={banner.childImageSharp.fluid}
              alt="post-banner"
              style={{
                borderRadius: 10,
                marginLeft: '-15px',
                marginRight: '-15px',
              }}
            />
            <Credit size="small">
              Photo By&nbsp;
              <Link href={bannerLink}>{bannerCredit}</Link>
            </Credit>
          </Box>
        )}
        <MDXRenderer>{body}</MDXRenderer>
        {/* <Heading size="h4" style={{ textAlign: 'center' }}>
          Share This Article With Your Friends
        </Heading> */}
      </StyleContainer>
      <Footer />
    </>
  );
};

// id comes from the context when we create the pages
export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date
        description
        author
        slug
        bannerCredit
        bannerLink
        category
        banner {
          childImageSharp {
            fluid(maxWidth: 768, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`;

export default Post;
