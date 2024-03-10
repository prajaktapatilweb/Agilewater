import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import SMCinfo from './SMCinfo';
import VideoMain from 'modules/commanmodules/VideoMain';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function SMC() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/smlogo/smc.webp'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='Scrum Master Certified (SMC) Certification Training'
        list1={[
          'Videos of all concepts, Terms and Definitions, Interactive Case Study, Reference Material and more',
          'Proctored Online SMC Certification Exam (120 minutes, 100 Questions)',
          'SMC Certificate will be provided on successfully passing the exam',
          '100% Assured Results',
        ]}
        videosrc='https://www.youtube.com/watch?v=rB9dlx8V480&t=2s'
      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 2 }}>
              <SMCinfo />
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
