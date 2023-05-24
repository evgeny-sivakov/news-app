import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';

const urlToImage = 'https://media.istockphoto.com/id/1264074047/pl/wektor/naj%C5%9Bwie%C5%BCsze-informacje-w-tle.jpg?s=1024x1024&w=is&k=20&c=s8_Y-S1AS1GGOCBB6XOSKX3kdm5lhpRy0eTWlullPjg=';

function FeaturedPost({ article, categoryID, articleIndex }) {

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={`${categoryID}/${articleIndex}`}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {article.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {article.author}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              display: { xs: "none", sm: "block" },
              width: '40%',
              height: 'auto'
            }}
            image={article.urlToImage ?? urlToImage}
            alt=''
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  article: PropTypes.shape({
    //date: PropTypes.string.isRequired,
    //description: PropTypes.string.isRequired,
    //image: PropTypes.string.isRequired,
    //imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
