import React, { useEffect } from 'react';
import Countup from './Countup';
import { Box, Card, Container, Grid } from '@mui/material';
import CoachCoursecard from './CoachCoursecard';
import Registerform from './Registerform';
import Testimonial from './Testimonial';
import Certcourse from './Certcourse';
import Indexclient from './Indexclient';
import Paralloxsec from './Paralloxsec';
import Herohome from './Herohome';




export default function indexfile2() {



  return (
    <div>
      <Herohome></Herohome>
      <Countup />
      <Certcourse></Certcourse>
      <Registerform></Registerform>

      <Container>
        {/* <Changingtabs /> */}

        <CoachCoursecard />

      </Container>

      {/* <HomeFeature></HomeFeature> */}
      <Testimonial></Testimonial>
      {/* <VideoCall></VideoCall> */}

      <Paralloxsec></Paralloxsec>
      <Indexclient></Indexclient>



      {/* <Hero /> */}


    </div>
  );
}
