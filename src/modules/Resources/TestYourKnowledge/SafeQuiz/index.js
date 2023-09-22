import React from 'react';
import HeroSafeQuiz from './HeroSafeQuiz';
import SafeQuizinfo from './SafeQuizinfo';
import {safequizList} from 'modules/Constant/QuizConst';
import {Container, Grid} from '@mui/material';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import {courseList2} from 'modules/Constant/Relatecoursedata';
import SafeQuizaccord from './SafeQuizaccord';
import {AppCard} from '@crema';

export default function SafeQuiz() {
  return (
    <div>
      <HeroSafeQuiz />
      <Container sx={{maxWidth: {xl: 1450}, marginTop: 10}}>
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item xs={12} md={8}>
            <SafeQuizinfo data={safequizList} subjectName='SAFE' />
            <AppCard>
              <SafeQuizaccord />
            </AppCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <RelatedCourses data={courseList2}></RelatedCourses>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
