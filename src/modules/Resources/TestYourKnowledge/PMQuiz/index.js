import React from 'react'
import HeroPMQuiz from './HeroPMQuiz'
import { Container, Grid } from '@mui/material'
import SafeQuizinfo from '../SafeQuiz/SafeQuizinfo'
import { agilequizList } from 'modules/Constant/QuizConst'
import { AppCard } from '@crema'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import { courseList2 } from 'modules/Constant/Relatecoursedata'

export default function PMQuiz() {
    return (
        <div>
            <HeroPMQuiz></HeroPMQuiz>
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <SafeQuizinfo data={agilequizList} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <RelatedCourses data={courseList2}></RelatedCourses>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}
