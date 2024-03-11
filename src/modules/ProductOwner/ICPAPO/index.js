import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import ICPAPOinfo from './ICPAPOinfo';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Testcard from 'modules/commanmodules/TestCard';
import { testList1 } from 'modules/Constant/OthershortConst';
import Discussion from 'modules/Discussion';
import ICPAPOaccord from './ICPAPOaccord';
import LabTabs from 'modules/commanmodules/LabTabs';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function ICPAPO() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/pologo/ICPAPO.png'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='Value-Driven Product Ownership'
        list1={[
          'Applied, hands-on learning',
          '100% Assured Results',
          'Applied, practical education',
          'Utilising the newest virtual collaboration tools',
          'Insightful Study Material',
        ]}
        videosrc='https://www.youtube.com/watch?v=B_CaH1XBhYQ'
      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 5 }}>
              <LabTabs data={[
                { label: 'Overview', panelData: <ICPAPOinfo /> },
                { label: 'FAQ', panelData: <ICPAPOaccord /> },
                { label: 'Testimonials', panelData: 'Item ewe' },
                { label: 'FreeCourses', panelData: 'Item ewe' }
              ]} />

            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <Testcard data={testList1} />
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
