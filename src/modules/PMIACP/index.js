import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/dist/client/image'
import React from 'react'
import { Fonts } from 'shared/constants/AppEnums'

export default function PMIACP() {
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

                        sx={{
                            fontWeight: Fonts.BOLD,

                            position: 'relative',
                            zIndex: 1,

                            // fontSize: 16,
                        }}
                        mt={{ xs: 9, md: 0 }}
                        mb={{ xs: 3, md: 5 }}
                    >
                        <Image src="/assets/images/courselogo/pmi-acp.png" height={250} width={250}></Image>
                        <h1 style={{ color: 'white' }}>PMI – ACP Certification</h1><br></br>
                        <Typography variant='h2' sx={{ color: 'wheat' }}>Coming Soon With Description.</Typography>
                    </Box>

                </Container>
            </Grid>

            {/* <Grid className='section section-lg section-shaped' sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
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
                <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10, textAlign: 'center', zIndex: 1, }}>
                    <Box sx={{ zIndex: '1' }}>
                        <Image src="/assets/images/courselogo/ICP-ACC.jpg" height={100} width={100}></Image>
                        <h1>PMI – ACP Certification</h1>
                        <Typography variant='h3'>Coming Soon With Description.</Typography>
                    </Box>
                </Container>
            </Grid> */}
        </div>
    )
}
