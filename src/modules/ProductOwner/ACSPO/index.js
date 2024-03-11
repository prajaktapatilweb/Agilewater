import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import ACSPOinfo from './ACSPOinfo';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';
import LabTabs from 'modules/commanmodules/LabTabs';

export default function ACSPO() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/pologo/ACSPO.webp'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='Advanced Certified Scrum Product Owner'
        list1={[
          '2-day Advanced Level Course',
          'Manage multiple business initiatives',
          'Define a clear product vision',
          'Increase your credibility',
        ]}

        videosrc='https://www.youtube.com/watch?v=B_CaH1XBhYQ'
      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard>
              <LabTabs data={[
                { label: 'Overview', panelData: <ACSPOinfo /> },
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
