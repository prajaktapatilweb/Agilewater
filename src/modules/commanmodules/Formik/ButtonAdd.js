import React from 'react';
import { IconButton, Grid, useMediaQuery, Fab } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@mui/icons-material/Add';

function ButtonAdd(props) {
  return (
    <>
      <Grid item >
        <IconButton
          type='button'
          // variant='outlined'
          color='success'
          sx={{ m: 0 }}
          onClick={() => props.push('')}
        >
          {/* <AddCircleOutlineIcon /> */}
          {/* <Fab size="small" color="primary" aria-label="add"> */}
          <AddIcon />
          {/* </Fab> */}
        </IconButton>
      </Grid>
    </>
  );
}

export default ButtonAdd;
