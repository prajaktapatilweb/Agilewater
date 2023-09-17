import {AppCard} from '@crema';
import {Container, Grid, Typography} from '@mui/material';
import {PortableText} from '@portabletext/react';
import {urlForImage} from 'lib/image';
import Discussion from 'modules/Discussion';
import Image from 'next/dist/client/image';
import React from 'react';
import PropTypes from 'prop-types';

export default function IndividualBlogPage({post}) {
  // console.log('sds', post);
  return (
    <Container sx={{mt: 20}}>
      <Grid container>
        <Grid item xs={12}>
          {/* <Image
            src={urlForImage(post.mainImage).height(1000).width(2000).url()}
            // src='/assets/images/cards/contemplative-reptile.jpg'
            layout='fill'
          /> */}
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant='h5' component='div'>
            {post.title}
          </Typography>
          <Typography gutterBottom variant='p' component='div'>
            {post.author.name}
          </Typography>
          <PortableText value={post.body} />
        </Grid>
      </Grid>
      <Discussion />
    </Container>
  );
}
