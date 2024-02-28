import { Grid, Container, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function Herohome() {
    return (
        <div>
            <Grid className='section-shaped'>
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
                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }} alignItems='center'
                        justifyContent='center'>
                        <Box sx={{ width: { xs: '100%', sm: '100%', md: '40%' }, mt: { xs: 20, sm: 20, md: 20, lg: 0 } }}>
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
                                    backgroundColor: '#fff',
                                    fontWeight: 'bold',
                                    boxShadow: 'rgba(0, 0, 0, 0.17) 0px -13px 15px 0px inset, rgba(0, 0, 0, 0.5) 0px -6px 3px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                                    color: '#3e2ecd',
                                }}
                            >
                                In Demand Course ss
                            </Button>
                        </Box>

                        <Box className='world-map' sx={{ width: { xs: '100%', sm: '100%', md: '60%' } }}>
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
                            {/* <img src="assets/images/test8.png" alt=''></img> */}
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
                    </Box>



                </Container>
            </Grid>
        </div>
    );
}
