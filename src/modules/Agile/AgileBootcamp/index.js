import React from 'react';
import HeroBootcamp from './HeroBootcamp';
import Innerlink from 'modules/commanmodules/Innerlink';
import {Container, Grid} from '@mui/material';
import {AppCard} from '@crema';
import Bootcampinfo from './Bootcampinfo';
import VideoMain from 'modules/commanmodules/VideoMain';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import {freecourseList} from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import {safeadvList} from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';

export default function AgileBootcamp() {
  return (
    <div>
      <HeroBootcamp />
      <Innerlink />
      <Container sx={{maxWidth: {xl: 1450}, marginTop: 10}}>
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{p: 5}}>
              <Bootcampinfo />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <VideoMain
              links='https://www.youtube.com/watch?v=4kTqNhxSHcM'
              videoPromo={'sd'}
            />
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
