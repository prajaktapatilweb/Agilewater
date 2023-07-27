import React from 'react'
import HeroArch from './HeroArch'
import Innerlink from 'modules/commanmodules/Innerlink'
import { Container, Grid } from '@mui/material'
import { AppCard } from '@crema'
import SafeArchinfo from './SafeArchinfo'
import MainArchaccord from './MainArchaccord'
import Videodemo from 'modules/SafeAgileCert/Videodemo'
import Safetest from 'modules/SafeAgileCert/Safetest'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'

export default function SafeArch() {
    return (
        <div>

            <HeroArch />
            <Innerlink />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <SafeArchinfo />
                            <MainArchaccord />
                        </AppCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Videodemo videoPromo={'sd'} />
                        <Safetest />
                        <RelatedCourses />
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}
