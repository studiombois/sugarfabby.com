import { breakpoints } from '@lib/theme/GlobalStyles';
import React from 'react';
import styled from 'styled-components';

const headingSizes = {
  sm: {
    h1: 2.5,
    h2: 2,
    h3: 1.35,
    h4: 1.15,
  },
  md: {
    h1: 3.5,
    h2: 2.5,
    h3: 1.35,
    h4: 1.15,
  },
};

const getFontWeight = (h) => {
  switch (h) {
    case 'h1':
    case 'h2':
    case 'h3':
      return 700;
    case 'h4':
      return 500;
    default:
      return 500;
  }
};

const StyledHeading = styled.h1`
  /* Default value */
  font-size: ${headingSizes.sm.h1}rem;
  /* Override for other heading sizes */
  font-size: ${({ as }) => as && `${headingSizes.sm[as]}rem`};
  /* Override for any font size */
  font-size: ${({ custom }) => custom && `${custom}rem`};
  font-weight: ${({ as }) => getFontWeight(as)};
  margin-bottom: 0.5em;
  letter-spacing: -0.01rem;

  @media screen and (min-width: ${breakpoints.md}) {
    /* Default value */
    font-size: ${headingSizes.md.h1}rem;
    /* Override for other heading sizes */
    font-size: ${({ as }) => as && `${headingSizes.md[as]}rem`};
  }
`;

const Heading = ({ children, ...props }) => {
  return <StyledHeading {...props}>{children}</StyledHeading>;
};

export default Heading;
