import React from 'react'
import HeroCSPSM from './HeroCSPSM'
import Innerlink from 'modules/commanmodules/Innerlink'
import { Container, Grid } from '@mui/material'
import { AppCard } from '@crema'
import CSPSMinfo from './CSPSMinfo'
import VideoMain from 'modules/commanmodules/VideoMain'
import Testcard from 'modules/commanmodules/TestCard'
import { testList2 } from 'modules/Constant/OthershortConst'
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider'
import { freecourseList } from 'modules/Constant/FreeCourseConst'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import { safeadvList } from 'modules/Constant/Relatecoursedata'

export default function CSPSM() {
    return (
        <div>
            <HeroCSPSM></HeroCSPSM>
            <Innerlink />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <CSPSMinfo />

                        </AppCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <VideoMain links="https://www.youtube.com/watch?v=rB9dlx8V480&t=2s" videoPromo={'sd'} />
                        <Testcard data={testList2} />
                        <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
                        <RelatedCourses data={safeadvList} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
