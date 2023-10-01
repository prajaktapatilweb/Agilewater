import {AppCard} from '@crema';
import {Card, CardMedia, Container, Grid, Typography} from '@mui/material';
import {PortableText} from '@portabletext/react';
import {urlForImage} from 'lib/image';
import Discussion from 'modules/Discussion';
import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

export default function IndividualBlogPage({post}) {
  // console.log('sds', post);
  return (
    <Container sx={{mt: 20}}>
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              component='img'
              alt='green iguana'
              height='640'
              //   image='/assets/images/cards/contemplative-reptile.jpg'
              // image='/assets/images/cards/contemplative-reptile.jpg'
              image={
                urlForImage(post.mainImage)?.options?.source
                  ? urlForImage(post.mainImage)
                  : '/assets/images/blog/comman.webp'
              }
            />
            {/* <Image
            src={urlForImage(post.mainImage).height(1000).width(2000).url()}
            // src='/assets/images/cards/contemplative-reptile.jpg'
            layout='fill'
          /> */}

            <Typography gutterBottom variant='h5' component='div'>
              {post.title}
            </Typography>
            <Typography gutterBottom variant='p' component='div'>
              {post.author.name}
            </Typography>
            <PortableText value={post.body} />
          </Card>
        </Grid>
      </Grid>
      <Discussion />
    </Container>
  );
}
IndividualBlogPage.propTypes = {
  post: PropTypes.object,
};
