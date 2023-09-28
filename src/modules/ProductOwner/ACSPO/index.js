import React from 'react';
import HeroACSPO from './HeroACSPO';
import Innerlink from 'modules/commanmodules/Innerlink';
import {Container, Grid} from '@mui/material';
import {AppCard} from '@crema';
import ACSPOinfo from './ACSPOinfo';
import VideoMain from 'modules/commanmodules/VideoMain';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import {freecourseList} from 'modules/Constant/FreeCourseConst';
import {safeadvList} from 'modules/Constant/Relatecoursedata';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import Discussion from 'modules/Discussion';

export default function ACSPO() {
  return (
    <div>
      <HeroACSPO />
      <Innerlink />
      <Container sx={{maxWidth: {xl: 1450}, marginTop: 10}}>
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{p: 5}}>
              <ACSPOinfo />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <VideoMain
              links='https://www.youtube.com/watch?v=B_CaH1XBhYQ'
              videoPromo={'sd'}
            />
            <Atscaledownload />
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
