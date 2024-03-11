import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import DevMasterinfo from './DevMasterinfo';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function DEVMaster() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/devmaster.png'
        heading='DevOps Master Certification Training'
        list1={[
          'An advanced-level certification',
          '100% Assured Results',
          'Understanding of DevOps adoption, Planning, Requirements and Design, Development and Deployment, Operation and Scaling & End-of-life',
        ]}
        videosrc=''

      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 2 }}>
              <DevMasterinfo />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
