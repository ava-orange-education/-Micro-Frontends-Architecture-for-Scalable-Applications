import { createTheme as createMuiTheme } from '@mui/material/styles';
import tokens from './tokens';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default () => {
  return createMuiTheme({
    palette: {
      primary: { main: tokens.primaryColor },
      secondary: { main: tokens.secondaryColor },
      error: { main: tokens.errorColor },
      warning: { main: tokens.warningColor },
      info: { main: tokens.infoColor },
      success: { main: tokens.successColor },
    },
    typography: {
      fontFamily: tokens.fontFamily,
      fontSize: tokens.fontSize,
      fontWeightLight: tokens.fontWeightLight,
      fontWeightRegular: tokens.fontWeightRegular,
      fontWeightMedium: tokens.fontWeightMedium,
      fontWeightBold: tokens.fontWeightBold,
    },
    spacing: tokens.spacing,
    shape: {
      borderRadius: tokens.borderRadius,
    },
  });
};
