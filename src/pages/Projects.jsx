import React from 'react';
import { Stack, Typography, Box, Container, Button } from '@mui/material';
import BannerImg from '../img/projects.png';
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
          src={BannerImg}
          alt="projects page"
          sx={{ height: { xs: 220, sm: 270 }, m: 'auto' }}
        />
      </Stack>

      <ProjectSection />

      <Button color="secondary" variant="contained">
        Load More
      </Button>
    </Container>
  );
}
