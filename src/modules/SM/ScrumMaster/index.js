import React from 'react';
import HeroSM from './HeroSM';
import {Container, Grid, Typography} from '@mui/material';
import {AppCard} from '@crema';
import SMinfo from './SMinfo';
import VideoMain from 'modules/commanmodules/VideoMain';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import {safeadvList} from 'modules/Constant/Relatecoursedata';
import {freecourseList} from 'modules/Constant/FreeCourseConst';
import Innerlink from 'modules/commanmodules/Innerlink';
import Testcard from 'modules/commanmodules/TestCard';
import {testList2} from 'modules/Constant/OthershortConst';
import Discussion from 'modules/Discussion';

export default function ScrumMaster() {
  return (
    <div>
      <HeroSM />
      <Innerlink />
      <Container sx={{maxWidth: {xl: 1450}, marginTop: 10}}>
        <h2>
          Scrum Master & Product Owner Certifications In Just 1 Online Training!
        </h2>
        <Typography variant='h3' sx={{color: '#2e6da4'}}>
          {' '}
          Get Certified as Scrum Master and Product Owner, endorsed by Scrum
          Inc. and Dr. Jeff Sutherland, the co-creator of Scrum!
        </Typography>
        <br></br>
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{p: 5}}>
              <SMinfo />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <VideoMain
              links='https://www.youtube.com/watch?v=rB9dlx8V480&t=2s'
              videoPromo={'sd'}
            />
            <br></br>

            <Testcard data={testList2} />
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <br></br>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
