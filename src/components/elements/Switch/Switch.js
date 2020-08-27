import React from 'react';
import styled from 'styled-components';

const StyledSwitch = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
  transform: scale(0.8);

  > input {
    display: none;
  }

  > #Switch_Button {
    border-radius: 34px;
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
    &:before {
      border-radius: 50%;
      background-color: #fff;
      bottom: 4px;
      content: '';
      height: 26px;
      left: 4px;
      position: absolute;
      transition: 0.4s;
      width: 26px;
    }
  }

  > input:checked + #Switch_Button {
    background-color: var(--color-primary);
    &:before {
      transform: translateX(26px);
    }
  }
`;

const Switch = ({ onChange, checked }) => {
  return (
    <StyledSwitch htmlFor="checkbox">
      <input
        onChange={onChange}
        checked={checked}
        type="checkbox"
        id="checkbox"
      />
      <div id="Switch_Button" />
    </StyledSwitch>
  );
};

export default Switch;
