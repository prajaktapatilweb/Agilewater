import React from 'react';
import HeroSafeTeam from './HeroSafeTeam';
import Innerlink from 'modules/commanmodules/Innerlink';
import {Container, Grid} from '@mui/material';
import {AppCard} from '@crema';
import VideoMain from 'modules/commanmodules/VideoMain';
import Testcard from 'modules/commanmodules/TestCard';
import {testList1} from 'modules/Constant/OthershortConst';
import SafeTeaminfo from './SafeTeaminfo';
import MainSafeTeamaccord from './MainSafeTeamaccord';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import {courseList2} from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';

export default function SafeTeam() {
  return (
    <div>
      <HeroSafeTeam />
      <Innerlink></Innerlink>
      <Container sx={{maxWidth: {xl: 1450}, marginTop: 10}}>
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{p: 5}}>
              <SafeTeaminfo />
              <MainSafeTeamaccord />
              <Discussion></Discussion>
            </AppCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <VideoMain
              links='https://www.youtube.com/watch?v=-M-R3Lc-V74'
              videoPromo={'sd'}
            ></VideoMain>
            <Testcard data={testList1} />
            <RelatedCourses data={courseList2}></RelatedCourses>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
