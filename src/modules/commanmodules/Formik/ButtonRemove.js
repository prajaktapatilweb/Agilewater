import React from 'react';
import { IconButton, Grid, Fab } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function ButtonRemove(props) {
  return (
    <>
      <Grid item >
        <IconButton
          // type='button'
          size='small'
          // variant='outlined'
          color='warning'
          sx={{ m: 0 }}
          onClick={() => props.remove(props.index)}
        >
          {/* <Fab size="small" color="secondary" aria-label="add"> */}
          <ClearIcon />
          {/* </Fab> */}
          {/* <ClearIcon /> */}
        </IconButton>
      </Grid>
    </>
  );
}

export default ButtonRemove;
