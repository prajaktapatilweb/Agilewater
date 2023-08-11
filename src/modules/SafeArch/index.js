import React from 'react'
import HeroArch from './HeroArch'
import Innerlink from 'modules/commanmodules/Innerlink'
import { Container, Grid } from '@mui/material'
import { AppCard } from '@crema'
import SafeArchinfo from './SafeArchinfo'
import MainArchaccord from './MainArchaccord'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import { courseList2 } from 'modules/Constant/Relatecoursedata'
import { testList1 } from 'modules/Constant/OthershortConst'
import Testcard from 'modules/commanmodules/TestCard'
import VideoMain from 'modules/commanmodules/VideoMain'

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
                        <VideoMain links='https://www.youtube.com/watch?v=-M-R3Lc-V74' videoPromo={'sd'}></VideoMain>
                        <Testcard data={testList1} />
                        <RelatedCourses data={courseList2} />
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}
