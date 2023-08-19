import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React from 'react'

export default function Contactusinfo() {
    return (
        <div>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }} spacing={0}>

                <Grid item xs={12} sm={6} md={5} order={2} >

                    <Image
                        alt='Safelogo'
                        src='/assets/images/cards/contactimg.jpg'
                        height={400}
                        width={550}
                        layout='responsive'


                    ></Image>

                </Grid>
                <Grid item xs={12} sm={6} md={7}>
                    <Typography variant='h7' sx={{ fontWeight: 800, color: '#0a8fdc' }}>WHY CHOOSE AGILEWATERS?</Typography>
                    <br></br><br></br>
                    <Box sx={{ background: '#e6f4fb', p: 5, marginRight: 0 }}>

                        <Typography variant='h1' sx={{ color: '#013387' }}>
                            We are amongst top 5 Agile Consulting & Recruitment Company in India.
                        </Typography>
                        <br></br>
                        <Typography variant='body1' sx={{ color: 'black', textAlign: 'justify' }}>
                            Our sincere effort is give best value return to your investment and make our solutions take you to next level of excellence. This is also proven by our track record. We have Coached, trained, certified & recruited more than 9000 aspirants till date and still going on.... To experience it - let’s start with a communication. Do call or write us. We work on the motto to dwell a culture which invokes Relation building and customised solutions leading to Innovation.
                        </Typography>
                        <br></br>
                        <Button variant='contained'>Read More <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
