import React from 'react';
import HeroDevMaster from './HeroDevMaster';
import Innerlink from 'modules/commanmodules/Innerlink';
import {Container, Grid} from '@mui/material';
import {AppCard} from '@crema';
import DevMasterinfo from './DevMasterinfo';
import Discussion from 'modules/Discussion';

export default function DEVMaster() {
  return (
    <div>
      <HeroDevMaster />
      <Innerlink></Innerlink>
      <Container sx={{maxWidth: {xl: 1450}, marginTop: 10}}>
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{p: 5}}>
              <DevMasterinfo />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
