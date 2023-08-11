import React from 'react';
import Grid from '@mui/material/Grid';
import { AppBar, Box, Card, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { Fonts } from 'shared/constants/AppEnums';
import PropTypes from 'prop-types';

export default function MainHero() {
    return (
        <div>
            {/* <Grid className="section section-lg section-shaped " style={{ backgroundImage: "linear-gradient(90deg, #05445e 35%, #189ab4 90%)", position: "relative" }}> */}
            <Grid className='section section-lg section-shaped' sx={{ borderBottom: '5px white solid' }}>
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
                </div>
                <Container sx={{ maxWidth: { xl: 1400 }, textAlign: 'center' }}>
                    <Box
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
                    </Box>

                    <Grid
                        container
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                        spacing={7}
                        sx={{ position: 'relative', zIndex: 1 }}
                    // mt={{ xs: 5, md: 0 }}
                    >
                        <Grid item xs={12} sm={6} md={9}>
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
                        <Grid item xs={12} sm={6} md={3}>
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
                        </Grid>
                    </Grid>
                </Container>
                {/* SVG separator */}
                {/* <div className="separator separator-bottom separator-skew zindex-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                    </svg>
                </div> */}
            </Grid>
        </div>
    );
}

MainHero.propTypes = {
    image1: PropTypes.string,
    heading: PropTypes.string,
    list1: PropTypes.array,
};
