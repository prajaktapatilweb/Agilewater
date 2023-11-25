import React from 'react';
import HeroPMQuiz from './HeroPMQuiz';
import { Container, Grid } from '@mui/material';
import SafeQuizinfo from '../QuizMainPageCard';
import { agilequizList } from 'modules/Constant/QuizConst';
import { AppCard } from '@crema';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { courseList2 } from 'modules/Constant/Relatecoursedata';
import ExpertForm from 'modules/Forms/ExpertForm';

export default function PMQuiz() {
  return (
    <div>
      <HeroPMQuiz></HeroPMQuiz>
      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <SafeQuizinfo data={agilequizList} />
            <RelatedCourses data={courseList2}></RelatedCourses>
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
