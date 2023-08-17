import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function AgileWorkshopinfo() {
    return (
        <div>
            <Grid className='section section-lg section-shaped' sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
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
                <Container sx={{ maxWidth: { xl: 1400 } }}>
                    <Grid container spacing={0} sx={{ position: 'relative', zIndex: 1 }} alignItems="center">
                        <Grid item xs={12} sm={12} md={8}>
                            <Box>
                                <Image
                                    alt='Safelogo'
                                    src='/assets/images/courselogo/Free-Session.png'
                                    height={400}
                                    width={850}
                                >
                                </Image>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Box sx={{ p: 3 }}>
                                <Typography variant='h1' sx={{ color: 'white' }} gutterBottom>
                                    An Inside-Out Approach<br></br>
                                    <Link href="#" sx={{ color: 'yellow', textDecoration: 'none' }}> BY Manjunatha Rao</Link></Typography>
                                <Typography variant='h2' sx={{ color: 'wheat' }} gutterBottom>11-Aug-2023, Friday</Typography>
                                <Typography variant='h2' sx={{ color: 'white' }} gutterBottom>In this one-hour webinar,Key Takeaways:</Typography>
                                <Typography variant='h3' sx={{ color: 'wheat', textAlign: 'left', ml: 5 }} gutterBottom>
                                    1. What is Career Agility and Why its the need of the hour<br></br>
                                    2. Essential elements<br></br>
                                    3. Inside out approach<br></br>
                                    4. 5-dimensional career assessment<br></br>
                                    5. A blend of Psychology and Technology<br></br>
                                    6. Next Steps
                                </Typography>

                                <br></br><Button variant='contained'>Register</Button>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>

            </Grid>
        </div>
    )
}
