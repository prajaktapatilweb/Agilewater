import React from 'react'
import HeroBAF from './HeroBAF'
import Innerlink from 'modules/commanmodules/Innerlink'
import { Container, Grid } from '@mui/material'
import { AppCard } from '@crema'
import VideoMain from 'modules/commanmodules/VideoMain'
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload'
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider'
import { freecourseList } from 'modules/Constant/FreeCourseConst'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import { safeadvList } from 'modules/Constant/Relatecoursedata'
import BAFinfo from './BAFinfo'

export default function ICPBAF() {
    return (
        <div>
            <HeroBAF />
            <Innerlink />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <BAFinfo />
                        </AppCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <VideoMain links="https://www.youtube.com/watch?v=4kTqNhxSHcM" videoPromo={'sd'} />
                        <Atscaledownload />
                        <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
                        <RelatedCourses data={safeadvList} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
