import React from 'react'
import HeroSMInter from './HeroSMInter'
import Innerlink from 'modules/commanmodules/Innerlink'
import { Container, Grid } from '@mui/material'
import HeroCard from './HeroCard'
import AnotherCard from './AnotherCard'
import VideoMain from 'modules/commanmodules/VideoMain'
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider'
import { freecourseList } from 'modules/Constant/FreeCourseConst'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import { safeadvList } from 'modules/Constant/Relatecoursedata'
import Testcard from 'modules/commanmodules/TestCard'
import { testList2 } from 'modules/Constant/OthershortConst'

export default function SMInterview() {
    return (
        <div>
            <HeroSMInter />
            <Innerlink />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <HeroCard />
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AnotherCard />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Testcard data={testList2} />
                        <FreeCourseSlider images={freecourseList}></FreeCourseSlider>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <RelatedCourses data={safeadvList} />
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}
