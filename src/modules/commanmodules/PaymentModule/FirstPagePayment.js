import {AppCard, AppScrollbar} from '@crema';
import {Group, Person} from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import {FaMinus, FaPlus, FaRupeeSign} from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function FirstPagePayment({data, open, onClose}) {
  const [regNumber, setRegNumber] = React.useState({EarlyBird: 0, Regular: 0});
  const sumPeoples = Object.values(regNumber).reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  // Object.entries(regNumber).map(item=>
  //   item.)
  let Amount = 0;
  data?.PaymentTypes?.map((item) => {
    Amount +=
      item.Amount *
      (regNumber[item.ConcessionType] ? regNumber[item.ConcessionType] : 0);
  });
  // const Amount = (regNumber)=>{
  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          width: '100%',
        },
        '& .MuiDialogContent-root': {
          overflowY: 'hidden',
          paddingLeft: 0,
          paddingRight: 0,
        },
      }}
      open={open}
      onClose={onClose}
      fullWidth
    >
      <DialogTitle>
        <Typography variant='h1' id='alert-dialog-title' color='primary'>
          Registration
        </Typography>
      </DialogTitle>
      <AppScrollbar
        sx={{
          height: '100%',
          minHeight: '400px',
          maxHeight: '500px',
        }}
      >
        {/* <FirstPagePayment data={row} /> */}
        <Box sx={{backgroundColor: 'darkgrey', px: 7, py: 4}}>
          <Typography variant='h3'>
            {data.CourseName} {data.Place}
          </Typography>
          <Typography>
            {data.Date} {data.Time}
          </Typography>
        </Box>
        {data?.PaymentTypes?.map((item, i) => (
          <PaymentType
            key={i}
            item={item}
            regNumber={regNumber}
            setRegNumber={setRegNumber}
          />
        ))}
        {/* <Box sx={{backgroundColor: 'white'}}>
          <pre>{JSON.stringify(regNumber, null, 2)}</pre>
        </Box> */}
      </AppScrollbar>
      <DialogActions disableSpacing sx={{backgroundColor: 'darkblue', p: 3}}>
        {/* <Grid container sx={{border: '1px solid red'}}> */}
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{width: '100%'}}
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={5}
            divider={<Divider orientation='vertical' flexItem />}
          >
            <Stack direction='row' spacing={1} alignItems='center'>
              <FaRupeeSign color='white' />
              <Typography color='white'>{Amount}</Typography>
            </Stack>
            <Stack direction='row' spacing={1} alignItems='center'>
              <Group sx={{color: 'white'}} />
              <Typography color='white'>{sumPeoples} </Typography>
            </Stack>
          </Stack>
          <Button color='primary' variant='contained' type='submit'>
            Pay Now
          </Button>
        </Stack>
        {/* </Grid> */}
      </DialogActions>
    </Dialog>
  );
}
FirstPagePayment.propTypes = {
  data: PropTypes.Object,
  open: PropTypes.bool,
  onClose: PropTypes.function,
};

export function PaymentType({item, regNumber, setRegNumber}) {
  const [displayButton, setDisplayButton] = React.useState(true);
  return (
    <>
      <Stack direction='row' justifyContent='space-between' sx={{px: 7, py: 2}}>
        <Stack spacing={2} direction='column'>
          <Typography variant='h2'>{item.ConcessionType}</Typography>
          <Stack direction='row' alignItems='center' gap={1}>
            <FaRupeeSign />
            <Typography variant='h3'>{item.Amount}</Typography>
          </Stack>
        </Stack>
        {displayButton && regNumber[item.ConcessionType] === 0 ? (
          <Button
            size='large'
            sx={{px: 9}}
            variant='outlined'
            onClick={() => (
              setDisplayButton(false),
              setRegNumber((prevState) => ({
                ...prevState,
                [item.ConcessionType]: 1,
              }))
            )}
          >
            Add
          </Button>
        ) : (
          <Stack
            direction='row'
            spacing={4}
            alignItems='center'
            sx={{
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 2,
              p: 3,
            }}
          >
            <FaMinus
              fontSize='large'
              onClick={() =>
                setRegNumber((prevState) => ({
                  ...prevState,
                  [item.ConcessionType]:
                    regNumber[item.ConcessionType] === 0
                      ? 0
                      : regNumber[item.ConcessionType] - 1,
                }))
              }
            />
            <Typography variant='h2'>
              {regNumber[item.ConcessionType]}
            </Typography>
            <FaPlus
              fontSize='large'
              onClick={() =>
                setRegNumber((prevState) => ({
                  ...prevState,
                  [item.ConcessionType]: regNumber[item.ConcessionType] + 1,
                }))
              }
            />
          </Stack>
        )}
      </Stack>
      <Divider />
    </>
  );
}
PaymentType.propTypes = {
  item: PropTypes.Object,
  regNumber: PropTypes.Object,
  setRegNumber: PropTypes.function,
};
