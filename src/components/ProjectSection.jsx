import React from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProjectSection({ projects }) {
  const navigate = useNavigate();

  return (
    <Grid container spacing={4} sx={{ mb: 2 }}>
      {projects.map((project) => (
        <Grid key={project.id} item xs={11} sm={6} md={4}>
          <Card>
            <CardActionArea onClick={() => navigate('/projects/' + project.id)}>
              <CardMedia
                component="img"
                height="150"
                src={project.mainImg}
                alt="placeholder image"
              />
              <CardContent>
                <Typography textAlign="left" paragraph>
                  {project.name}
                </Typography>
                <Typography textAlign="left" variant="body2">
                  {project.overview}
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
