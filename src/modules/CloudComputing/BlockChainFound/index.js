import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import BlockFinfo from './BlockFinfo';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function BlockChainFound() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/Blockchain-Foundation.png'
        heading='Blockchain Foundation'
        list1={[
          'Explain how a blockchain works',
          '100% Assured Results',
          'Blockchain Innovations',
          'Blockchain Challenges .',

        ]}
        videosrc=''
      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 2 }}>
              <BlockFinfo />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <Atscaledownload></Atscaledownload>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
