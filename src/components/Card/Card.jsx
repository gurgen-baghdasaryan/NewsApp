import React, { Component } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// cards
class NewsCard extends Component {



  render() {

    const { title, description, urlToImage } = this.props.data



    return (
      <section className="Card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={urlToImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" type="button" onClick={() => this.props.remove(title)}>Borrar</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </section>
    );



  }
}

export default NewsCard;
