import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function Paralloxsec() {

    return (
        <div>
            <section
                style={{
                    backgroundImage:
                        'linear-gradient(to right,rgb(60,58,203,0.9),rgb(60,58,203,0.8),rgb(46,209,171,0.9)',
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
                        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
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

                            <Button
                                variant='h1'
                                /*glassmorph effect  start*/
                                sx={{
                                    fontSize: 18, border: '1px solid rgba(255, 255, 255, 0.55)',
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.55)',

                                    backdropFilter: 'blur(15px)',
                                    my: 5,
                                    color: 'white'
                                }}
                                endIcon={<KeyboardDoubleArrowRightIcon />}
                            >
                                Search Experienced Jobs
                            </Button>

                        </Grid>

                        {/* <Grid item xs={12} md={5}>
                                <Box className='cardx'>
                                    <Button
                                        variant='h1'
                                        sx={{ fontSize: 18 }}
                                        endIcon={<KeyboardDoubleArrowRightIcon />}
                                    >
                                        Search Experienced Jobs
                                    </Button>
                                </Box>
                            </Grid> */}
                    </Grid>
                </Container>
            </section>
        </div>
    );
}
