import { css } from 'styled-components';

export const navbarPadding = css`
  &.alert-enter,
  &.alert-exit-done {
    > div {
      padding: 20px;
      background: transparent;
    }
  }

  &.alert-enter-active {
    box-shadow: var(--box-shadow);
    background: var(--color-navbar-background);
    > div {
      padding: 10px 20px;
      transition: padding 100ms ease-out;
    }
  }

  &.alert-enter-done {
    box-shadow: var(--box-shadow);
    background: var(--color-navbar-background);
    > div {
      padding: 10px 20px;
    }
  }

  &.alert-exit {
    > div {
      padding: 10px 20px;
      background: transparent;
    }
  }

  &.alert-exit-active {
    > div {
      padding: 20px;
      background: transparent;
      transition: padding 100ms ease-out;
    }
  }
`;
