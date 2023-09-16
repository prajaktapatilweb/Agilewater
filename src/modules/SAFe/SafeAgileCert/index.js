import React from 'react';
import Imagepara from './Imagepara';
import CourseTable from './CourseTable';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import Safeinfo from './Safeinfo.js';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { AppCard } from '@crema';
import MainSafeaccord from './MainSafeaccord';
import SafePricingcard from './SafePricingcard';
import SlideBasicArrow from 'modules/commanmodules/SlideBasicArrow';
import { testList1 } from 'modules/Constant/OthershortConst';
import Testcard from 'modules/commanmodules/TestCard';
import VideoMain from 'modules/commanmodules/VideoMain';
import { usersPhotoList } from 'modules/Constant/Photoslider';
import { courseList2 } from 'modules/Constant/Relatecoursedata';

export default function SafeAgileCert() {
  return (
    <>
      <Imagepara />


      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <CourseTable PageCourseName='Ms.' />
          </Grid>
          <Grid item xs={12} md={4}>
            <SlideBasicArrow data={usersPhotoList} />
          </Grid>

          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 5 }}>
              <Safeinfo />
              <MainSafeaccord />
            </AppCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <VideoMain links='https://www.youtube.com/watch?v=-M-R3Lc-V74' videoPromo={'sd'}></VideoMain>

            <Testcard data={testList1} />

          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8} sx={{ pb: 7 }}>
            <SafePricingcard />
          </Grid>
          <Grid item xs={12} md={4} sx={{ pb: 7 }}>
            <RelatedCourses data={courseList2} />
          </Grid>
        </Grid>
      </Container>

      {/* <Userfooter /> */}
      {/* <Whatsappnew /> */}
    </>
  );
}
