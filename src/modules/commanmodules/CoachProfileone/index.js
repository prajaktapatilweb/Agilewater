import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem1 from './Coachlist';
import AppInfoView from '@crema/core/AppInfoView';
import { Grid } from '@mui/material';
import { Container, Box } from '@mui/material';
import { AppGridContainer } from '@crema';
import Coachlist from './Coachlist';

const CoachProfileone = ({ data }) => {
  console.log('sss', data)

  return (

    <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>

      {DataTransfer ? (
        // <Grid container spacing={4} alignItems='stretch'>
        // <AppGridContainer>

        <Grid container>
          {
            data.map((user, id) => (

              <Grid item xl={3} lg={6} md={6} sm={6} xs={12} sx={{ display: 'flex' }}>
                <Coachlist user={user} key={id} />
              </Grid>

            ))
          }
        </Grid>


      ) : null
      }

      {/* <AppInfoView /> */}

    </Container >
  );
};

export default CoachProfileone;
