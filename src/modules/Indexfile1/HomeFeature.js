import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { data } from 'modules/Constant/feature.data';
import ExpertForm from 'modules/Forms/ExpertForm';
import Heading from 'modules/commanmodules/Heading';
import { headList1, headList11, headList2 } from 'modules/Constant/titlefile';
import { motion } from 'framer-motion';
import { Fonts } from 'shared/constants/AppEnums';
import SlideBasicArrow from 'modules/commanmodules/SlideBasicArrow';
import { usersPhotoList } from 'modules/Constant/Photoslider';
import SlideBasicThree1 from 'modules/commanmodules/SlideBasicThree1';
import Heading1 from 'modules/commanmodules/Heading1';



const HomeFeature = () => {
  return (
    <Box>
      <Container sx={{ position: 'relative', zIndex: 1 }}>

        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={12} md={5} order={{ xs: 1, sm: 1, md: 0 }}>
            <Box sx={{ position: 'relative' }}>

              <motion.div

                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}

                transition={{
                  delay: 0.2,
                  x: { type: 'spring', stiffness: 60 },
                  opacity: { duration: 0.6 },
                  ease: "easeIn",
                  duration: 1
                }}
              >



                <SlideBasicThree1 data={usersPhotoList} />


                {/* <Image src="/assets/images/worldmap3.jpg" width={600} height={600} quality={97} layout='responsive' alt="Feature img" /> */}

              </motion.div>


            </Box>
          </Grid>
          <Grid item xs={12} md={7} order={{ xs: 0, sm: 0, md: 1 }} mx={{ xs: 4, sm: 3, md: 0 }}>
            {/* <Heading data={headList1}></Heading> */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}

              transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1
              }}
            >
              <Heading1 data={headList11}></Heading1>



              <Typography sx={{ color: 'grey', mb: 5, ml: { xs: 0, md: 7 }, textAlign: 'justify' }}>
                Set the way of learning according to your wishes with some of the benefits that you get us, so you on
                enjoy the lessons that we provide. Set the way of learning according to your wishes with some of the benefits that you get us, so you on
                enjoy the lessons that we provide.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                x: { type: 'spring', stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1
              }}
            >
              <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>

                {data.map(({ title, description, icon }, index) => (<Grid key={String(index)} item xs={12} md={6}>
                  <Box sx={{ px: 2, py: 4, mr: 2, boxShadow: '0 14px 43px rgba(33, 54, 61, 0.15)', borderRadius: 4, display: 'flex', alignItems: 'center', background: 'white', mx: { xs: 7, md: 2 }, mb: { xs: 3, md: 1, lg: 2 } }}>
                    <Box sx={{
                      mr: 3,
                      backgroundImage:
                        'linear-gradient(to right,	rgba(62,43,206,0.8) 30%, rgba(45,211,170,0.7) 100%, rgba(45,211,170,0.5) 100%, rgba(45,211,170,0.8) 100%)',

                      // backgroundColor: '#2dd2ab',
                      borderRadius: '50%',

                      height: 36,
                      width: 36,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.contrastText',
                      '& svg': {
                        fontSize: 20,
                      },
                    }}>
                      {icon}
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                      <Typography variant="h1" fontSize={{ md: 16, lg: 18, xl: 18 }}
                        sx={{
                          fontWeight: 500,
                          color: '#20509e',
                          mb: 1,

                        }}>
                        {/* hkhhl */}
                        {title}
                      </Typography>
                      <Typography sx={{ lineHeight: 1.3, color: 'grey' }} variant="body1">
                        {/* holgfkhfok */}
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>))}

              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container >
    </Box >);
};
export default HomeFeature;
