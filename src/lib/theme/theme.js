const globalPalette = {
  primaryLighter: '#cee7fe',
  primaryLight: '#82c4fe',
  primary: '#4facfe',
  primaryDark: '#1986e6',
  primaryDarker: '#1267b3',
  white: '#ffffff',
  greyLight: '#f9f9f9',
  grey: '#dcdcdc',
  greyDark: '#a7a7a7',
  greyDarker: '#6b6b6b',
  darkPrimaryLighter: '#cee7fe',
  darkPrimaryLight: '#6d93b3',
  darkPrimary: '#0b2038',
  darkPrimaryDark: '#001426',
  darkPrimaryDarker: '#000b14',
};

export const theme = {
  fontSizes: {
    enormous: 3.052,
    'extra-huge': 2.441,
    huge: 1.953,
    'extra-large': 1.563,
    large: 1.25,
    default: 1,
    small: 0.8,
    'extra-small': 0.64,
    tiny: 0.512,
  },
  breakpoints: {
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  palette: {
    ...globalPalette,
  },
};

export const breakpoints = {
  sm: '768px',
  md: '992px',
  lg: '1200px',
};
