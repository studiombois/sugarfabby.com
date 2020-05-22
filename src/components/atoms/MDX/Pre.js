import React from 'react';
import styled from 'styled-components';

const StyledPre = styled.pre`
  background: var(--color-background-code) !important;
  padding-top: 25px !important;
  padding-bottom: 25px !important;
  code {
    * {
      font-size: 0.95em;
    }
  }
`;

const Pre = (props) => {
  return (
    <div style={{ margin: '2.75rem -20px' }}>
      <StyledPre {...props} />
    </div>
  );
};

export default Pre;
