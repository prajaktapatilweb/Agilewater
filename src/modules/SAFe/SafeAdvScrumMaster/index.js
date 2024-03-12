import React from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import Safeadvinfo from './Safeadvinfo';
import { AppCard } from '@crema';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { courseList2 } from 'modules/Constant/Relatecoursedata';
import { testList1 } from 'modules/Constant/OthershortConst';
import Testcard from 'modules/commanmodules/TestCard';
import EnquiryForm from 'modules/Forms/EnquiryForm';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';
import Safeadvaccord from './Safeadvaccord';
import LabTabs from 'modules/commanmodules/LabTabs';

export default function SafeAdvScrumMaster() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/safelogo/SASM3.webp'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='SAFe Advanced Scrum Master Certification'
        list1={[
          '2 Days of Classroom Training',
          '  100% Assured Results',
          'Insightful Study Material',
          'Small Batch Size',
        ]}
        videosrc='https://www.youtube.com/watch?v=-M-R3Lc-V74'
      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>

            <EnquiryForm AllowedFieldArray={['']} />
            <AppCard>
              <LabTabs data={[
                { label: 'Overview', panelData: <Safeadvinfo /> },
                { label: 'FAQ', panelData: <Safeadvaccord /> },
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
