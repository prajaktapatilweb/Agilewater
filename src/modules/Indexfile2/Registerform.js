import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { data } from 'modules/Constant/feature.data';
import SlideBasicThree1 from 'modules/commanmodules/SlideBasicThree1';
import { usersPhotoList } from 'modules/Constant/Photoslider';
import Heading1 from 'modules/commanmodules/Heading1';
import { headList11 } from 'modules/Constant/titlefile';

export default function Registerform() {
    return (
        <div>
            <Grid className='section section-lg' sx={{ background: 'white' }}>
                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={3} alignItems='center'>
                        <Grid item xs={12} md={5} order={{ xs: 1, sm: 1, md: 0 }}>
                            <Box sx={{ position: 'relative' }}>
                                <SlideBasicThree1 data={usersPhotoList} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7} order={{ xs: 0, sm: 0, md: 1 }}>
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.2,
                                    y: { type: 'spring', stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: 'easeIn',
                                    duration: 1,
                                }}
                            >
                                <Heading1 data={headList11}></Heading1>

                                <Typography
                                    sx={{
                                        color: 'grey',
                                        mb: 5,
                                        ml: { xs: 0, md: 7 },
                                        textAlign: 'justify',
                                    }}
                                >
                                    Set the way of learning according to your wishes with some of
                                    the benefits that you get us, so you on enjoy the lessons that
                                    we provide. Set the way of learning according to your wishes
                                    with some of the benefits that you get us, so you on enjoy the
                                    lessons that we provide.
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y1: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.6,
                                    y: { type: 'spring', stiffness: 60 },
                                    opacity: { duration: 0.6 },
                                    ease: 'easeIn',
                                    duration: 1,
                                }}
                            >
                                <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
                                    {data.map(({ title, description, icon }, index) => (
                                        <Grid key={String(index)} item xs={12} md={6}>
                                            <Box
                                                sx={{
                                                    px: 2,
                                                    py: 4,
                                                    mr: 2,
                                                    boxShadow: '0 14px 43px rgba(33, 54, 61, 0.15)',
                                                    borderRadius: 4,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    background: 'white',
                                                    mx: { xs: 7, md: 2 },
                                                    mb: { xs: 3, md: 1, lg: 2 },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        mr: 3,
                                                        backgroundImage:
                                                            'linear-gradient(to right,	rgba(62,43,206,0.8) 30%, rgba(45,211,170,0.7) 100%, rgba(45,211,170,0.5) 100%, rgba(45,211,170,0.8) 100%)',
                                                        borderRadius: '50%',

                                                        height: 36,
                                                        width: 36,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'primary.contrastText',
                                                        '& svg': {
                                                            fontSize: 20,
                                                        },
                                                    }}
                                                >
                                                    {icon}
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flex: 1,
                                                        flexDirection: 'column',
                                                    }}
                                                >
                                                    <Typography
                                                        variant='h1'
                                                        fontSize={{ md: 16, lg: 18, xl: 18 }}
                                                        sx={{
                                                            fontWeight: 500,
                                                            color: '#20509e',
                                                            mb: 1,
                                                        }}
                                                    >
                                                        {title}
                                                    </Typography>
                                                    <Typography
                                                        sx={{ lineHeight: 1.3, color: 'grey' }}
                                                        variant='body1'
                                                    >
                                                        {description}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </div>
    );
}
