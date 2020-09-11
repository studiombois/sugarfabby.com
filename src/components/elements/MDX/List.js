import styled, { css } from 'styled-components';

const listStyle = css`
  padding-left: 15px;
  li {
    line-height: 1.7;
    margin-bottom: 10px;
  }
`;

export default styled.ul`
  ${listStyle}
`;

export const OrderedList = styled.ol`
  ${listStyle}
`;
