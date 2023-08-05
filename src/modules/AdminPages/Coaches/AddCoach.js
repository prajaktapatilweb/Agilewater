import {Box, Card, Container} from '@mui/material';
import React from 'react';
import TopHeading from '../TopHeading';
import AddCoachForm from './AddCoachForm';

export default function AddCoach() {
  return (
    <>
      <TopHeading title='Add New Coach' />
      <Container container display='flex' sx={{width: '100%'}}>
        <Box
          display='flex'
          sx={{mt: {xs: 2, xl: 2}, boxShadow: 10, borderRadius: 5}}
        >
          {/* <SignupJwtAuth /> */}
          <AddCoachForm />
        </Box>
      </Container>
    </>
  );
}
