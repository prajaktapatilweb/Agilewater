import { AppCard } from '@crema'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { headList8 } from 'modules/Constant/titlefile'
import Heading from 'modules/commanmodules/Heading'
import Image from 'next/image'
import React from 'react'

export default function Indexclient() {
    var details = [
        {
            id: 1,
            imgs: '/assets/images/Clients/1.png',

        },
        {
            id: 2,
            imgs: '/assets/images/Clients/2.png',

        },
        {
            id: 3,
            imgs: '/assets/images/Clients/3.png',

        },
        {
            id: 4,
            imgs: '/assets/images/Clients/4.png',

        },
        {
            id: 5,
            imgs: '/assets/images/Clients/5.png',

        },
        {
            id: 6,
            imgs: '/assets/images/Clients/6.png',

        },
        {
            id: 7,
            imgs: '/assets/images/Clients/7.png',

        },
        {
            id: 8,
            imgs: '/assets/images/Clients/8.png',

        },
        {
            id: 9,
            imgs: '/assets/images/Clients/9.png',

        },
        {
            id: 10,
            imgs: '/assets/images/Clients/10.png',

        },
        {
            id: 11,
            imgs: '/assets/images/Clients/11.png',

        },
        {
            id: 12,
            imgs: '/assets/images/Clients/12.png',

        },
        {
            id: 13,
            imgs: '/assets/images/Clients/13.png',

        },
        {
            id: 14,
            imgs: '/assets/images/Clients/14.png',

        },
        {
            id: 15,
            imgs: '/assets/images/Clients/15.png',

        },
        {
            id: 16,
            imgs: '/assets/images/Clients/16.png',

        },
        {
            id: 17,
            imgs: '/assets/images/Clients/17.png',

        },
    ]
    return (
        <div>
            <Box className='section'>
                <Container>

                    <Grid container spacing={4} alignItems='center' justifyContent='center'>
                        <Grid item xs={12} md={12}>
                            <Heading data={headList8}></Heading>
                            <Grid container spacing={3}>
                                {details.map((item, i) => (
                                    <Grid item xs={3} md={2}>
                                        <Box sx={{ border: '1px solid lightgrey', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px' }}>
                                            <Image src={item.imgs} alt="" width={200} height={100} layout='responsive' key={i} ></Image>
                                        </Box>
                                    </Grid>
                                ))}

                            </Grid>

                        </Grid>
                        {/* <Grid item xs={12} md={5}> */}
                        {/* <ExpertForm AllowedFieldArray={['Name', 'Email', 'Phone', 'Certification', 'Message']} /> */}
                        {/* <AppCard sx={{ p: 3 }}>
                                <Typography variant="h3" sx={{ textAlign: 'center', color: "#0a8fdc" }} gutterBottom>
                                    Companies, big and small, trust us to scale their business
                                </Typography>
                                <Typography variant="p" sx={{ textAlign: 'justify', color: "black", }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                                <br></br>
                                <br></br>
                                <Box textAlign='center'>
                                    <Button variant='contained'>Apply Here</Button>
                                </Box>
                            </AppCard> */}
                        {/* </Grid> */}
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}
