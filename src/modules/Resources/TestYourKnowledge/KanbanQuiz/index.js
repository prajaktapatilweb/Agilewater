import React from 'react'
import HeroKanbanQuiz from './HeroKanbanQuiz'
import { Container, Grid } from '@mui/material'
import SafeQuizinfo from '../SafeQuiz/SafeQuizinfo'
import { kanbanquizList } from 'modules/Constant/QuizConst'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import { courseList2 } from 'modules/Constant/Relatecoursedata'
import { AppCard } from '@crema'
import KanbanQuizaccord from './KanbanQuizaccord'

export default function KanbanQuiz() {
    return (
        <div>
            <HeroKanbanQuiz />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <SafeQuizinfo data={kanbanquizList} />
                        <AppCard>
                            <KanbanQuizaccord />
                        </AppCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <RelatedCourses data={courseList2}></RelatedCourses>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}
