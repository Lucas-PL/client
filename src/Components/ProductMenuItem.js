import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ga2 from "../ga2.png";
import sg2 from "../sg2.png";

export default function ImgMediaCard(props) {
  var ggg;

  if (props.gate == "ga2") { ggg = ga2} else { ggg = sg2}
  return (
    <div style={{ padding: "2%" }}>
      <Card sx={{ width: "100%", maxWidth: "300px" }}>
        <CardMedia
          component="img"
          alt="Turnstile GA2"
          height="240"
          image={ggg}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
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
