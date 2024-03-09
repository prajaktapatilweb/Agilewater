import React from 'react'
import Herocyber from './Herocyber'
import Innerlink from 'modules/commanmodules/Innerlink'
import Cyberinfo from './Cyberinfo'
import { Container, Grid } from '@mui/material'
import { AppCard } from '@crema'

export default function Cybersecurity() {
    return (
        <div>

            <Herocyber></Herocyber>
            <Innerlink></Innerlink>
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <Cyberinfo></Cyberinfo>
                        </AppCard>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
