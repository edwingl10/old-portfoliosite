import React from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from '@mui/material';
import Projects from '../data/Projects';
import PropTypes from 'prop-types';

export default function ProjectSection({ projects }) {
  return (
    <Grid container spacing={4} sx={{ mb: 2 }}>
      {projects.map((project) => (
        <Grid key={project} item xs={11} sm={6} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                src={Projects[project].mainImg}
                alt="placeholder image"
              />
              <CardContent>
                <Typography textAlign="left">{project}</Typography>
                <Typography textAlign="left">
                  {Projects[project].overview}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

ProjectSection.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      overview: PropTypes.string,
      description: PropTypes.string,
      type: PropTypes.string,
      link: PropTypes.string,
      mainImg: PropTypes.element,
    })
  ),
};
