import { createTheme, ThemeOptions } from '@mui/material';

const theme = createTheme({
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
}) as ThemeOptions;

export default theme;
