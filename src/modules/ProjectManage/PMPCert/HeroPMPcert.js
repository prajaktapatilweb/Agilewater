import { Box, Container, Grid, List, ListItem, ListItemText } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { Fonts } from 'shared/constants/AppEnums'

export default function HeroPMPcert() {
    var list1 = {
        dev: [
            '3 Days of Classroom Training',
            '100% Assured Results',
            'Insightful Study Material',
            'Small Batch Size',
        ]
    }

    return (
        <div>

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
                    <Box
                        component='h1'
                        sx={{
                            fontWeight: Fonts.BOLD,
                            color: 'wheat',
                            position: 'relative',
                            zIndex: 1,

                        }}
                        mt={{ xs: 9, md: 0 }}
                        mb={{ xs: 3, md: 5 }}
                    >
                        Project Management Professional (PMP) Certification Training
                    </Box>

                    <Grid container spacing={0} sx={{ position: 'relative', zIndex: 1 }} direction="row"
                        justifyContent="space-evenly"
                        alignItems="center">

                        <Grid item xs={12} sm={6} md={5}>
                            <Box>
                                <Image
                                    alt='Safelogo'
                                    src='/assets/images/courselogo/PMPcert.png'
                                    height={250}
                                    width={400}

                                ></Image>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={7}>
                            <List sx={{ color: 'white', }}>
                                {list1.dev.map((item, i) => (
                                    <ListItem key={i} alignItems='flex-start'>
                                        <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                                        <ListItemText
                                            primary={item}
                                            primaryTypographyProps={{ fontSize: '18px', mt: -1 }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Container>

            </Grid>

        </div>
    )
}
