import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import CloudVirtualinfo from './CloudVirtualinfo';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function CloudVirtual() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/VirtualizationCloud.png'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='Cloud Virtualization Essentials'
        list1={[
          'Introduction to Virtualization',
          '100% Assured Results',
          'Adopting Virtualization',
          'Operating Virtualization .',
        ]}
        videosrc=''
      />


      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 2 }}>
              <CloudVirtualinfo></CloudVirtualinfo>
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <Atscaledownload></Atscaledownload>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
