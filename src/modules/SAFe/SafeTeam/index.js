import React from 'react';
import Innerlink from 'modules/commanmodules/Innerlink';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import VideoMain from 'modules/commanmodules/VideoMain';
import Testcard from 'modules/commanmodules/TestCard';
import { testList1 } from 'modules/Constant/OthershortConst';
import SafeTeaminfo from './SafeTeaminfo';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { courseList2 } from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';
import SafeTeamaccord from './SafeTeamaccord';
import LabTabs from 'modules/commanmodules/LabTabs';

export default function SafeTeam() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/safelogo/SP.webp'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='SAFe 6.0 For Teams Certification'
        list1={[
          '2 Days of Classroom / Online Training',
          '100% Assured Results',
          'Trained by experienced SPC 6.0 SAFe Consultant',
          '1 year membership to the SAFe Community Platform',
          'Insightful Study Material',
        ]}
        videosrc='https://www.youtube.com/watch?v=-M-R3Lc-V74'
      />


      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 5 }}>
              <LabTabs data={[
                { label: 'Overview', panelData: <SafeTeaminfo /> },
                { label: 'FAQ', panelData: <SafeTeamaccord /> },
                { label: 'Testimonials', panelData: 'Item ewe' },
                { label: 'FreeCourses', panelData: 'Item ewe' }
              ]} />

              <Discussion></Discussion>
            </AppCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <Testcard data={testList1} />
            <RelatedCourses data={courseList2}></RelatedCourses>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
