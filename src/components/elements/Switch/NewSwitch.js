import React from 'react';
import styled, { css } from 'styled-components';

const toggleButton = css`
  opacity: 0.65;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 0;
  appearance: none;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const Toggle = styled.input`
  ${toggleButton}
  ${({ checked }) =>
    checked
      ? css`
          position: relative;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: none;
          background-color: transparent;
          transform: scale(1);
          transition: all 0.45s ease;
          overflow: hidden;
          box-shadow: inset 8px -8px 0px 0px var(--color-switch);

          &:before,
          &::after {
            content: ' ';
            position: absolute;
            border-radius: 50%;
          }

          &:before {
            right: -9px;
            top: -9px;
            height: 24px;
            width: 24px;
            border: none;
            transform: translate(0, 0);
            opacity: 1;
            transition: transform 0.45s ease;
          }

          &:after {
            width: 8px;
            height: 8px;
            margin: -4px 0 0 -4px;
            top: 50%;
            left: 50%;
            box-shadow: 0 -23px 0 var(--color-switch),
              0 23px 0 var(--color-switch), 23px 0 0 var(--color-switch),
              -23px 0 0 var(--color-switch), 15px 15px 0 var(--color-switch),
              -15px 15px 0 var(--color-switch), 15px -15px 0 var(--color-switch),
              -15px -15px 0 var(--color-switch);
            transform: scale(0);
            transition: all 0.35s ease;
          }
        `
      : css`
          position: relative;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 4px solid var(--color-switch);
          background-color: var(--color-switch);
          transform: scale(0.55);
          transition: all 0.45s ease;
          overflow: visible;
          box-shadow: none;

          &:before,
          &::after {
            content: ' ';
            position: absolute;
            border-radius: 50%;
          }

          &:before {
            right: -9px;
            top: -9px;
            height: 24px;
            width: 24px;
            border: 2px solid var(--color-switch);
            transform: translate(14px, -14px);
            opacity: 0;
            transition: transform 0.45s ease;
          }

          &:after {
            width: 8px;
            height: 8px;
            margin: -4px 0 0 -4px;
            top: 50%;
            left: 50%;
            box-shadow: 0 -23px 0 var(--color-switch),
              0 23px 0 var(--color-switch), 23px 0 0 var(--color-switch),
              -23px 0 0 var(--color-switch), 15px 15px 0 var(--color-switch),
              -15px 15px 0 var(--color-switch), 15px -15px 0 var(--color-switch),
              -15px -15px 0 var(--color-switch);
            transform: scale(1);
            transition: all 0.35s ease;
          }
        `}
`;

const Switch = ({ onChange, checked }) => {
  return (
    <div style={{ transform: 'scale(0.95)' }}>
      <Toggle
        onChange={onChange}
        checked={checked}
        type="checkbox"
        id="checkbox"
        aria-label={checked ? `Activate Light Mode` : `Activate Dark Mode`}
        title={checked ? `Activate Light Mode` : `Activate Dark Mode`}
      />
    </div>
  );
};

export default Switch;
