import React from 'react';
import { Stack, Typography, Box, Container, Button } from '@mui/material';
import WelcomeImg from '../img/welcome.png';
import ProjectSection from '../components/ProjectSection';

export default function Projects() {
  return (
    <Container sx={{ textAlign: 'center' }}>
      <Stack
        direction={{ xs: 'column-reverse', md: 'row' }}
        columnGap="20%"
        justifyContent="space-between"
        sx={{ py: 5 }}>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h3" paragraph color="secondary">
            Projects
          </Typography>
          <Typography variant="h5" paragraph>
            Check out some of the projects I have worked on, using different
            languages and frameworks.
          </Typography>
        </Box>

        <Box
          component="img"
          src={WelcomeImg}
          alt="projects page"
          sx={{ height: { xs: 200, sm: 250 }, m: 'auto' }}
        />
      </Stack>

      <ProjectSection />

      <Button color="secondary" variant="contained">
        Load More
      </Button>
    </Container>
  );
}
