import React from 'react';
import styled from 'styled-components';

const spacingProperties = {
  m: 'margin',
  p: 'padding',
  b: 'border',
};

const directions = {
  x: ['left', 'right'],
  y: ['top', 'bottom'],
  t: ['top'],
  r: ['right'],
  b: ['bottom'],
  l: ['left'],
};

const getSpacing = (props) => () => {
  const spacePattern = /^[mp][xytrbl]?$/;
  const keys = Object.keys(props)
    .filter((key) => spacePattern.test(key))
    .sort((a, b) => {
      if (a.length === 1) return -1;
      if (b.length === 1) return 1;

      return a > b ? -1 : 1;
    });

  if (keys.length === 0) return '';

  const styles = {};
  // Keys that match the spacePattern
  keys.map((key) => {
    const [propertyShortForm, direction] = key.split('');
    const property = spacingProperties[propertyShortForm];
    // Style will be applied on all sides if no direction is passed
    const dirs = directions[direction] || ['top', 'right', 'bottom', 'left'];

    dirs.map((direction) => {
      styles[`${property}-${direction}`] = props[key];
    });
  });

  const styleStr = Object.keys(styles).reduce((acc, key) => {
    acc += `${key}: ${styles[key]};`;

    return acc;
  }, '');

  return styleStr;
};

const StyledBox = styled.div`
  display: flex;
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({
    flex,
  }) => flex && `flex: ${String(flex)};`}
  ${({ flexDirection }) =>
    flexDirection && `flex-direction: ${flexDirection};`}
  ${getSpacing}
`;

const Box = (props) => {
  return <StyledBox {...props} />;
};

export default Box;
