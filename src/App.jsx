import React from 'react';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  Box,
  Typography,
} from '@mui/material';
import theme from './theme';

function App() {
  return (
    <Box>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Typography variant="h1">Website coming soon!</Typography>
        </ThemeProvider>
      </StyledEngineProvider>
    </Box>
  );
}

export default App;
