import arrow from '@assets/images/next.svg';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledSpan = styled.span`
  width: 15px;
  height: 15px;
  display: block;
  background-color: var(--color-text);
  ${({ type }) =>
    type === 'left'
      ? css`
          transform: rotate(180deg);
          margin-right: 5px;
        `
      : css`
          margin-left: 5px;
        `}
`;

const Arrow = ({ type }) => {
  return (
    <StyledSpan
      type={type}
      style={{
        mask: `url(${arrow})`,
        maskSize: 'cover',
        WebkitMask: `url(${arrow})`,
        WebkitMaskSize: 'cover',
      }}
    />
  );
};

export default Arrow;
