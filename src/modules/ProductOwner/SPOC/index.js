import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import SPOCinfo from './SPOCinfo';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function SPOC() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/spoc.jpg'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='Scrum Product Owner Certified (SPOC®) Certification Training'
        list1={[
          'Videos of all concepts, Terms and Definitions, Interactive Case Study, Reference Material and more',
          'Proctored Online SPOC Certification Exam (180 minutes, 140 Questions)',
          'SPOC Certificate will be provided on successfully passing the exam',
        ]}
        videosrc='https://www.youtube.com/watch?v=B_CaH1XBhYQ'
      />


      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 2 }}>
              <SPOCinfo />
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
