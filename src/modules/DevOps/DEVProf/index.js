import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import DevProfinfo from './DevProfinfo';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function DEVProf() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/devprof.webp'
        heading='DevOps Professional Certification'
        list1={[
          'A stepping-stone to the EXIN DevOps Master certification',
          'Three ways of DevOps Adoption',
          'Flow, Feedback & Continual Learning and Experimentation, Information Security and Change Management',

        ]}
        videosrc=''

      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 2 }}>
              <DevProfinfo />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
