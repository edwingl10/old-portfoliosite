import React from 'react';
import {
  Container,
  Typography,
  Stack,
  Button,
  Box,
  Link as MuiLink,
} from '@mui/material';
import WelcomeImg from '../img/welcome.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const socialIconStyles = { '&:hover': { color: 'secondary.main' } };
const socialLinks = {
  linkedIn: {
    link: 'https://www.linkedin.com/in/edwinglopez/',
    icon: <LinkedInIcon color="primary" sx={socialIconStyles} />,
  },
  github: {
    link: 'https://github.com/edwingl10',
    icon: <GitHubIcon color="primary" sx={socialIconStyles} />,
  },
  mail: {
    link: 'mailto:edwingl@uci.edu',
    icon: <EmailIcon color="primary" sx={socialIconStyles} />,
  },
};

export default function Home() {
  return (
    <Container>
      <Stack
        direction={{ xs: 'column-reverse', md: 'row' }}
        columnGap="20%"
        justifyContent="space-between"
        sx={{ py: 5 }}>
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

          <Button
            component={MuiLink}
            color="secondary"
            variant="contained"
            href="mailto:edwingl@uci.edu"
            sx={{ mt: 2 }}>
            contact
          </Button>

          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            {Object.values(socialLinks).map((val) => (
              <MuiLink href={val.link} target="_blank">
                {val.icon}
              </MuiLink>
            ))}
          </Stack>
        </Box>

        <Box
          component="img"
          src={WelcomeImg}
          alt="welcome"
          sx={{ height: { xs: 200, sm: 250 }, m: 'auto' }}
        />
      </Stack>

      <Box sx={{ py: 5 }} textAlign="center">
        <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
          I'm a dedicated software developer
        </Typography>
        <Container maxWidth="md">
          <Typography>
            I graduated from the University of California, Irvine as a Software
            Engineer. I am a bilingual and committed developer who has
            experience designing, implementing, debugging and testing several
            projects in different languages, technologies and frameworks.
          </Typography>
        </Container>
      </Box>
    </Container>
  );
}
