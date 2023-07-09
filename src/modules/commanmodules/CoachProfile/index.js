import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem1 from './ListItem';
import AppInfoView from '@crema/core/AppInfoView';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { AppGridContainer } from '@crema';

const CoachProfile = ({ data }) => {
  console.log('sss', data)

  return (
    <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
      {DataTransfer ? (
        // <Grid container spacing={4} alignItems='stretch'>
        <AppGridContainer >
          {
            data.map((user, id) => (
              <Grid item xl={4} lg={6} md={6} sm={12} sx={{ display: 'flex' }}>
                <ListItem1 user={user} key={id} />
              </Grid>
            ))
          }
        </AppGridContainer>
        // </Grid>
      ) : null
      }

      <AppInfoView />
    </Container >
  );
};

export default CoachProfile;
