import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import PSM1info from './PSM1info';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import Testcard from 'modules/commanmodules/TestCard';
import { testList2 } from 'modules/Constant/OthershortConst';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';
import LabTabs from 'modules/commanmodules/LabTabs';
import PSMaccord from './PSMaccord';

export default function PSM1() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/smlogo/PSM1.webp'
        heading='Professional Scrum Master 1 '
        list1={[
          '2-day Advanced Level Course',
          'Clear understanding of the Scrum framework',
          'Scrum Theory and first principles',
          'Product Delivery with Scrum.',
          'The role of Scrum Master.',

        ]}
        videosrc='https://www.youtube.com/watch?v=rB9dlx8V480&t=2s'
      />
      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard>
              <LabTabs data={[
                { label: 'Overview', panelData: <PSM1info /> },
                { label: 'FAQ', panelData: <PSMaccord /> },
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
