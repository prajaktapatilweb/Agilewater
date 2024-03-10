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
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo'

export default function SMInterview() {
    return (
        <div>
            <Herosectiondemo
                image1='/assets/images/courselogo/interview.webp'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Scrum Master Interview Preparation Session'
                list1={[
                    '2 Days of Classroom / Online Training',
                    '100% Assured Results',
                    'Internationally Acclaimed Trainer',
                    'Insightful Study Material',
                    'Small Batch Size',

                ]}
                videosrc='https://www.youtube.com/watch?v=rB9dlx8V480&t=2s'
            />

            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <HeroCard />
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={12}>
                        <AnotherCard />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Testcard data={testList2} />
                    </Grid>
                    <Grid item xs={12} md={4}>
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
