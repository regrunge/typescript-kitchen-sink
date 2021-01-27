import materialUiColors from './material-ui-colors';

export const colors = {
  primary: '#9ebdf2',
  secondary: '#bf77ab',
  success: '#4caf50',
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
  background: '#dddfdf',
  homepage: '#2d3242',
  button: '#cabbf3',
  typeNormal: '#242424',
  typeLight: '#aaaaaa',
};

export const typography = {
  h1: {
    fontSize: 48,
    color: colors.typeNormal,
  },
  h2: {
    fontSize: 24,
    color: colors.typeLight,
  },
  h6: {
    fontSize: 16,
    color: colors.info,
    fontWeight: '900' as '900',
    textTransform: 'uppercase' as 'uppercase',
  },
  body: {
    fontSize: 16,
    color: colors.typeNormal,
  },
  icon: {
    fontSize: 24,
    color: colors.typeNormal,
  },
};

export const spacing = {
  xs: 8,
  md: 16,
  lg: 24,
};

export default {
  materialUiColors: materialUiColors,
  colors: colors,
  typography: typography,
  spacing: spacing,
};
