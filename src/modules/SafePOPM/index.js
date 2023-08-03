import React from 'react'
import HeroPopm from './HeroPopm'
import Innerlink from 'modules/commanmodules/Innerlink'
import { AppCard } from '@crema'
import { Container, Grid } from '@mui/material'
import Popmdetails from './Popmdetails'
import MainPopmaccord from './MainPopmaccord'
import Safetest from 'modules/SafeAgileCert/Safetest'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import Videodemo from 'modules/SafeAgileCert/Videodemo'
import { courseList2 } from 'modules/Constant/Relatecoursedata'
import { testList1 } from 'modules/Constant/OthershortConst'
import Testcard from 'modules/commanmodules/TestCard'

export default function SafePOPM() {
    return (
        <div>
            <HeroPopm />
            <Innerlink />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <Popmdetails />
                            <MainPopmaccord />
                        </AppCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Videodemo videoPromo={'sd'} />
                        <Testcard data={testList1} />
                        <RelatedCourses data={courseList2} />
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}
