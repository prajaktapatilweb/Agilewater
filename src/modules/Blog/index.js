import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid, InputAdornment, TextField } from '@mui/material';
import { PortableText } from '@portabletext/react';
import PropTypes from 'prop-types';
import { urlForImage } from 'lib/image';
import Link from 'next/link';
import SideCard from 'modules/SM/ScrumMasterCert/SideCard';
import { sideList4 } from 'modules/Constant/OtherCardsConst';
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Blog({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log('BLogs', posts);
  return (
    <>
      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ md: 3 }}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={{ md: 3 }}>
              {posts.map((post) => (
                <Link href={`/blog/${post.slug.current}`} key={post._id}>
                  <Grid item xs={4}
                  // sx={{border: '1px solid red'}}
                  >
                    <Card
                      // sx={{ maxWidth: 345 }} 
                      key={post._id}>
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
                        <Button size='small'>Read More</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Link>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
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
    </>
  );
}

Blog.propTypes = {
  posts: PropTypes.object.isRequired,
};
