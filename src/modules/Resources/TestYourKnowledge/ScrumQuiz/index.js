import React from 'react';
import HeroScrumQuiz from './HeroScrumQuiz';
import { Container, Grid } from '@mui/material';
import SafeQuizinfo from '../QuizMainPageCard';
import { scrumquizList } from 'modules/Constant/QuizConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { courseList2 } from 'modules/Constant/Relatecoursedata';
import ScrumQuizaccord from './ScrumQuizaccord';
import { AppCard } from '@crema';
import ExpertForm from 'modules/Forms/ExpertForm';

export default function ScrumQuiz() {
  return (
    <div>
      <HeroScrumQuiz></HeroScrumQuiz>
      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <SafeQuizinfo data={scrumquizList} />
            <RelatedCourses data={courseList2}></RelatedCourses>

            <AppCard>
              <ScrumQuizaccord></ScrumQuizaccord>
            </AppCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <ExpertForm AllowedFieldArray={['Name', 'Email', 'Phone', 'Certification', 'Message']} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
