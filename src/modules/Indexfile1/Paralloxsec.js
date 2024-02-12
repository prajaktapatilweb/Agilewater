import { AppCard } from '@crema'
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SendIcon from '@mui/icons-material/Send';


export default function Paralloxsec() {
    var Coursenm = [

        {


            coursename: 'Search Experienced Jobs',
            links: ''
        },
        {
            coursename: 'Search Grad & Student Jobs',
            links: ''
        },

    ]
    return (
        <div>
            <Grid className='section  section-shaped' sx={{ borderBottom: '5px white solid' }} alignItems='center' justifyContent='center' textAlign='center'>
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
                {/* <section className="events3"> */}
                {/* <section className='section' style={{ backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7),rgba(255,255,255,0.7)" }}> */}
                {/* <section className='section' style={{ backgroundImage: "linear-gradient(to right,rgb(60,58,203,0.9),rgb(60,58,203,0.9),rgb(46,209,171,0.9)" }}> */}
                <Container sx={{ position: 'relative', zIndex: 1, py: 2 }}>
                    <Grid container spacing={3} alignItems='center' sx={{ textAlign: 'center' }}>
                        {/* {Coursenm.map((item, i) => ( */}
                        <Grid item xs={12} md={12}>
                            <Typography sx={{ color: 'white', fontSize: 30, fontWeight: 500 }} gutterBottom>Get hired for your dream job!</Typography>

                            <Typography variant='h3' sx={{ color: 'white', mb: 7 }}>Join a truly global team, united by a singular passion for science.</Typography>

                            {/* <Box className="cardx"> */}
                            <Button className='cardx' variant='h1' sx={{ fontSize: 18, fontWeight: 500, color: 'white', padding: '15px 25px 15px 25px' }} endIcon={< KeyboardDoubleArrowRightIcon />}>
                                Search Experienced Jobs
                            </Button>

                            {/* </Box> */}

                        </Grid>



                        {/* ))} */}
                    </Grid>
                </Container>
            </Grid>
            {/* </section> */}
            {/* </section> */}
        </div>
    )
}
