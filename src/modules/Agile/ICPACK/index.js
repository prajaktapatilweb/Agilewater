import React from 'react';
import HeroPack from './HeroPack';
import Innerlink from 'modules/commanmodules/Innerlink';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import Packinfo from './Packinfo';
import VideoMain from 'modules/commanmodules/VideoMain';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function ICPACK() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/ICPack.webp'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='Agile Coach - Shu - Ha- Ri Package'
        list1={[
          'Classroom / Online Training',
          '100% Assured Results',
          'Internationally Acclaimed Trainer',
          'Insightful Study Material',
          'Small Batch Size',
        ]}
        videosrc='https://www.youtube.com/watch?v=4kTqNhxSHcM'

      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 2 }}>
              <Packinfo />
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
