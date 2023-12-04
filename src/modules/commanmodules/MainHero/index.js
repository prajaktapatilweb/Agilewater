import React from 'react';
import Grid from '@mui/material/Grid';
import { AppBar, Box, Button, Card, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { Fonts } from 'shared/constants/AppEnums';
import PropTypes from 'prop-types';
import { ScrollLink } from 'react-scroll';
import { PlayArrow } from '@mui/icons-material'


export default function MainHero() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

    return (
        <div>
            {/* <Grid className="section section-lg section-shaped " style={{ backgroundImage: "linear-gradient(90deg, #05445e 35%, #189ab4 90%)", position: "relative" }}> */}
            {/* <Grid className='section section-lg section-shaped' sx={{ borderBottom: '5px white solid' }}>
                <div className='shape shape-style-u1 shape-dark'>
                    <span className='span-150' />
                    <span className='span-50' />
                    <span className='span-50' />
                    <span className='span-75' />
                    <span className='span-200' />
                    <span className='span-75' />
                    <span className='span-50' />
                    <span className='span-100' />
                    <span className='span-50' />
                    <span className='span-100' />
                </div> */}
            <Container maxWidth="lg" sx={{ py: 50 }}>
                <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                    <Grid item xs={12} md={12}>
                        <Box>
                            <Typography
                                // component="h2"
                                sx={{
                                    fontSize: { xs: 40, md: 60 },
                                    mb: { xs: 3, sm: 3, lg: 5 },

                                    letterSpacing: 1.5,
                                    fontWeight: '900',
                                    color: 'white',
                                    lineHeight: 1.5,
                                }}
                                gutterBottom
                            >

                                Large educational programs
                            </Typography>
                            <Typography variant='h4' sx={{

                                mb: { xs: 3, sm: 3, md: 7 },
                                letterSpacing: 1.5,
                                fontWeight: 'bold',
                                color: 'white',
                                lineHeight: 1.5,
                            }}>
                                Lorem Ipsum is simply dummy text of the printing typesetting industry. <br></br>
                                Lorem Ipsum has been
                                {/* Providing Quality Dental Care Since 2007 */}
                            </Typography>


                            {/* <Button color="primary" size="large" variant="contained" sx={{ mb: { xs: 12, sm: 3, md: 0 }, mr: 4, fontSize: 17, backgroundImage: "linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)", color: 'white' }}> */}

                            <Button color="primary" size="large" variant="contained" sx={{
                                mb: { xs: 12, sm: 3, md: 0 }, mr: 4, fontSize: 17, backgroundColor: '#fff',
                                color: 'black'
                            }}>

                                In Demand Course
                            </Button>


                            <Button color="primary" size="large" variant="contained" sx={{ mb: { xs: 12, sm: 3, md: 0 }, fontSize: 17, backgroundColor: '#fff', color: 'black' }} onClick={() => openInNewTab('https://www.youtube.com/@AgileWatersConsulting')}>
                                {/* ", */}
                                Watch Video
                            </Button>


                        </Box>

                    </Grid>
                </Grid>

                {/* <Typography
                    component='h1'
                    sx={{
                        fontWeight: Fonts.BOLD,
                        color: 'wheat',
                        position: 'relative',
                        zIndex: 1,

                        // fontSize: 16,
                    }}
                    mt={{ xs: 9, md: 0 }}
                    mb={{ xs: 3, md: 5 }}
                >
                    Learn without limits with AgileWaters
                </Typography> */}

                {/* <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={7}
                    sx={{ position: 'relative', zIndex: 1 }}
                // mt={{ xs: 5, md: 0 }}
                >
                    <Grid item xs={12} sm={12} md={12}>
                        <Box>
                            <Typography variant='h3' sx={{ color: 'white', textAlign: 'justify', lineHeight: '1.6', }}>
                                {' '}
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                                specimen book.
                            </Typography>
                        </Box>
                    </Grid>
                    {/* <Grid item xs={12} sm={6} md={3}>
                        <Box
                            px={{ xs: 10, sm: 0, md: 0 }}
                            mx={{ xs: 10, sm: 0, md: 0 }}
                            sx={{
                                border: '2px solid white',
                                borderRadius: '5px',
                                background: 'white',
                            }}
                        >
                            <Image
                                alt='Safelogo'
                                //   src={image1}
                                src='/assets/images/safe/SAFe-Agilist-Logo.png'
                                height={250}
                                width={250}
                            // layout='responsive'
                            />
                        </Box>
                    </Grid> *
                </Grid> */}
            </Container>

        </div >
    );
}

MainHero.propTypes = {
    image1: PropTypes.string,
    heading: PropTypes.string,
    list1: PropTypes.array,
};
