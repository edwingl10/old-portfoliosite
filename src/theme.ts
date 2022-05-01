import { createTheme, ThemeOptions, responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#3d5a80',
      },
      secondary: {
        main: '#ee6c4d',
      },
      background: {
        default: '#fafafa',
      },
    },
    typography: {
      fontFamily: `"Dosis", sans-serif`,
    },
  })
) as ThemeOptions;

export default theme;
