import Container from '@components/elements/Container/Container';
import Heading from '@components/elements/Text/Heading';
import Paragraph from '@components/elements/Text/Paragraph';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  > div {
    max-width: 640px;
  }
`;

const AboutMeSection = ({ ...props }) => {
  return (
    <StyledContainer {...props}>
      <Heading size="h2">About Me</Heading>
      <Paragraph>
        My name is Fabian Lee. I am a software engineer from Hong Kong who likes
        doing design and front-end development. I believe our world needs more
        people with compassion and inspire others to be better.
      </Paragraph>
      <Paragraph>
        I&apos;m not the most logical engineer you&apos;ll meet. But I&apos;m
        proud to be someone that sees the world in a humanistic perspective.
        This helps us understand and build meaningful relationship all other
        living beings.
      </Paragraph>
    </StyledContainer>
  );
};

export default AboutMeSection;
