import { Container, Grid } from '@mui/material'
import React from 'react'

export default function Registerform() {
    return (
        <div>
            {/* <Grid className="section section-lg section-shaped " style={{ backgroundImage: "linear-gradient(90deg, #05445e 35%, #189ab4 90%)", position: "relative" }}> */}
            <Grid className='section section-lg section-shaped' sx={{ borderBottom: '5px white solid' }}>
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
                <Container maxWidth="lg" sx={{ py: 50 }}>
                    <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                        <Grid item xs={12} md={12}>
                            gkk jljyh  lujkyljk
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </div>
    )
}
