import React from 'react';
import HeroSafeQuiz from './HeroSafeQuiz';
import QuizMainPageCard from '../QuizMainPageCard';
import { safequizList } from 'modules/Constant/QuizConst';
import { Container, Grid } from '@mui/material';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { courseList2 } from 'modules/Constant/Relatecoursedata';
import SafeQuizaccord from './SafeQuizaccord';
import { AppCard } from '@crema';
import ExpertForm from 'modules/Forms/ExpertForm';

export default function SafeQuiz() {
  return (
    <div>
      <HeroSafeQuiz />
      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <QuizMainPageCard subjectName='SAFE' />
            <RelatedCourses data={courseList2}></RelatedCourses>
            <AppCard>
              <SafeQuizaccord />
            </AppCard>

          </Grid>
          <Grid item xs={12} md={4}>
            <AppCard>
              <ExpertForm AllowedFieldArray={['Name', 'Email', 'Phone', 'Certification', 'Message']} />
            </AppCard>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}
