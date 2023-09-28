import React from 'react';
import HeroPO from './HeroPO';
import Innerlink from 'modules/commanmodules/Innerlink';
import {Container, Grid} from '@mui/material';
import {AppCard} from '@crema';
import POinfo from './POinfo';
import MainPOaccord from './MainPOaccord';
import VideoMain from 'modules/commanmodules/VideoMain';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import {freecourseList} from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import {safeadvList} from 'modules/Constant/Relatecoursedata';
import POaccord from './POaccord';
import Discussion from 'modules/Discussion';

export default function PO() {
  return (
    <div>
      <HeroPO />
      <Innerlink />
      <Container sx={{maxWidth: {xl: 1450}, marginTop: 10}}>
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{p: 5}}>
              <POinfo></POinfo>
              <MainPOaccord />
              {/* <POaccord /> */}
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
