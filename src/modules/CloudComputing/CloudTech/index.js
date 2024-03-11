import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import CloudTechinfo from './CloudTechinfo';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function CloudTech() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/TechnologyCloud.png'
        heading='Cloud Technology Associate'
        list1={[
          'Introduction to Cloud Services Model',
          '100% Assured Results',
          'Cloud Security, Risk, Compliance, and Governance',
          'Cloud Service Management .',
        ]}
        videosrc=''
      />


      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 3 }}>
              <CloudTechinfo />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <Atscaledownload />
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
