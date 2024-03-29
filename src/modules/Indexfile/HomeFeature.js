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
import { headList1 } from 'modules/Constant/titlefile';
import { motion } from 'framer-motion';
import { Fonts } from 'shared/constants/AppEnums';


const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    ...(order === 1 && {
      backgroundColor: '#f303ff',
    }),
    ...(order === 2 && {
      backgroundColor: '#26e8bd',
    }),
    ...(order === 3 && {
      backgroundColor: '#0063ff',
    }),
  },
}));
const HomeFeature = () => {
  return (
    <Box>
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>

              <motion.div
                // className="box"
                // initial={{ opacity: 0 }}
                // a nimate={{ opacity: 1 }}

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

                <Image src="/assets/images/worldmap3.jpg" width={600} height={600} quality={97} layout='responsive' alt="Feature img" />

              </motion.div>

              {/* <ExpertForm AllowedFieldArray={['Name', 'Email', 'Phone', 'Certification', 'Message']} /> */}
              {/* <Image src="/assets/images/worldmap3.jpg" width={600} height={600} quality={97} layout='responsive' alt="Feature img" /> */}
              {/* <Box sx={{
                position: 'absolute',
                top: -40,
                right: { xs: 0, md: -30 },
                boxShadow: 2,
                borderRadius: 1,
                px: 2.2,
                py: 1.4,
                zIndex: 1,
                backgroundColor: 'background.paper',
                width: 190,
              }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Lorem ipsum dolor
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    UI/UI Design
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={65} order={1} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Mobile Development
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={40} order={2} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Web Development
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={50} order={3} />
                </Box>
              </Box> */}

              {/* <Box sx={{
                position: 'absolute',
                bottom: -50,
                left: { xs: 0, md: -40 },
                boxShadow: 2,
                borderRadius: 1,
                px: 2.2,
                py: 2,
                zIndex: 1,
                backgroundColor: 'background.paper',
                textAlign: 'center',
              }}>
                <Box sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                  <Typography sx={{ fontWeight: 600, lineHeight: 1 }}>Lorem ipsum</Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1, color: 'text.disabled' }}>
                    Lorem ipsum
                  </Typography>
                  <Box sx={{
                    height: 85,
                    width: 85,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}>
                    <Typography variant="h4" sx={{ color: '#32dc88' }}>
                      75%
                    </Typography>
                    <CircularProgress sx={{ position: 'absolute', color: 'divider' }} thickness={2} variant="determinate" value={85} size={85} />
                    <CircularProgress disableShrink thickness={2} variant="determinate" value={75} size={85} sx={{ transform: 'rotate(96deg) !important', color: '#32dc88', position: 'absolute' }} />
                  </Box>
                </Box>
              </Box> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
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

              <Typography component="h2" sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 45 },
                ml: { xs: 0, md: 4 },
                mt: { xs: 15, md: 0 },
                mb: 3,
                px: 3,
                lineHeight: 1.2,
                fontWeight: 'bold',
                color: 'white'
              }} gutterBottom>
                Make your{' '}

                Learning

                Enjoyable
              </Typography>


              <Typography sx={{ color: 'white', mb: 5, ml: { xs: 0, md: 7 }, textAlign: 'justify' }}>
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
                  <Box sx={{ px: 2, py: 4, mr: 2, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center', background: 'white', mx: { xs: 7, md: 2 }, mb: { xs: 3, md: 1, lg: 2 } }}>
                    <Box sx={{
                      mr: 3,
                      backgroundColor: '#2dd2ab',
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
                          fontWeight: Fonts.BOLD,
                          color: 'black',
                          mb: 1, color: '#20509e'
                        }}>
                        {/* hkhhl */}
                        {title}
                      </Typography>
                      <Typography sx={{ lineHeight: 1.3, color: 'black', }} variant="body1">
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
