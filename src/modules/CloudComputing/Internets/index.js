import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import Internetsinfo from './Internetsinfo';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function Internets() {
  return (
    <div>

      <Herosectiondemo
        image1='/assets/images/courselogo/Internets.png'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='Internet of Things Foundation'
        list1={[
          'Understanding of the IoT technology',
          '100% Assured Results',
          'Concepts and Terminologies',
          'Basic Building Block of IoT - Architecture .',
        ]}
        videosrc=''
      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 2 }}>
              <Internetsinfo />
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
