import React, { useState, useEffect } from 'react';
import { Stack, Typography, Box, Container, Button } from '@mui/material';
import BannerImg from '../img/projects.png';
import ProjectSection from '../components/ProjectSection';
import Projects from '../data/Projects';

export default function ListProjects() {
  const [limit, setLimit] = useState(6);
  const [disableBtn, setDisableBtn] = useState(false);

  useEffect(() => {
    setDisableBtn(limit >= 10);
  }, [limit]);

  return (
    <Container>
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

      <ProjectSection projects={Projects.slice(0, limit)} />

      <Box textAlign="center">
        <Button
          color="secondary"
          variant="contained"
          disabled={disableBtn}
          onClick={() => setLimit(limit + limit)}>
          Load More
        </Button>
      </Box>
    </Container>
  );
}
