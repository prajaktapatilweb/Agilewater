import React from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import HeroSasm from './HeroSasm';
import Safeadvinfo from './Safeadvinfo';
import { AppCard } from '@crema';
import MainSafeadvaccord from './MainSafeadvaccord';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import Innerlink from 'modules/commanmodules/Innerlink';
import { courseList2 } from 'modules/Constant/Relatecoursedata';
import { testList1 } from 'modules/Constant/OthershortConst';
import Testcard from 'modules/commanmodules/TestCard';
import VideoMain from 'modules/commanmodules/VideoMain';
import EnquiryForm from 'modules/Forms/EnquiryForm';
import Discussion from 'modules/Discussion';
import EnquiryFormik from 'modules/Forms/EnquiryFormik';

export default function SafeAdvScrumMaster() {
  return (
    <div>
      <HeroSasm />
      <Innerlink />
      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>

            <EnquiryForm AllowedFieldArray={['']} />
            <AppCard sxStyle={{ p: 5 }}>
              <Safeadvinfo />
              <MainSafeadvaccord />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <VideoMain
              links='https://www.youtube.com/watch?v=-M-R3Lc-V74'
              videoPromo={'sd'}
            ></VideoMain>
            <Testcard data={testList1} />
            <RelatedCourses data={courseList2} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
