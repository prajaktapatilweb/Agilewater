import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import SafeArchinfo from './SafeArchinfo';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { courseList2 } from 'modules/Constant/Relatecoursedata';
import { testList1 } from 'modules/Constant/OthershortConst';
import Testcard from 'modules/commanmodules/TestCard';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';
import Archaccord from './Archaccord';
import LabTabs from 'modules/commanmodules/LabTabs';

export default function SafeArch() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/safelogo/SafeArch.webp'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='SAFe for Architects (ARCH)'
        list1={[
          '3 Days of Classroom Training',
          '100% Assured Results',
          'Insightful Study Material',
          'Small Batch Size',
        ]}
        videosrc='https://www.youtube.com/watch?v=-M-R3Lc-V74'
      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard>
              <LabTabs data={[
                { label: 'Overview', panelData: <SafeArchinfo /> },
                { label: 'FAQ', panelData: <Archaccord /> },
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
