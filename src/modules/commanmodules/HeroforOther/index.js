import { Details } from '@mui/icons-material'
import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { Fonts } from 'shared/constants/AppEnums'

export default function HeroforOther({ Details }) {
    return (
        <div>
            <Box>
                {Details.map((item, index) => (
                    <Grid className='section section-lg section-shaped' sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} key={index}>
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

                                    // fontSize: 16,
                                }}
                                mt={{ xs: 9, md: 0 }}
                                mb={{ xs: 3, md: 5 }}
                            >
                                {item.heading}
                            </Box>
                            <Box
                                component='h3'
                                sx={{
                                    // fontWeight: Fonts.BOLD,
                                    color: 'white',
                                    position: 'relative',
                                    zIndex: 1,
                                    fontWeight: 400

                                    // fontSize: 16,
                                }}
                                mt={{ xs: 9, md: 0 }}
                                mb={{ xs: 3, md: 5 }}
                            >
                                {item.subheading}
                            </Box>
                        </Container>
                    </Grid>
                ))}
            </Box>

        </div>
    )
}
