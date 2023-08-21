import { AppCard } from '@crema';
import { Box, Button, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Fonts } from 'shared/constants/AppEnums';

export default function ContactService() {
    var Details = [
        {
            image: '/assets/images/cards/coach3.png',
            title: 'Coaching',
            para: 'Our trainers are chosen for their engaging manner and expertise in a chosen field. They bring a wealth of experience to each programme they deliver.',
        },
        {
            image: '/assets/images/cards/trainer.png',
            title: 'Recruitment',
            para: 'Talent Acquisition Unlike others we select talent based on our proven profiling algorithms to give you best Skills with right Attitude to win & help organization excel.',
        },
        {
            image: '/assets/images/cards/recruit.png',
            title: 'Training',
            para: 'We train organization and people on Scrum, Agile, enterprise agility, business agility, technical agility and DevOps.',
        },
    ];
    return (
        <div>
            <Grid container spacing={3} className='section' alignItems='center'>
                <Grid item xs={12} md={3}>
                    <AppCard sxStyle={{ background: '#0a8fdc' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Box
                                component='h2'
                                sx={{
                                    mb: 2,
                                    fontWeight: Fonts.BOLD,
                                    color: 'white',
                                    textAlign: 'center',
                                }}
                            >
                                Our Services
                            </Box>
                            <Box
                                component='p'
                                sx={{
                                    mb: 3,
                                    fontSize: 14,
                                    textAlign: 'justify',
                                    color: 'white',
                                }}
                            >
                                AgileWaters Consulting is a leading consulting, coaching,
                                training(among top10) organisation in the Software and IT
                                industry.Founded by Vijay Wade in the year of 2011, AgileWaters
                                ever-since has been helping professionals get the desired
                                Knowledge & certification to make a successful outreach with the
                                desired set of skills that enables the aspirant to work
                                effectively with 90% of the modern team workflow process.
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <Button variant='contained'>Learn More </Button>
                            </Box>
                        </Box>
                    </AppCard>
                </Grid>
                {Details.map((item, i) => (
                    <Grid item xs={12} md={3} alignItems='stretch'>
                        <AppCard key={i} sxStyle={{ py: 5 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 1,
                                }}
                            >
                                <Box sx={{ mb: 2 }}>
                                    <Image src={item.image} width={100} height={80}></Image>
                                </Box>
                                <Box
                                    component='h2'
                                    sx={{
                                        mb: 2,
                                        fontWeight: Fonts.BOLD,
                                        color: 'black',
                                    }}
                                >
                                    {item.title}
                                </Box>
                                <Box
                                    component='p'
                                    sx={{
                                        mb: 3,
                                        fontSize: 14,
                                        textAlign: 'center',
                                        color: 'black',
                                    }}
                                >
                                    {item.para}
                                </Box>
                            </Box>
                        </AppCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
