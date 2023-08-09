import React from 'react'
import HeroBlockF from './HeroBlockF'
import Innerlink from 'modules/commanmodules/Innerlink'
import { Container, Grid } from '@mui/material'
import { AppCard } from '@crema'
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider'
import { freecourseList } from 'modules/Constant/FreeCourseConst'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import { safeadvList } from 'modules/Constant/Relatecoursedata'
import BlockFinfo from './BlockFinfo'
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload'

export default function BlockChainFound() {
    return (
        <div>
            <HeroBlockF />
            <Innerlink></Innerlink>
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <BlockFinfo />
                        </AppCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
                        <Atscaledownload></Atscaledownload>
                        <RelatedCourses data={safeadvList} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
