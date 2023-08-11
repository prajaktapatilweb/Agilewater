import React from 'react'
import HeroCSPO from './HeroCSPO'
import Innerlink from 'modules/commanmodules/Innerlink'
import { Container, Grid } from '@mui/material'
import { AppCard } from '@crema'
import CSPOinfo from './CSPOinfo'
import MainCSPOaccord from './MainCSPOaccord'
import VideoMain from 'modules/commanmodules/VideoMain'
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import { freecourseList } from 'modules/Constant/FreeCourseConst'
import { safeadvList } from 'modules/Constant/Relatecoursedata'
import DownloadCard from 'modules/commanmodules/DownloadCard'
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload'

export default function CSPO() {
    return (
        <div>
            <HeroCSPO />
            <Innerlink />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <CSPOinfo />
                            <MainCSPOaccord />
                        </AppCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <VideoMain links="https://www.youtube.com/watch?v=B_CaH1XBhYQ" videoPromo={'sd'} />

                        <Atscaledownload />
                        <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
                        <RelatedCourses data={safeadvList} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
