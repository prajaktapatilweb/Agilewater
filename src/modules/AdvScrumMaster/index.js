import React from 'react'
import HeroAdvScrum from './HeroAdvScrum'
import { Container, Grid } from '@mui/material'
import { AppCard } from '@crema'
import AdvScruminfo from './AdvScruminfo'
import MainAdvSMaccord from './MainAdvSMaccord'
import VideoMain from 'modules/commanmodules/VideoMain'
import SideCard from 'modules/ScrumMasterCert/SideCard'
import { sideList1 } from 'modules/Constant/OtherCardsConst'
import Safetest from 'modules/SafeAgileCert/Safetest'
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider'
import { freecourseList } from 'modules/Constant/FreeCourseConst'
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import { safeadvList } from 'modules/Constant/Relatecoursedata'

export default function AdvScrumMaster() {
    return (
        <div>
            <HeroAdvScrum />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <AdvScruminfo />
                            <MainAdvSMaccord />
                        </AppCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <VideoMain links="https://www.youtube.com/watch?v=rB9dlx8V480&t=2s" videoPromo={'sd'} />
                        <br></br>

                        <Safetest /><br></br>
                        <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
                        <br></br>
                        <RelatedCourses data={safeadvList} />

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
