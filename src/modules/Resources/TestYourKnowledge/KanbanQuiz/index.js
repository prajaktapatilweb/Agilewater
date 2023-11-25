import React from 'react';
import HeroKanbanQuiz from './HeroKanbanQuiz';
import { Container, Grid } from '@mui/material';
import SafeQuizinfo from '../QuizMainPageCard';
import { kanbanquizList } from 'modules/Constant/QuizConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { courseList2 } from 'modules/Constant/Relatecoursedata';
import { AppCard } from '@crema';
import KanbanQuizaccord from './KanbanQuizaccord';
import ExpertForm from 'modules/Forms/ExpertForm';

export default function KanbanQuiz() {
  return (
    <div>
      <HeroKanbanQuiz />
      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <SafeQuizinfo data={kanbanquizList} />
            <RelatedCourses data={courseList2}></RelatedCourses>

            <AppCard>
              <KanbanQuizaccord />
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
