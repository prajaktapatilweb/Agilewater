import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Card, Container, Typography } from '@mui/material';
import CountUp from 'react-countup';

export default function Countup() {
    var Details = [
        {
            numbers: '10600',
            title: 'Students',
        },
        {
            numbers: '18',
            title: 'Trainers',
        },

        {
            numbers: '26',
            title: 'Countries',
        },
        {
            numbers: '400',
            title: 'Workshops',
        },
        {
            numbers: '11',
            title: 'Agile Coaches',
        },
        {
            numbers: '4.7',
            title: 'Ratings',
        },
    ];

    return (
        <div>
            <Box className='section' sx={{ mt: -20 }}>
                <Container>
                    {/* <Card sx={{
                        px: 6, py: 8, marginTop: -15, zIndex: 1, position: 'relative', borderRadius: 2, boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                    }}> */}
                    <Grid container spacing={2}>
                        {Details.map((item, i) => (
                            <Grid item xs={6} sm={4} md={2} key={i}>
                                <Card
                                    sx={{
                                        textAlign: 'center',
                                        px: 2,
                                        py: 5,
                                        zIndex: 1,
                                        position: 'relative',
                                        // mb: { xs: 1, md: 0 },
                                        // padding: 3,
                                        borderRadius: 5,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'white',
                                        border: '2px solid lightgrey',
                                    }}
                                >
                                    <CountUp
                                        end={item.numbers}
                                        duration={5}
                                        start={200}
                                        className='paras'
                                    />{' '}
                                    <span className='paras'>+</span>
                                    <Typography variant='h5' className='paras'>
                                        {item.title}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {/* </Card> */}
                </Container>
            </Box>
        </div>
    );
}
