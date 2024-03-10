import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import AdvScruminfo from './AdvScruminfo';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Testcard from 'modules/commanmodules/TestCard';
import { testList2 } from 'modules/Constant/OthershortConst';
import Discussion from 'modules/Discussion';
import LabTabs from 'modules/commanmodules/LabTabs';
import AdvSMaccord from './AdvSMaccord';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function AdvScrumMaster() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/smlogo/ACSM1.webp'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='Advanced Certified Scrum Master Training'
        list1={[
          '2 Days of Classroom / Online Training',
          ' 100% Assured Results',
          'Build on your foundational knowledge',
          'Self-paced training to suit your schedule'
        ]}
        videosrc='https://www.youtube.com/watch?v=rB9dlx8V480&t=2s'
      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard>
              <LabTabs data={[
                { label: 'Overview', panelData: <AdvScruminfo /> },
                { label: 'FAQ', panelData: <AdvSMaccord /> },
                { label: 'Testimonials', panelData: 'Item ewe' },
                { label: 'FreeCourses', panelData: 'Item ewe' }
              ]} />

            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <Testcard data={testList2} />
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
