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
import Projects from './pages/ListProjects';
import ViewProject from './pages/ViewProject';

function App() {
  return (
    <Box>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ViewProject />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    </Box>
  );
}

export default App;
