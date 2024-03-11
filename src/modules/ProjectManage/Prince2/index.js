import React from 'react';
import HeroPrince2 from './HeroPrince2';
import Innerlink from 'modules/commanmodules/Innerlink';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import Prince2info from './Prince2info';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function Prince2() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/prince2.png'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='PRINCE2'
        list1={[
          'Understanding of the Project Management',
          '100% Assured Results',
          'Concepts and Terminologies',
          'Insightful Study Material .',
        ]}
        videosrc='https://www.youtube.com/watch?v=4kTqNhxSHcM'
      />


      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 2 }}>
              <Prince2info />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
