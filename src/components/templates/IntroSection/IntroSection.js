import avatarDark from '@assets/images/avatar-dark.svg';
import avatar from '@assets/images/avatar.svg';
import Box from '@components/elements/Box/Box';
import Button from '@components/elements/Button/Button';
import Container from '@components/elements/Container/Container';
import Loading from '@components/elements/Loading/Loading';
import Heading from '@components/elements/Text/Heading';
import Paragraph from '@components/elements/Text/Paragraph';
import { useTheme } from '@components/templates/ThemeProvider';
import { breakpoints } from '@lib/theme/theme';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';

const avatarWrapper = css`
  width: 335px;
  height: 198px;

  @media screen and (min-width: ${breakpoints.md}) {
    width: 534px;
    height: 315px;
  }
`;

const StyledContainer = styled(Container)`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px 90px;
    max-width: 100%;

    @media screen and (min-width: ${breakpoints.sm}) {
      flex-direction: row;
      padding: 30px 60px 90px;
      max-width: ${breakpoints.md};
    }

    @media screen and (min-width: ${breakpoints.md}) {
      max-width: ${breakpoints.lg};
    }
  }
`;

const Buttons = styled(Box)`
  @media screen and (min-width: ${breakpoints.sm}) {
    justify-content: flex-start;
  }
`;

const Headline = styled.div`
  text-align: center;
  max-width: 360px;
  margin-bottom: 30px;

  @media screen and (min-width: ${breakpoints.sm}) {
    text-align: left;
    margin-bottom: 0px;
    padding-right: 20px;
  }
`;

const Avatar = styled.img`
  animation: fadeIn 0.5s ease-in-out;
  ${avatarWrapper}

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Wrapper = styled(Box)`
  ${avatarWrapper}
`;

const IntroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          email
          description
        }
      }
      contentfulAsset(title: { eq: "resume" }) {
        file {
          url
        }
      }
    }
  `);
  const { mode } = useTheme();
  const { author, email, description } = data.site.siteMetadata;
  const { url: resumeUrl } = data.contentfulAsset.file;
  return (
    <StyledContainer isTopSection>
      <Headline>
        <Heading size="h1" style={{ margin: '0 0 10px' }}>
          {author}
        </Heading>
        <Paragraph style={{ fontSize: '18px' }}>{description}</Paragraph>
        <Buttons justifyContent="center">
          <Button link={`mailto:${email}`} target="_self">
            Email Me
          </Button>
          <Box mr="10px" />
          <Button link={resumeUrl} isFill>
            View Resume
          </Button>
        </Buttons>
      </Headline>
      {mode ? (
        <Avatar
          src={mode === 'light' ? avatar : avatarDark}
          alt="fabian-avatar"
        />
      ) : (
        <Wrapper>
          <Loading />
        </Wrapper>
      )}
    </StyledContainer>
  );
};

export default IntroSection;
