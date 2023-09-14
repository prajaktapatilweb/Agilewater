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
import PropTypes from 'prop-types';
import {urlForImage} from 'lib/image';
import Link from 'next/dist/client/link';

export default function Blog({posts}) {
  console.log('BLogs', posts);
  return (
    <>
      <Container sx={{mt: 20}}>
        <Grid container>
          {posts.map((post) => (
            <Link href={`/blog/${post.slug.current}`}>
              <Grid
                item
                xs={4}
                // sx={{border: '1px solid red'}}
                key={post._id}
              >
                <Card sx={{maxWidth: 345}}>
                  <CardMedia
                    component='img'
                    alt='green iguana'
                    height='140'
                    //   image='/assets/images/cards/contemplative-reptile.jpg'
                    // image='/assets/images/cards/contemplative-reptile.jpg'
                    image={
                      urlForImage(post.mainImage)?.options?.source
                        ? urlForImage(post.mainImage)
                        : '/assets/images/blog/comman.webp'
                    }
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {post.title}
                      {/* <pre>{JSON.stringify(urlForImage(post.mainImage), null, 2)}</pre>  */}
                      
                    </Typography>
                    <Typography gutterBottom variant='p' component='div'>
                      {post.author.name}
                    </Typography>
                    <PortableText value={post.body} />

                    <Typography variant='body2' color='text.secondary'>
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Share</Button>
                    {/* // react-share or react-web-share module can be used to do this taks */}
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Link>
          ))}
        </Grid>
      </Container>
    </>
  );
}

Blog.propTypes = {
  posts: PropTypes.object.isRequired,
};
