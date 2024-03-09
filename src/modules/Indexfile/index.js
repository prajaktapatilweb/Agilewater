import React from 'react';
import Countup from './Countup';
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import Hero from './Hero';
import Changingtabs from 'modules/commanmodules/Changingtabs';
import CoachCoursecard from './CoachCoursecard';
import MainHero from 'modules/commanmodules/MainHero';
import { AppCard } from '@crema';
import LabTabs from 'modules/commanmodules/LabTabs';
import CertScruminfo from 'modules/SM/CertScrumMaster/CertScruminfo';
import CertScrumaccord from 'modules/SM/CertScrumMaster/CertScrumaccord';
import Heading from 'modules/commanmodules/Heading';
import { headList7 } from 'modules/Constant/titlefile';
import Registerform from './Registerform';
import Testimonial from './Testimonial';
import Clients from 'modules/ContactUs/Clients';
import Certcourse from './Certcourse';
import Indexclient from './Indexclient';
import VideoCall from 'modules/commanmodules/VideoCall';
import Image from 'next/image';
import HomeFeature from './HomeFeature';
import SlideBasicThree from 'modules/commanmodules/SlideBasicThree';
import { heroPhotoList, usersPhotoList } from 'modules/Constant/Photoslider';
import Paralloxsec from './Paralloxsec';

export default function indexfile() {
  return (
    <div>
      <Grid>
        {/* <SlideBasicThree data={heroPhotoList}></SlideBasicThree> */}
      </Grid>
      {/* <Box className='events1' alignItems='center' justifyContent='center'>
        {/* <section className='section' style={{ backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7),rgba(255,255,255,0.7)" }}> *
       
      </Box> */}
      <Box className='events1' alignItems='center' justifyContent='center' sx={{ p: 40 }}>

        <Container>
          <Grid container>
            <Grid item xs={12} md={12} lg={6} sx={{ pb: { xs: 3, md: 5, lg: 0, }, }}>
              <Box>
                <Typography
                  component="h2"
                  sx={{
                    // width: { md: 850 },
                    position: 'relative',
                    fontSize: { xs: 35, md: 40, lg: 40 },
                    mb: { xs: 3, sm: 0 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    color: 'black',
                    lineHeight: 1.5,
                  }}
                >
                  Global Training, Certification & Recruitment Expert

                </Typography>
              </Box>

              <Box sx={{ mb: 4, width: { xs: '100%', md: '80%' } }}>
                <Typography variant='p' sx={{ color: 'black', lineHeight: 1.6, fontSize: 18 }} >
                  {
                    'Helps you from Learning to earning (Value generation)'
                  }
                </Typography>
              </Box>


              <Button
                color='primary'
                size='large'
                variant='contained'
                sx={{
                  my: { xs: 5, sm: 3, md: 0 },

                  fontSize: 17,
                  backgroundColor: '#fff',
                  p: 4,
                  fontWeight: 'bold',

                  boxShadow:
                    'rgba(0, 0, 0, 0.17) 0px -13px 15px 0px inset, rgba(0, 0, 0, 0.5) 0px -6px 3px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',

                  color: '#3e2ecd',
                }}
              >
                In Demand Course
              </Button>
            </Grid>
            <Grid item xs={12} md={12} lg={6} sx={{ pb: { xs: 3, md: 5, lg: 0, }, }}>
            </Grid>
          </Grid>
        </Container>
        {/* <section
          className='section'
          style={{

            // backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backgroundImage: "linear-gradient(to right,	rgba(62,43,206,0.8) 30%, rgba(45,211,170,0.8) 100%, rgba(45,211,170,0.8) 100%, rgba(45,211,170,0.8) 100%)"
            // backgroundImage: 'linear-gradient(to right, rgba(61,51,204,0.6), rgba(154,219,206,0.6)',
          }}
        > */}
        {/* <MainHero /> */}
        {/* </section> */}


      </Box>
      <Countup />
      <Certcourse></Certcourse>


      <Registerform></Registerform>
      <Container>
        {/* <Changingtabs /> */}


        <CoachCoursecard />



      </Container>

      {/* <HomeFeature></HomeFeature> */}
      <Testimonial></Testimonial>
      {/* <VideoCall></VideoCall> */}

      <Paralloxsec></Paralloxsec>
      <Indexclient></Indexclient>



      {/* <Hero /> */}

      {/* <Grid
                        container
                        spacing={0}
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={5}
                            lg={5}
                            sx={{ mt: { xs: 20, sm: 20, md: 20, lg: 0 } }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        // width: { md: 850 },
                                        position: 'relative',
                                        // fontSize: { xs: 30, md: 40, lg: 40 },
                                        mb: { xs: 2, sm: 0 },
                                        letterSpacing: 1.5,

                                        color: 'white',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    <span className='h8'>
                                        Global Training, Certification & Recruitment Expert
                                    </span>
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 5, width: { xs: '100%', md: '80%' } }}>
                                <Typography
                                    variant='p'
                                    sx={{ color: 'white', lineHeight: 1.6, fontSize: 18 }}
                                >
                                    {'Helps you from Learning to earning (Value generation)'}
                                </Typography>
                            </Box>

                            <Button
                                color='primary'
                                size='large'
                                variant='contained'
                                sx={{
                                    // my: { xs: 1, sm: 1, md: 0 },

                                    // fontSize: 17,
                                    backgroundColor: '#fff',
                                    // p: 4,
                                    fontWeight: 'bold',
                                    boxShadow: 'rgba(0, 0, 0, 0.17) 0px -13px 15px 0px inset, rgba(0, 0, 0, 0.5) 0px -6px 3px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                                    color: '#3e2ecd',
                                }}
                            >
                                In Demand Course
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={7} lg={7}>
                            <Box className='world-map'>
                                <Image
                                    src='/assets/images/test6-min.webp'
                                    width={100}
                                    height={100}
                                    objectFit='contain'
                                    sizes="100vw"
                                    loading='eager'
                                    priority
                                    alt='worldmap'
                                ></Image>
                                {/* <img src="assets/images/test8.png" alt=''></img> *
                                <Box className='pin usa'>
                                    <span>
                                        San Francisco<br></br>
                                        California -USA
                                    </span>
                                </Box>
                                <Box className='pin abc'>
                                    <span></span>
                                </Box>
                                <Box className='pin france'>
                                    <span></span>
                                </Box>
                                <Box className='pin sweden'>
                                    <span></span>
                                </Box>
                                <Box className='pin pqr'>
                                    <span></span>
                                </Box>
                                <Box className='pin india'>
                                    <span>
                                        Pune <br></br> India
                                    </span>
                                </Box>
                                <Box className='pin south-africa'>
                                    <span></span>
                                </Box>
                                <Box className='pin australia'>
                                    <span></span>
                                </Box>
                            </Box>

                            {/* <Image src="/assets/images/test6.png" width={100} height={100} quality={97} layout='responsive' objectFit='contain' alt="Feature img" /> *
                        </Grid>
                    </Grid> */}


    </div >
  );
}
