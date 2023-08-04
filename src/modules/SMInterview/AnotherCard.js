import { AppCard } from '@crema'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function AnotherCard() {
    var details = [


        {
            title: 'Builds Confidence',

            info: 'The opportunity to practice with specialists improves your abilities and prepares you for interviews. It gives you more confidence when you go to interviews. We guarantee that you will be prepared and confident for your next interview.',
        },
        {
            title: 'Avoids Surprises',
            info: 'A team of renowned global career coaches created the Interview Preparation Process. As a result, our skilled interviewers have developed standardized methods to follow. Our industry experts advice will help you prepare for any unexpected surprises that may arise during your job interviews. This will assist you in navigating even the most difficult and high-pressure situations, such as interviews.'
        },
        {
            title: 'Reduces Anxiety, Stress, and Fear',
            info: 'Fear, worry, and anxiety are all natural reactions to interviews. These are expressions of your feelings of being unprepared. These feelings are replaced with peace, confidence, and satisfaction as you practice and practice more.'
        },
        {
            title: 'Obtain Your Ideal Job',
            info: 'Practice, Practice, Practice till you have aced your desired job interview. Interview preparation assist you improve your interview abilities. Practicing increases your chances of success by more than 300 percent. Land Prepare for your dream job and get it!'
        }
    ]
    return (
        <div>
            <Box>
                <Typography variant='h1' sx={{ p: 7 }}>Interview Prepration Benefits</Typography>
                <Grid container spacing={2}>
                    {details.map((item, index) => (
                        <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                            <AppCard
                                sxStyle={{ height: 1 }}
                                contentStyle={{ padding: 7, display: 'flex', flexDirection: 'column' }}
                            >
                                <Box
                                    component='h2'
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: 16,
                                        mb: 3
                                    }}>
                                    {item.title}

                                    {/* <IntlMessages id='dashboard.heavySnow' /> */}
                                </Box>
                                <Box
                                    sx={{

                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        textAlign: 'justify'
                                    }}
                                >
                                    {item.info}
                                </Box>
                            </AppCard>
                        </Grid>))}
                </Grid>
            </Box>
        </div>
    )
}
