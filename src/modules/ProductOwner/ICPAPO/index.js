import React from 'react';
import HeroIcpApo from './HeroIcpApo';
import Innerlink from 'modules/commanmodules/Innerlink';
import {Container, Grid} from '@mui/material';
import {AppCard} from '@crema';
import ICPAPOinfo from './ICPAPOinfo';
import MainICPAPOaccord from './MainICPAPOaccord';
import VideoMain from 'modules/commanmodules/VideoMain';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import {safeadvList} from 'modules/Constant/Relatecoursedata';
import Testcard from 'modules/commanmodules/TestCard';
import {testList1} from 'modules/Constant/OthershortConst';
import Discussion from 'modules/Discussion';

export default function ICPAPO() {
  return (
    <div>
      <HeroIcpApo></HeroIcpApo>
      <Innerlink></Innerlink>
      <Container sx={{maxWidth: {xl: 1450}, marginTop: 10}}>
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{p: 5}}>
              <ICPAPOinfo></ICPAPOinfo>
              <MainICPAPOaccord></MainICPAPOaccord>
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <VideoMain
              links='https://www.youtube.com/watch?v=-M-R3Lc-V74'
              videoPromo={'sd'}
            />
            <Testcard data={testList1} />
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
