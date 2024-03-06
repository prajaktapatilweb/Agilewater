import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function Paralloxsec() {
    var Coursenm = [
        {
            coursename: 'Search Experienced Jobs',
            links: '',
        },
        {
            coursename: 'Search Grad & Student Jobs',
            links: '',
        },
    ];
    return (
        <div>
            <section className='events3'>
                {/* <section className='section' style={{ backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7),rgba(255,255,255,0.7)" }}> */}
                <section
                    className='section'
                    style={{
                        backgroundImage:
                            'linear-gradient(to right,rgb(60,58,203,0.9),rgb(60,58,203,0.9),rgb(46,209,171,0.9)',
                    }}
                >
                    <Container>
                        <Grid
                            container
                            spacing={3}
                            className='section'
                            alignItems='center'
                            sx={{ textAlign: 'center' }}
                        >
                            {/* {Coursenm.map((item, i) => ( */}
                            <Grid item xs={12} md={7} sx={{ textAlign: 'left' }}>
                                <Typography
                                    sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}
                                    gutterBottom
                                >
                                    Get hired for your dream job!
                                </Typography>

                                <Typography variant='h3' sx={{ color: 'white' }}>
                                    Join a truly global team, united by a singular passion for
                                    science.
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={5}>
                                <Box className='cardx'>
                                    <Button
                                        variant='h1'
                                        sx={{ fontSize: 18 }}
                                        endIcon={<KeyboardDoubleArrowRightIcon />}
                                    >
                                        Search Experienced Jobs
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </section>
        </div>
    );
}
