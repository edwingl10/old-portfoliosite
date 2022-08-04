import React from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../data/Projects';
import {
  Container,
  Grid,
  Typography,
  Button,
  Link as MuiLink,
} from '@mui/material';
import PlaceholderImg from '../img/placeholder.jpg';

export default function ViewProject() {
  const { id } = useParams();
  const project = Projects.filter((p) => p.id == id)[0];

  return (
    <Container>
      <Grid
        container
        direction={{ xs: 'column-reverse', md: 'row' }}
        spacing={3}
        sx={{ my: 5 }}>
        <Grid item xs={12} sm={7}>
          <Typography variant="h3" paragraph color="secondary">
            {project.name}
          </Typography>
          <Typography paragraph>{project.description}</Typography>

          <Button
            component={MuiLink}
            href={project.link}
            color="secondary"
            variant="contained"
            sx={{ mt: 2 }}>
            Explore
          </Button>
        </Grid>

        <Grid item xs={12} sm={5} sx={{ textAlign: 'center' }}>
          <img
            src={PlaceholderImg}
            alt="placeholder"
            style={{ width: '100%', maxHeight: 300, objectFit: 'cover' }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        direction={{ xs: 'column-reverse', md: 'row' }}
        spacing={3}>
        <Grid item xs={12} sm={5} sx={{ textAlign: 'center' }}>
          <img
            src={PlaceholderImg}
            alt="placeholder"
            style={{ width: '100%', maxHeight: 300, objectFit: 'cover' }}
          />
        </Grid>

        <Grid item xs={12} sm={7}>
          <Typography variant="h4" paragraph color="primary">
            Behind the Scenes
          </Typography>
          <Typography paragraph>{project.description2}</Typography>

          <Button
            component={MuiLink}
            color="secondary"
            variant="contained"
            sx={{ mt: 2 }}>
            Share
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
