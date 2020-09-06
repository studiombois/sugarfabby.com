import { theme } from '@lib/theme/theme';
import React from 'react';
import styled from 'styled-components';

const headingSizes = {
  h1: theme.fontSizes.enormous,
  h2: theme.fontSizes['extra-huge'],
  h3: theme.fontSizes.huge,
  h4: theme.fontSizes['extra-large'],
  h5: theme.fontSizes.large,
  h6: theme.fontSizes.default,
};

const getFontWeight = (h) => {
  switch (h) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
      return 700;
    default:
      return 500;
  }
};

const StyledHeading = styled.h1`
  /* Default value */
  font-size: ${({ size }) => size && `${headingSizes[size]}rem`};
  /* Override for other heading sizes */
  font-size: ${({ size }) => size && `${headingSizes[size]}rem`};
  /* Override for any font size */
  font-size: ${({ custom }) => custom && `${custom}rem`};
  font-weight: ${({ size }) => getFontWeight(size)};
  margin: 2.75rem 0 1.05rem;
  line-height: 1.2;
  letter-spacing: -0.01rem;
  a {
    color: var(--color-primary);
    font-weight: inherit;
    font-size: inherit;

    :hover {
      text-decoration: underline;
    }
  }
`;

const Heading = ({ children, ...props }) => {
  return <StyledHeading {...props}>{children}</StyledHeading>;
};

export default Heading;
