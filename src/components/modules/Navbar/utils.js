import { css } from 'styled-components';

export const navbarPadding = css`
  &.alert-enter,
  &.alert-exit-done {
    > div {
      padding: 20px;
    }
  }

  &.alert-enter-active {
    box-shadow: var(--box-shadow);
    > div {
      padding: 10px 20px;
      transition: padding 100ms ease-out;
    }
  }

  &.alert-enter-done {
    box-shadow: var(--box-shadow);
    > div {
      padding: 10px 20px;
    }
  }

  &.alert-exit {
    > div {
      padding: 10px 20px;
    }
  }

  &.alert-exit-active {
    > div {
      padding: 20px;
      transition: padding 100ms ease-out;
    }
  }
`;
