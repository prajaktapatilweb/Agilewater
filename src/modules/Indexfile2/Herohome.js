import { Grid, Container, Box, Typography, Button } from '@mui/material'
import Maplocation from 'modules/Maplocation'
import Image from 'next/image'
import React from 'react'
import Countup from './Countup'
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

                    <Grid container spacing={0} alignItems='center' justifyContent='center'>
                        <Grid item xs={12} sm={12} md={5} lg={5} sx={{ mt: { xs: 20, sm: 20, md: 20, lg: 0 } }}>
                            <Box>
                                <Typography
                                    variant='h2'
                                    sx={{
                                        // width: { md: 850 },
                                        position: 'relative',
                                        // fontSize: { xs: 30, md: 40, lg: 40 },
                                        mb: { xs: 2, sm: 0 },
                                        letterSpacing: 1.5,
                                        fontWeight: 'bold',
                                        color: 'white',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    Global Training, Certification & Recruitment Expert

                                </Typography>
                            </Box>

                            <Box sx={{ mb: 4, width: { xs: '100%', md: '80%' } }}>
                                <Typography variant='p' sx={{ color: 'white', lineHeight: 1.6, fontSize: 18 }} >
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
                                    // my: { xs: 1, sm: 1, md: 0 },

                                    fontSize: 17,
                                    backgroundColor: '#fff',
                                    // p: 4,
                                    fontWeight: 'bold',

                                    boxShadow:
                                        'rgba(0, 0, 0, 0.17) 0px -13px 15px 0px inset, rgba(0, 0, 0, 0.5) 0px -6px 3px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',

                                    color: '#3e2ecd',
                                }}
                            >
                                In Demand Course
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={7} lg={7} sx={{ mt: { xs: -10, sm: -10, lg: -20 }, mb: -15 }}>
                            <Maplocation></Maplocation>
                            {/* <Image src="/assets/images/test6.png" width={100} height={100} quality={97} layout='responsive' objectFit='contain' alt="Feature img" /> */}
                        </Grid>

                    </Grid>
                </Container>
            </Grid>
        </div>
    )
}
