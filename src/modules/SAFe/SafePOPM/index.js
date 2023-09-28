import React from 'react';
import HeroPopm from './HeroPopm';
import Innerlink from 'modules/commanmodules/Innerlink';
import {AppCard} from '@crema';
import {Container, Grid} from '@mui/material';
import Popmdetails from './Popmdetails';
import MainPopmaccord from './MainPopmaccord';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import {courseList2} from 'modules/Constant/Relatecoursedata';
import {testList1} from 'modules/Constant/OthershortConst';
import Testcard from 'modules/commanmodules/TestCard';
import VideoMain from 'modules/commanmodules/VideoMain';
import Discussion from 'modules/Discussion';

export default function SafePOPM() {
  return (
    <div>
      <HeroPopm />
      <Innerlink />
      <Container sx={{maxWidth: {xl: 1450}, marginTop: 10}}>
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{p: 5}}>
              <Popmdetails />
              <MainPopmaccord />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <VideoMain
              links='https://www.youtube.com/watch?v=-M-R3Lc-V74'
              videoPromo={'sd'}
            ></VideoMain>
            <Testcard data={testList1} />
            <RelatedCourses data={courseList2} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
