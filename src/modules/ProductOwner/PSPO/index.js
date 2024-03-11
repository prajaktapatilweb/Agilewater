import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import PSPOinfo from './PSPOinfo';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import VideoMain from 'modules/commanmodules/VideoMain';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';
import PSPOaccord from './PSPOaccord';
import LabTabs from 'modules/commanmodules/LabTabs';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function PSPO() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/pologo/pspo1.webp'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading=' PROFESSIONAL SCRUM PRODUCT OWNER™ I'
        list1={[
          '2 Days of Classroom / Online Training',
          '100% Assured Results',
          'Internationally Acclaimed Trainer',
          'Insightful Study Material',
          'Small Batch Size',
        ]}
        videosrc='https://www.youtube.com/watch?v=B_CaH1XBhYQ'
      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard>
              <LabTabs data={[
                { label: 'Overview', panelData: <PSPOinfo /> },
                { label: 'FAQ', panelData: <PSPOaccord /> },
                { label: 'Testimonials', panelData: 'Item ewe' },
                { label: 'FreeCourses', panelData: 'Item ewe' }
              ]} />

            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <Atscaledownload />
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
