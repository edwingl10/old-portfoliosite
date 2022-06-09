import React from 'react';
import {
  Typography,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from '@mui/material';
import Projects from '../data/Projects';

export default function ProjectSection() {
  return (
    <Box sx={{ py: 5 }} textAlign="center">
      <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
        Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {Object.keys(Projects).map((project) => (
          <Grid key={project} item xs={10} sm={6} md={4}>
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
    </Box>
  );
}
