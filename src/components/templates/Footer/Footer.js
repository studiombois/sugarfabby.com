import Box from '@components/elements/Box/Box';
import Container from '@components/elements/Container/Container';
import Icon from '@components/elements/Icon/Icon';
import { breakpoints } from '@lib/theme/GlobalStyles';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  background: var(--color-background-footer);
  color: var(--color-text-footer);
  > div {
    display: flex;
    flex-direction: column;
  }
`;

const SocialMediaButtonsBox = styled(Box)`
  margin-bottom: 20px;
  > :not(:last-child) {
    margin-right: 15px;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    margin: 0;
  }
`;

const StyledBox = styled(Box)`
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Links = styled(Box)`
  > :not(:first-child) {
    margin-left: 5px;
  }
  a,
  #scroll-to-top {
    padding: 8px 10px;
    font-size: 16px;
    border-radius: 5px;

    &:hover {
      color: var(--color-hover);
    }
  }

  #scroll-to-top {
    cursor: pointer;
    display: inline-block;
  }
`;

const StyledIcon = styled(Icon)`
  width: 35px;
  height: 35px;
  display: block;
  opacity: 0.7;
  background-color: var(--color-text-footer);
  transition: opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  :hover {
    opacity: 1;
  }
`;

const RightsText = styled.p`
  flex: 1;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialMedia {
            link
            platform
          }
          blogUrl
        }
      }
    }
  `);
  const { socialMedia } = data.site.siteMetadata;
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== 'undefined' && window.scroll) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <StyledContainer>
      <StyledBox
        flex={1}
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        mb="20px"
      >
        <SocialMediaButtonsBox alignItems="center" justifyContent="flex-start">
          {socialMedia.map((media) => (
            <StyledIcon
              key={media.platform}
              icon={media.platform}
              link={media.link}
            />
          ))}
        </SocialMediaButtonsBox>
        <Links>
          {/* <a href={blogUrl}>Blog</a> */}
          <Link to="/about">About</Link>
          <p id="scroll-to-top" onClick={scrollToTop}>
            Back To Top
          </p>
        </Links>
      </StyledBox>
      <RightsText>© {year} Fabian Lee. All Rights Reserved.</RightsText>
    </StyledContainer>
  );
};

export default Footer;
