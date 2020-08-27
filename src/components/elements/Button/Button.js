import React from 'react';
import styled, { css } from 'styled-components';

const filledStyle = css`
  background: var(--color-primary);
  color: var(--color-white);
  border: 1px solid var(--color-primary);
  &:hover {
    border: 1px solid var(--color-hover);
    background: var(--color-hover);
  }
  &:active,
  &:focus {
    border: 1px solid var(--color-active);
    background: var(--color-active);
  }
`;

const disabledStyle = css`
  color: var(--color-text-disabled);
  border: 1px solid var(--color-disabled);
  pointer-events: none;
  ${({ fill }) => fill && 'background: var(--color-disabled)'}
`;

const StyledButton = styled.button`
  min-width: 125px;
  border-radius: 20px;
  padding: 8px 20px;
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  font-family: inherit;
  line-height: 1.5;
  font-size: 16px;
  cursor: pointer;

  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  &:hover {
    color: var(--color-white);
    border: 1px solid var(--color-hover);
    background: var(--color-hover);
  }
  &:active,
  &:focus {
    color: var(--color-white);
    border: 1px solid var(--color-active);
    background: var(--color-active);
  }

  ${({ fill }) => fill && filledStyle}
  ${({ disabled }) => disabled && disabledStyle}
`;

const Button = ({ children, onClick, fill, link, disabled, target }) => {
  if (link) {
    return (
      <a href={link} target={target} rel="nofollow noopener noreferrer">
        <StyledButton {...{ onClick, fill, disabled }}>{children}</StyledButton>
      </a>
    );
  }

  return (
    <StyledButton {...{ onClick, fill, disabled }}>{children}</StyledButton>
  );
};

Button.defaultProps = {
  target: '_blank',
};

export default Button;
