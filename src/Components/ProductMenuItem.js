import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ga2 from '../ga2.png';

export default function ImgMediaCard(props) {
  return (
  <div style={{padding: "2%"}}>
      
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Turnstile GA2"
        height="240"
        image={ga2}
        />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </div>
  );
}