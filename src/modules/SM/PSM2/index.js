import React from 'react';
import HeroPSM2 from './HeroPSM2';
import Innerlink from 'modules/commanmodules/Innerlink';
import {Container, Grid} from '@mui/material';
import {AppCard} from '@crema';
import PSM2info from './PSM2info';
import VideoMain from 'modules/commanmodules/VideoMain';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import {freecourseList} from 'modules/Constant/FreeCourseConst';
import {safeadvList} from 'modules/Constant/Relatecoursedata';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import Testcard from 'modules/commanmodules/TestCard';
import {testList2} from 'modules/Constant/OthershortConst';
import Discussion from 'modules/Discussion';

export default function PSM2() {
  return (
    <div>
      <HeroPSM2 />
      <Innerlink />
      <Container sx={{maxWidth: {xl: 1450}, marginTop: 10}}>
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{p: 5}}>
              <PSM2info />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <VideoMain
              links='https://www.youtube.com/watch?v=rB9dlx8V480&t=2s'
              videoPromo={'sd'}
            />
            <Testcard data={testList2} />
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
