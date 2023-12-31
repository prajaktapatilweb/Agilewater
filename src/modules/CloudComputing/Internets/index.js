import React from 'react';
import Herointernets from './Herointernets';
import Innerlink from 'modules/commanmodules/Innerlink';
import {Container, Grid} from '@mui/material';
import {AppCard} from '@crema';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import {freecourseList} from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import {safeadvList} from 'modules/Constant/Relatecoursedata';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import Internetsinfo from './Internetsinfo';
import Discussion from 'modules/Discussion';

export default function Internets() {
  return (
    <div>
      <Herointernets />
      <Innerlink></Innerlink>
      <Container sx={{maxWidth: {xl: 1450}, marginTop: 10}}>
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{p: 5}}>
              <Internetsinfo />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <Atscaledownload />
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
