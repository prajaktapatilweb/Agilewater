import {
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React, {useEffect} from 'react';
import TopHeading from '../TopHeading';
import CouponPage from './CouponPage';
import {useState} from 'react';
import {AppCard} from '@crema';
import AddCouponCodeForm from './AddCouponCodeForm';
import {useDispatch, useSelector} from 'react-redux';
import {onGetCouponList} from 'redux/actions';
import CloseIcon from '@mui/icons-material/Close';
// import AddCourseForm from './AddCourseForm';

export default function AddCourse() {
  const [open, setOpen] = React.useState(false);
  const [selectedCoupon, setselectedCoupon] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [dialogaction, setDialogaction] = React.useState('green');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetCouponList());
  }, [dispatch]);
  const CouponList = useSelector((state) => state?.dashboard?.couponlist?.List);
  console.log('SSSS', CouponList);
  return (
    <>
      <TopHeading title='Discount Coupon Code' />
      <Container container display='flex' sx={{width: '100%'}}>
        <Box
          display='flex'
          sx={{mt: {xs: 2, xl: 2}, boxShadow: 10, borderRadius: 5}}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{my: 3}}>
              <CouponPage
                rows={CouponList}
                setOpen={setOpen}
                setselectedCoupon={setselectedCoupon}
              />
            </Grid>
            <Grid item xs={12} sx={{m: 3}}>
              <Button
                variant='contained'
                onClick={() => {
                  setOpen(true);
                  setDialogaction('blue');
                  setselectedCoupon('')
                }}
              >
                <Typography variant='h2'>
                  Add New Disocunt Coupon Codes
                </Typography>
              </Button>
            </Grid>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle
                sx={{color: 'white', backgroundColor: `${dialogaction}`}}
              >
                <Typography variant='h1'>
                  {dialogaction === 'blue' ? 'Add New ' : 'Edit '}
                  Discount Coupon Code
                </Typography>
              </DialogTitle>
              <IconButton
                aria-label='close'
                sx={{
                  position: 'absolute',
                  right: 4,
                  top: 4,
                  color: 'white',
                }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent>
                <AddCouponCodeForm
                  CouponIDDetailData={
                    CouponList?.filter(
                      (elem) => elem.CouponID === selectedCoupon,
                    )[0]
                  }
                  closefn={handleClose}
                />
              </DialogContent>
              {/* <DialogActions>
                <Button onClick={handleClose}>Ok</Button>
              </DialogActions> */}
            </Dialog>
            {/* )} */}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
