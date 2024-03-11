import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import ENTinfo from './ENTinfo';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function ICPENT() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/icplogo/ICP-ENT1.png'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='ICP-ENT Agility in the Enterprise Coaching Certification'
        list1={[
          '3 Days of Classroom / Online Training',
          '100% Assured Results',
          'ICP-ENT Certification',
          'Use Hardcopy of the material',
        ]}
        videosrc='https://www.youtube.com/watch?v=4kTqNhxSHcM'

      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 2 }}>
              <ENTinfo />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <Atscaledownload />
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
