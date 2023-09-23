import React from 'react';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import {Grid, Link} from '@mui/material';
import {Container} from '@mui/material';
import {AppCard} from '@crema';
import SafescrumHero from './SafescrumHero';
import {courseList2} from 'modules/Constant/Relatecoursedata';
import SafePricingcard from 'modules/SAFe/SafeAgileCert/SafePricingcard';
import {testList1} from 'modules/Constant/OthershortConst';
import Testcard from 'modules/commanmodules/TestCard';
import VideoMain from 'modules/commanmodules/VideoMain';
import Safescruminfo from './Safescruminfo';
import SlideBasicArrow from 'modules/commanmodules/SlideBasicArrow';
import {usersPhotoList} from 'modules/Constant/Photoslider';
import PaymentModule from 'modules/commanmodules/PaymentModule';

export default function SafeScrumMastercert() {
  return (
    <div>
      <SafescrumHero />
      <Container sx={{maxWidth: {xl: 1450}, marginTop: 10}}>
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item xs={12} md={8}>
            {/* <CourseTable /> */}
            <PaymentModule />
          </Grid>
          <Grid item xs={12} md={4}>
            <SlideBasicArrow data={usersPhotoList} />
          </Grid>

          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{p: 5}}>
              <Safescruminfo />
            </AppCard>
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
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item xs={12} md={8} sx={{pb: 7}}>
            <SafePricingcard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
