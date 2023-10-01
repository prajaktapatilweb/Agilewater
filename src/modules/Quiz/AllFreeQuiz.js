import React from 'react';
import {safequizList} from 'modules/Constant/QuizConst';
import {Container, Grid} from '@mui/material';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import {courseList2} from 'modules/Constant/Relatecoursedata';
import {AppCard} from '@crema';
import QuizMainPageCard from 'modules/Resources/TestYourKnowledge/QuizMainPageCard';

export default function AllFreeQuiz() {
  return (
    <div>
      <Container sx={{maxWidth: {xl: 1450}, marginTop: 10}}>
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item xs={12} md={8}>
            <QuizMainPageCard subjectName='SAFE' />
            <QuizMainPageCard subjectName='Kanban' />
            <QuizMainPageCard subjectName='Agile Project Management' />
            <QuizMainPageCard subjectName='Scrum' />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
