import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { AppCard } from '@crema';
import SMinfo from './SMinfo';
import VideoMain from 'modules/commanmodules/VideoMain';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import Testcard from 'modules/commanmodules/TestCard';
import { testList2 } from 'modules/Constant/OthershortConst';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';
import LabTabs from 'modules/commanmodules/LabTabs';

export default function ScrumMaster() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/smlogo/SM.webp'
        heading='Scrum Master'
        list1={[

          '2 Days of Classroom / Online Training',
          ' 100% Assured Results',
          'Internationally Acclaimed Trainer',
          'Insightful Study Material',
          'Small Batch Size',

        ]}
        videosrc='https://www.youtube.com/watch?v=rB9dlx8V480&t=2s'
      />
      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <h2>
          Scrum Master & Product Owner Certifications In Just 1 Online Training!
        </h2>
        <Typography variant='h3' sx={{ color: '#2e6da4' }}>
          {' '}
          Get Certified as Scrum Master and Product Owner, endorsed by Scrum
          Inc. and Dr. Jeff Sutherland, the co-creator of Scrum!
        </Typography>
        <br></br>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard>
              <LabTabs data={[
                { label: 'Overview', panelData: <SMinfo /> },
                { label: 'Testimonials', panelData: 'Item ewe' },
                { label: 'FreeCourses', panelData: 'Item ewe' }
              ]} />

            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>

            <Testcard data={testList2} />
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <br></br>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
