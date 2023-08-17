import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import Image from 'next/image';
import { Fonts } from 'shared/constants/AppEnums';
import PropTypes from 'prop-types';

export default function APGIinfo() {
    return (
        <div>
            {/* <Grid className="section section-lg section-shaped " style={{ backgroundImage: "linear-gradient(90deg, #05445e 35%, #189ab4 90%)", position: "relative" }}> */}
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
                                    src='/assets/images/courselogo/APGI.webp'
                                    height={400}
                                    width={850}
                                >
                                </Image>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Box sx={{ p: 3 }}>
                                <Typography variant='h1' sx={{ color: 'white' }} gutterBottom> For more details visit <Link href="https://www.apgionline.com/" sx={{ color: 'yellow', textDecoration: 'none' }}> here</Link></Typography>
                                <Typography variant='h2' sx={{ color: 'wheat' }} gutterBottom>A Conference for the People, by the People</Typography>
                                <Typography variant='h2' sx={{ color: 'white' }} gutterBottom>#APGI2023 Conference</Typography>
                                <Typography variant='h3' sx={{ color: 'wheat' }} gutterBottom>31st Mar - 1st Apr 2023 |Hotel Sheraton Grand, Bund Garden, Pune.</Typography>
                                <Typography variant='h3' sx={{ color: 'white' }} gutterBottom>Humankind, Machine, and Marvellous Agile</Typography>
                                <br></br><Button variant='contained'>Register</Button>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>

            </Grid>
        </div>
    );
}

APGIinfo.propTypes = {
    image1: PropTypes.string,
    heading: PropTypes.string,
    list1: PropTypes.array,
};
