import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Grid, Box, Container } from '@mui/material';
import { headList31 } from 'modules/Constant/titlefile';
import { motion } from 'framer-motion';
import Heading1 from 'modules/commanmodules/Heading1';

export default function CoachCoursecard() {
    var DetailObject = [
        {
            img: "/assets/images/cards/maincoach1.webp",
            title: 'Agile Coaching',
            para: <span>It's Time For You To Manage It As A CEO Career coaching with us is not just providing you with a fresh job. Its about bringing light to what you require in a job to be truthfully joyful and come up with ....</span>
        },
        {
            img: "/assets/images/cards/maincoach6.webp",
            title: 'Scrum Master Coaching',
            para: <span>It's Time For You To Manage It As A CEO Career coaching with us is not just . Its about bringing light to what you require in a job to be truthfully joyful and come up with ....</span>
        },
        {
            img: "/assets/images/cards/maincoach3.webp",
            title: 'Life Coaching',
            para: <span>It's Time For You To Manage It As A CEO Career coaching with us is not just providing you with a fresh job. Its about bringing light to what you require in a job to be truthfully joyful and come up with ....</span>
        },

        {
            img: "/assets/images/cards/maincoach2.webp",
            title: 'Career Coaching',
            para: <span>It's Time For You To Manage It As A CEO Career coaching with us is not just providing you with a fresh job. Its about bringing light to what you require in a job to be truthfully joyful and come up with ....</span>
        }
    ]
    return (

        <Box className='section'>
            <Container>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.2,
                        x: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: 'easeIn',
                        duration: 1,
                    }}
                >
                    <Grid item xs={12} sx={{ p: 3, textAlign: 'center' }}>
                        <Heading1 data={headList31}></Heading1>
                    </Grid>
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.6,
                        x: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 0.6 },
                        ease: 'easeIn',
                        duration: 1,
                    }}
                >
                    <Grid container spacing={3} sx={{ mb: 7 }}>
                        {DetailObject.map((item, i) => (
                            <Grid item xs={12} sm={6} md={3} lg={3} key={i}>
                                <Card
                                    sx={{
                                        height: 'auto',
                                        flexShrink: 0,
                                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                        mx: { xs: 5, sm: 0 },
                                    }}
                                >
                                    <Box sx={{ height: 'auto', flexShrink: 0 }}>
                                        <Image
                                            src={item.img}
                                            width={100}
                                            height={70}
                                            layout='responsive'
                                            alt='coaching course'
                                        ></Image>
                                    </Box>
                                    <Box sx={{ p: 5 }}>
                                        <Typography
                                            gutterBottom
                                            variant='h2'
                                            className='paras'
                                            sx={{ textAlign: 'center' }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            sx={{ textAlign: 'justify', color: 'black' }}
                                        >
                                            {item.para}
                                        </Typography>

                                        <Button size='large' sx={{ color: '#20509e' }}>
                                            Learn More
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>

    );
}