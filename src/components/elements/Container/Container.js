import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  background: var(--color-background);
  ${({ isTopSection }) => isTopSection && `padding-top: 100px`}
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px 70px;
  text-align: center;
`;

const Container = ({ children, ...props }) => (
  <StyledSection {...props}>
    <Wrapper>{children}</Wrapper>
  </StyledSection>
);

export default Container;
