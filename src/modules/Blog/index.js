import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Container, Grid} from '@mui/material';
import {createClient} from 'next-sanity';
import {PortableText} from '@portabletext/react';

export default function Blog({posts}) {
  console.log('BLogs', posts);
  return (
    <>
      <Container sx={{mt: 20}}>
        <Grid container>
          {posts.map((post) => (
            <Grid item xs={6} sx={{border: '1px solid red'}} key={post._id}>
              {/* <p>{item.title}</p> */}
              <Card sx={{maxWidth: 345}}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='140'
                  //   image='/assets/images/cards/contemplative-reptile.jpg'
                  image='/assets/images/cards/contemplative-reptile.jpg'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {post.title}
                  </Typography>
                  <PortableText value={post.body} />

                  <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>Share</Button>
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
import PropTypes from 'prop-types';
Blog.propTypes = {
  posts: PropTypes.object.isRequired,
};
