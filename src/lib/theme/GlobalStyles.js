import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

const GlobalStyles = createGlobalStyle`
  :root {
    --color-darkMode-lighter: #cee7fe;
    --color-darkMode-light: #6d93b3;
    --color-darkMode: #0b2038;
    --color-darkMode-dark: #001426;
    --color-darkMode-darker: #000b14;

    --color-primary-lighter: #cee7fe;
    --color-primary-light: #82c4fe;
    --color-primary: #4facfe;
    --color-primary-dark: #1986e6;
    --color-primary-darker: #1267b3;

    --color-white: #ffffff;
    --color-grey-light: #f9f9f9;
    --color-grey: #dcdcdc;
    --color-grey-dark: #a7a7a7;
    --color-grey-darker: #6b6b6b;

    --color-background: var(--color-white);
    --color-background-dark: var(--color-grey-light);
    --color-background-footer: var(--color-primary);
    --color-text: var(--color-darkMode);
    --color-text-footer: var(--color-white);
    --color-text-secondary: var(--color-grey-dark);
    --color-text-disabled: var(--color-grey-light);
    --color-hover: var(--color-primary-light);
    --color-active: var(--color-primary-dark);
    --color-disabled: var(--color-grey);

    --base-font-size: 16px;
  }

  [data-theme='dark'] {
    --color-background: var(--color-darkMode);
    --color-background-dark: var(--color-darkMode-dark);
    --color-background-footer: var(--color-darkMode-darker);
    --color-text: var(--color-primary-lighter);
    --color-text-footer: var(--color-primary-lighter);
    --color-text-secondary: var(--color-darkMode-light);
    --color-text-disabled: var(--color-darkMode-light);
    --color-hover: var(--color-primary-light);
    --color-active: var(--color-primary-dark);
    --color-disabled: var(--color-darkMode-dark);
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: var(--base-font-size);
    line-height: 1.5em;
    transition: background 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  html,
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--color-text);
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
