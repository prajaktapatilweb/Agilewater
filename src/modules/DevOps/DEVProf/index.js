import React from 'react'
import HeroDevProf from './HeroDevProf'
import Innerlink from 'modules/commanmodules/Innerlink'
import { Container, Grid } from '@mui/material'
import { AppCard } from '@crema'
import DevProfinfo from './DevProfinfo'

export default function DEVProf() {
    return (
        <div>
            <HeroDevProf />
            <Innerlink />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <DevProfinfo />
                        </AppCard>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}
