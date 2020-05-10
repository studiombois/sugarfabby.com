import React from 'react';
import styled from 'styled-components';

const StyleP = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
`;

const Paragraph = ({ children, ...props }) => {
  return <StyleP {...props}>{children}</StyleP>;
};

export default Paragraph;
