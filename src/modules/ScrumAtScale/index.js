import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import AtScaleinfo from './AtScaleinfo';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { atscale } from 'modules/Constant/Relatecoursedata';
import Atscaledownload from './Atscaledownload';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import { testList2 } from 'modules/Constant/OthershortConst';
import Testcard from 'modules/commanmodules/TestCard';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';
import LabTabs from 'modules/commanmodules/LabTabs';
import AtScaleaccord from './AtScaleaccord';

export default function ScrumAtScale() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/ScrumatScale.webp'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='Scrum@Scale Practitioner Certification Classroom / Online Training'
        list1={[

          '2 Days of Classroom Training',
          ' 100% Assured Results',
          'Internationally Acclaimed Trainer',
          'Insightful Study Material',
          'Small Batch Size',
        ]}
        videosrc='https://www.youtube.com/watch?v=rB9dlx8V480&t=2s'
      />
      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard>
              <LabTabs data={[
                { label: 'Overview', panelData: <AtScaleinfo /> },
                { label: 'FAQ', panelData: <AtScaleaccord /> },
                { label: 'Testimonials', panelData: 'Item ewe' },
                { label: 'FreeCourses', panelData: 'Item ewe' }
              ]} />

            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>

            <Testcard data={testList2} />
            <RelatedCourses data={atscale} />
            <Atscaledownload />
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>

          </Grid>

        </Grid>
      </Container>
    </div>
  );
}
