import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const StyledText = styled(Text)`
  margin-bottom: 30px;
  line-height: 1.7;
  strong {
    font-weight: 700;
  }
`;

const Paragraph = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Paragraph;
