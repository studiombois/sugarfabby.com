import React from 'react';
import styled from 'styled-components';

const StyledPre = styled.pre`
  background: var(--color-background-code) !important;
  padding: 20px 45px !important;
  border-radius: 10px;
  code {
    font-size: 16px;
    * {
      font-size: 16px;
    }
  }
`;

const Pre = (props) => {
  return (
    <div style={{ margin: '2.75rem -15px' }}>
      <StyledPre {...props} />
    </div>
  );
};

export default Pre;
