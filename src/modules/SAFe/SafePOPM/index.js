import React from 'react';
import Innerlink from 'modules/commanmodules/Innerlink';
import { AppCard } from '@crema';
import { Container, Grid } from '@mui/material';
import Popmdetails from './Popmdetails';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { courseList2 } from 'modules/Constant/Relatecoursedata';
import { testList1 } from 'modules/Constant/OthershortConst';
import Testcard from 'modules/commanmodules/TestCard';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';
import LabTabs from 'modules/commanmodules/LabTabs';
import Popmaccord from './Popmaccord';

export default function SafePOPM() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/safelogo/POPM.webp'
        heading='SAFe Product Owner/Product Manager Certification'
        list1={[
          '2 Days of Classroom Training',
          '100% Assured Results',
          'Insightful Study Material',
          'Small Batch Size',
        ]}
        videosrc='https://www.youtube.com/watch?v=-M-R3Lc-V74'
      />
      <Innerlink />
      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 5 }}>
              <LabTabs data={[
                { label: 'Overview', panelData: <Popmdetails /> },
                { label: 'FAQ', panelData: <Popmaccord /> },
                { label: 'Testimonials', panelData: 'Item ewe' },
                { label: 'FreeCourses', panelData: 'Item ewe' }
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
    </div>
  );
}
