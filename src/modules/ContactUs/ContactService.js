import { AppCard } from '@crema';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Fonts } from 'shared/constants/AppEnums';

export default function ContactService() {
    var Details = [
        {
            image: '/assets/images/safe/ICP-ACC.webp',
            title: 'Coaching',
            para: 'Our trainers are chosen for their engaging manner and expertise in a chosen field. They bring a wealth of experience to each programme they deliver.',
        },
        {
            image: '/assets/images/safe/ICP-ACC.webp',
            title: 'Recruitment',
            para: 'Talent Acquisition Unlike others we select talent based on our proven profiling algorithms to give you best Skills with right Attitude to win & help organization excel.',
        },
        {
            image: '/assets/images/safe/ICP-ACC.webp',
            title: 'Training',
            para: 'We train organization and people on Scrum, Agile, enterprise agility, business agility, technical agility and DevOps.',
        },
    ];
    return (
        <div>
            <Grid container spacing={2} className='section'>
                <Grid item xs={12} md={3}>
                    fghkgf kgpohk
                </Grid>
                {Details.map((item, i) => (
                    <Grid item xs={12} md={3} >
                        <AppCard key={i}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 1,
                            }}
                            >
                                <Box sx={{ mb: 2 }}>
                                    <Image src={item.image} width={130} height={130}></Image>
                                </Box>
                                <Box component='h2'
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
