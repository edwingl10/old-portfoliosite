import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  Box,
} from '@mui/material';
import theme from './theme';
import Home from './pages/Home';

function App() {
  return (
    <Box>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    </Box>
  );
}

export default App;
