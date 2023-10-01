import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import {safeadvList} from 'modules/Constant/Relatecoursedata';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import Image from 'next/image';
import {useRouter} from 'next/router';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Discussion from 'modules/Discussion';

export default function DetailBlogPage() {
  const Router = useRouter();
  return (
    <div>
      <Grid
        className='section section-lg section-shaped'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        How to Prevent Cyber Attacks
      </Grid>
      <Container sx={{mt: 20}}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography gutterBottom variant='h5' component='div'></Typography>
            <Image
              src='/assets/images/cards/contemplative-reptile.jpg'
              width={100}
              height={100}
              layout='responsive'
            ></Image>

            <Typography gutterBottom variant='p' component='div'>
              jgkfj jrtoyk kytk
            </Typography>

            <Discussion></Discussion>
          </Grid>
          <Grid item xs={4}>
            <RelatedCourses data={safeadvList}></RelatedCourses>
            Form
            <Card>
              <CardContent>
                <Typography variant='h2' sx={{mb: 3}} gutterBottom>
                  {' '}
                  Write Blog For Us
                </Typography>
                <Button
                  size='medium'
                  variant='contained'
                  onClick={() => Router.push('/write-blog')}
                >
                  Start Writing
                </Button>
              </CardContent>
            </Card>
            <br></br>
            <Card>
              <CardContent>
                <Typography variant='h2' sx={{mb: 3}} gutterBottom>
                  {' '}
                  PLEASE FOLLOW & LIKE US :)
                </Typography>

                <IconButton>
                  {' '}
                  <a
                    href='https://www.facebook.com/AgileWatersConsulting/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FacebookIcon sx={{color: '#1b4e9b'}} />{' '}
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href='https://twitter.com/AgilewatersCo'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <TwitterIcon sx={{color: '#00aeef'}}></TwitterIcon>
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href='https://www.instagram.com/agilewatersconsulting/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <InstagramIcon sx={{color: '#f26f37'}}></InstagramIcon>
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href='https://www.linkedin.com/company/agilewaters-consulting/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LinkedInIcon sx={{color: '#0277bd'}}> </LinkedInIcon>
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href='https://www.youtube.com/channel/UCaHUj0eP9LiEK5zL7QrNbNw'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <YouTubeIcon sx={{color: '#d50000'}}></YouTubeIcon>
                  </a>
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
