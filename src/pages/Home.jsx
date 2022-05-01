import React from 'react';
import { Container, Typography, Stack, Button, Box } from '@mui/material';
import WelcomeImg from '../img/welcome.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ p: 3 }}>
      <Stack
        direction={{ xs: 'column-reverse', md: 'row' }}
        columnGap="20%"
        justifyContent="space-between">
        <Box sx={{ mt: 4 }}>
          <Typography variant="h3" paragraph color="primary">
            Hi, I'm{' '}
            <Box component="span" sx={{ color: 'secondary.main' }}>
              Edwin
            </Box>
          </Typography>
          <Typography variant="h5" paragraph>
            I am a software engineer currently focusing on bringing web projects
            to life.
          </Typography>

          <Button color="secondary" variant="contained" sx={{ mt: 2 }}>
            contact
          </Button>

          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <LinkedInIcon color="primary" />
            <GitHubIcon color="primary" />
            <EmailIcon color="primary" />
          </Stack>
        </Box>

        <Box
          component="img"
          src={WelcomeImg}
          alt="welcome"
          sx={{ height: { xs: 200, sm: 250 }, m: 'auto' }}
        />
      </Stack>
    </Container>
  );
}
