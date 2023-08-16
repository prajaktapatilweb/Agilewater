import { AppCard } from '@crema'
import { Container, Grid } from '@mui/material'
import { safeadvList } from 'modules/Constant/Relatecoursedata'
import Innerlink from 'modules/commanmodules/Innerlink'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import React from 'react'
import SixSigmainfo from './SixSigmainfo'
import HeroSixSigma from './HeroSixSigma'

export default function SixSigma() {
    return (
        <div>
            <HeroSixSigma />
            <Innerlink />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>

                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <SixSigmainfo />
                        </AppCard>
                    </Grid>
                    <Grid item xs={12} md={4}>

                        <RelatedCourses data={safeadvList} />

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
