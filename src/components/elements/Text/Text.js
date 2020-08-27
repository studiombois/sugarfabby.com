import React from 'react';
import styled from 'styled-components';

const StyleP = styled.p`
  /* Default value */
  font-size: ${({ theme }) => `${theme.fontSizes.default}rem`};
  /* Override for other heading sizes */
  font-size: ${({ theme, size }) => size && `${theme.fontSizes[size]}rem`};
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`}
`;

const Text = ({ children, ...props }) => {
  return <StyleP {...props}>{children}</StyleP>;
};

export default Text;
