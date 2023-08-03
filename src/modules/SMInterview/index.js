import React from 'react'
import HeroSMInter from './HeroSMInter'
import Innerlink from 'modules/commanmodules/Innerlink'
import { Container, Grid } from '@mui/material'
import HeroCard from './HeroCard'

export default function SMInterview() {
    return (
        <div>
            <HeroSMInter />
            <Innerlink />

            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <HeroCard />
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}
