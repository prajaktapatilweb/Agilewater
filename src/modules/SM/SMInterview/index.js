import React from 'react'
import { Box, Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import HeroCard from './HeroCard'
import AnotherCard from './AnotherCard'
import VideoMain from 'modules/commanmodules/VideoMain'
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider'
import { freecourseList } from 'modules/Constant/FreeCourseConst'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import { safeadvList } from 'modules/Constant/Relatecoursedata'
import Testcard from 'modules/commanmodules/TestCard'
import { testList2 } from 'modules/Constant/OthershortConst'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Fonts } from 'shared/constants/AppEnums'

export default function SMInterview() {
    var list1 = {
        abc: [
            '2 Days of Classroom / Online Training',
            '100% Assured Results',
            'Internationally Acclaimed Trainer',
            'Insightful Study Material',
            'Small Batch Size',
        ]
    }
    return (
        <div>
            <Grid
                className='section section-lg section-shaped'
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <div className='shape shape-style-u1 shape-dark'>
                    <span className='span-150' />
                    <span className='span-50' />
                    <span className='span-50' />
                    <span className='span-75' />
                    <span className='span-200' />
                    <span className='span-75' />
                    <span className='span-50' />

                </div>
                <Container sx={{ maxWidth: { xl: 1400 } }}>
                    <Grid
                        container
                        spacing={1}
                        sx={{ position: 'relative', zIndex: 1 }}
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Grid item xs={12} sm={12} md={8}>
                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >


                                    <Typography
                                        variant='h1'
                                        mx={{ xs: 1, md: 1, lg: 1, xl: 3 }}
                                        fontSize={{ md: 20, lg: 24, xl: 28 }}
                                        sx={{
                                            fontWeight: Fonts.BOLD,
                                            color: 'wheat',
                                        }}
                                    >
                                        Scrum Master Interview Preparation Session
                                    </Typography>
                                </Box>

                                <List sx={{ color: 'white', mt: 3, pl: 3 }}>
                                    {list1.abc.map((item, i) => (
                                        <ListItem key={i} alignItems='flex-start'>
                                            <KeyboardDoubleArrowRightIcon
                                                sx={{ fontSize: 18, mr: 3 }}
                                            ></KeyboardDoubleArrowRightIcon>
                                            <ListItemText
                                                primary={item}
                                                primaryTypographyProps={{ fontSize: '18px', mt: -2 }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Box sx={{ p: { xs: 3, sm: 15, md: 0 } }}>
                                <VideoMain
                                    links="https://www.youtube.com/watch?v=rB9dlx8V480&t=2s"
                                    videoPromo={'sd'}
                                ></VideoMain>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>

            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <HeroCard />
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={12}>
                        <AnotherCard />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Testcard data={testList2} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <RelatedCourses data={safeadvList} />
                    </Grid>
                </Grid>

            </Container>

        </div>
    )
}
