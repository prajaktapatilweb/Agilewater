import React from 'react';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { AppCard } from '@crema';
import { courseList2 } from 'modules/Constant/Relatecoursedata';
import SafePricingcard from 'modules/SAFe/SafeAgileCert/SafePricingcard';
import { testList1 } from 'modules/Constant/OthershortConst';
import Testcard from 'modules/commanmodules/TestCard';
import Safescruminfo from './Safescruminfo';
import SlideBasicArrow from 'modules/commanmodules/SlideBasicArrow';
import { usersPhotoList } from 'modules/Constant/Photoslider';
import PaymentModule from 'modules/commanmodules/PaymentModule';
import CourseTable from '../SafeAgileCert/CourseTable';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function SafeScrumMastercert() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/safelogo/SSM-logo.webp'
        heading=' SAFe Scrum Master Certification'
        list1={[
          '2 Days of Classroom Training',
          '  100% Assured Results',
          'SAFe® 6.0 Scrum Master certificate',
          '1 year certified membership as a SAFe Scrum Master.',
          'Access to a variety of learning resources to support you during your SAFe journey'
        ]}
        videosrc='https://www.youtube.com/watch?v=-M-R3Lc-V74'
      />
      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            {/* <CourseTable /> */}
            <CourseTable />
            {/* <PaymentModule /> */}
          </Grid>
          <Grid item xs={12} md={4}>
            <SlideBasicArrow data={usersPhotoList} />
          </Grid>

          <Grid item xs={12} md={8}>
            <AppCard>
              <Safescruminfo />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <Testcard data={testList1} />
            <RelatedCourses data={courseList2} />
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8} sx={{ pb: 7 }}>
            <SafePricingcard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
