import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from './ListItem';
import AppInfoView from '@crema/core/AppInfoView';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import Image from 'next/image';

const CoachProfile = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
      {DataTransfer ?
        <Grid container>
          {data.map(user =>
            <Grid lg={4}><ListItem user={user} key={user.id} /></Grid>
          )}
        </Grid>
        : null}

      <AppInfoView />
    </Container >
  );
};

export default CoachProfile;
