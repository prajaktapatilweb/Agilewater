import React from 'react';
import CourseTable from './CourseTable';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import Safeinfo from './Safeinfo.js';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { AppCard } from '@crema';
import SafePricingcard from './SafePricingcard';
import SlideBasicArrow from 'modules/commanmodules/SlideBasicArrow';
import { testList1 } from 'modules/Constant/OthershortConst';
import Testcard from 'modules/commanmodules/TestCard';
import { usersPhotoList } from 'modules/Constant/Photoslider';
import { courseList2 } from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';
import LabTabs from 'modules/commanmodules/LabTabs';
import Safeaccord from './Safeaccord';

export default function SafeAgileCert() {
  return (
    <>
      <Herosectiondemo
        image1='/assets/images/courselogo/safelogo/SAFe-Agilist-Logo1.webp'
        heading=' Leading SAFe® 6.0 / SAFe® 6.0 Agilist Certification'
        list1={[
          '2 Days of Classroom Training',
          '  100% Assured Results',
          'Trained by experienced SPC 5.0 SAFe Consultant',
          '  1 year membership to the SAFe Community Platform',
          'Insightful Study Material'
        ]}
        videosrc='https://www.youtube.com/watch?v=-M-R3Lc-V74'
      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ md: 3 }}>
          <Grid item xs={12} md={8}>
            {/* <CourseTable PageCourseName='SAFe 6.0 Agilist (Leading SAFe)' TableTitle='SAFe Agilist Certification Training'/> */}
            <CourseTable DataID={1} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SlideBasicArrow data={usersPhotoList} />
          </Grid>

          <Grid item xs={12} md={8}>
            <AppCard>
              <LabTabs data={[
                { label: 'Overview', panelData: <Safeinfo /> },
                { label: 'FAQ', panelData: <Safeaccord /> },
                { label: 'Testimonials', panelData: 'Item ewe' },
                { label: 'PricingCard', panelData: <SafePricingcard /> }
              ]} />

            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <Testcard data={testList1} />
            <RelatedCourses data={courseList2} />
          </Grid>
        </Grid>

      </Container>

    </>
  );
}
