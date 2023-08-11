import React from 'react'
import HeroTBR from './HeroTBR'
import Innerlink from 'modules/commanmodules/Innerlink'
import { Container, Grid } from '@mui/material'
import { AppCard } from '@crema'
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider'
import { freecourseList } from 'modules/Constant/FreeCourseConst'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import { safeadvList } from 'modules/Constant/Relatecoursedata'
import TBRinfo from './TBRinfo'

export default function TBR() {
    return (
        <div>
            <HeroTBR />
            <Innerlink></Innerlink>
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <TBRinfo />
                        </AppCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
                        <RelatedCourses data={safeadvList} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
