import React from 'react'
import HeroAdvScrum from './HeroAdvScrum'
import { Container, Grid } from '@mui/material'
import { AppCard } from '@crema'
import AdvScruminfo from './AdvScruminfo'
import MainAdvSMaccord from './MainAdvSMaccord'

export default function AdvScrumMaster() {
    return (
        <div>
            <HeroAdvScrum />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <AdvScruminfo />
                            <MainAdvSMaccord />
                        </AppCard>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
