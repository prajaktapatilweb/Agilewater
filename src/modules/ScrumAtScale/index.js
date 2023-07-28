import React from 'react'
import HeroAtScale from './HeroAtScale'
import Innerlink from 'modules/commanmodules/Innerlink'
import { Container, Grid } from '@mui/material'
import { AppCard } from '@crema'
import AtScaleinfo from './AtScaleinfo'
import MainAtScaleaccord from './MainAtScaleaccord'
import Safetest from 'modules/SafeAgileCert/Safetest'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import VideoMain from 'modules/commanmodules/VideoMain'
import { atscale } from 'modules/Constant/Relatecoursedata'
import Atscaledownload from './Atscaledownload'
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider'
import { freecourseList } from 'modules/Constant/FreeCourseConst'

export default function ScrumAtScale() {
    return (
        <div>
            <HeroAtScale />
            <Innerlink />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <AtScaleinfo />
                            <MainAtScaleaccord />
                        </AppCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <VideoMain links="https://www.youtube.com/watch?v=rB9dlx8V480&t=2s" videoPromo={'sd'} />
                        <Safetest />
                        <RelatedCourses data={atscale} />
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ mb: 5 }}>
                        <Atscaledownload />

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FreeCourseSlider images={freecourseList}></FreeCourseSlider>


                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
