import { AppCard } from '@crema';
import { Box, Button, Card, CardMedia, Container, Grid, InputAdornment, Link, TextField, Typography } from '@mui/material';
import { PortableText } from '@portabletext/react';
import { urlForImage } from 'lib/image';
import Discussion from 'modules/Discussion';
import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';
import SideCard from 'modules/SM/ScrumMasterCert/SideCard';
import { sideList4 } from 'modules/Constant/OtherCardsConst';
import { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";


export default function IndividualBlogPage({ post }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log('sds', post);
  return (
    <Box >
      <Grid container className='section' style={{ background: '#edeff3', marginBottom: 10, padding: 25 }}>
        <Container>
          <Typography variant='h7' component='div'>
            {post.title}
          </Typography>
        </Container>
      </Grid>
      <Container sx={{ maxWidth: { xl: 1450 } }}>
        <Grid container spacing={3}>
          <Grid item xs={9}>

            <Grid container>
              <Grid item xs={12}>
                <Card sx={{ p: 5, mb: 5 }}>
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
                  <Box sx={{ p: 5 }}>


                    <PortableText value={post.body} />
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <Typography gutterBottom variant='h2' component='div'>
                      {post.author.name}
                    </Typography>
                    <Button variant="contained" sx={{ backgroundImage: "linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)", mr: 4 }}><Link href='/hire-coach' sx={{ color: 'white', textDecoration: 'none' }}> Hire Coach</Link></Button>
                    <Button variant="contained" sx={{ backgroundImage: "linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)" }}><Link href='/hire-coach' sx={{ color: 'white', textDecoration: 'none' }}> Contact Author</Link></Button>

                  </Box>
                </Card>
              </Grid>
            </Grid>
            <Discussion />

          </Grid>
          <Grid item xs={3}>
            <TextField
              id="search"
              type="search"
              label="Search"
              value={searchTerm}
              onChange={handleChange}
              sx={{ width: '100%', mb: 4 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Card sx={{ p: 5, mb: 4 }}>
              <Typography variant='h3' sx={{}} gutterBottom>
                Recent Posts
              </Typography>
              <Link href='/'>gujdfuh  j rthjto jortiyoi</Link>
            </Card>
            <SideCard data={sideList4} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
IndividualBlogPage.propTypes = {
  post: PropTypes.object,
};
