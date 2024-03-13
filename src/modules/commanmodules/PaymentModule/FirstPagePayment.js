import {AppCard, AppScrollbar} from '@crema';
import {Group, Person} from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import {FaMinus, FaPlus, FaRupeeSign} from 'react-icons/fa';
import PropTypes from 'prop-types';
import PaymentModule from '.';
import {Form, Formik} from 'formik';
import * as yup from 'yup';
import AppTextField from '@crema/core/AppFormComponents/AppTextField';
import {Fonts} from 'shared/constants/AppEnums';
import axios from 'axios';

export default function FirstPagePayment({data, open, onClose}) {
  // const [regNumber, setRegNumber] = React.useState({EarlyBird: 0, Regular: 0});
  const [regDetail, setRegDetail] = React.useState([]);
  const [PartcipantDetails, setPartcipantDetail] = React.useState([]);
  const [pageno, setPageNo] = React.useState(1);
  // const [DiscountCouponCode, setDiscountCouponCode] = React.useState('')
  const [couponCodeDetail, setCouponCodeDetail] = React.useState({
    CouponApplied: false,
    FinalAmount: 0,
    Code: '',
  });
  const [GSTDetail, setGSTDetail] = React.useState({
    isGSTNo: false,
    CompanyName: '',
    GSTN: '',
  });
  const numberOfExtraPages = 2;
  // const sumPeoples = Object.values(regNumber).reduce((accumulator, value) => {
  //   return accumulator + value;
  // }, 0);
  const sumPeoples = regDetail?.reduce((accumulator, object) => {
    return accumulator + object.RegisteredNumber;
  }, 0);
  function clearAll() {
    setRegDetail([]);
    setPartcipantDetail([]);
    setPageNo(1);
    setCouponCodeDetail();
    // onClose();
  }
  let Amount = 0;
  // data?.PaymentTypes?.map((item) => {
  //   Amount +=
  //     item.Amount *
  //     (regNumber[item.ConcessionType] ? regNumber[item.ConcessionType] : 0);
  // });
  regDetail?.map((item) => {
    Amount += item.Amount * item.RegisteredNumber;
  });
  Amount = couponCodeDetail?.CouponApplied
    ? couponCodeDetail.FinalAmount
    : Amount;
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
      onClose={() => (clearAll(), onClose())}
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
        {pageno === 1 && (
          <>
            <Typography variant='h2' p={2} align='center'>
              <strong>Select Payment Type</strong>
            </Typography>
            {data?.PaymentTypes?.map((item, i) => (
              <PaymentType
                key={i}
                item={item}
                regDetail={regDetail}
                setRegDetail={setRegDetail}
              />
            ))}
          </>
        )}

        {[...Array(sumPeoples).keys()].map(
          (el, i) =>
            pageno === i + numberOfExtraPages && (
              <>
                <Typography variant='h2' p={2} align='center'>
                  <strong>Participants # {el + 1} Details </strong>
                </Typography>
                <EachParticipantDetail
                  PartcipantDetails={PartcipantDetails}
                  setPartcipantDetails={setPartcipantDetail}
                  setPageNo={setPageNo}
                  pageno={pageno}
                />
              </>
            ),
        )}
        {pageno === sumPeoples + numberOfExtraPages && (
          <>
            <Typography variant='h2' p={2} align='center'>
              <strong>Verify Details</strong>
            </Typography>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              px={5}
            >
              <Stack spacing={2} direction='column'>
                <Typography variant='h4'>
                  <strong>Total Amount : </strong>
                </Typography>
              </Stack>
              <Stack
                direction='row'
                alignItems='center'
                justifyContent='flex-end'
              >
                <FaRupeeSign />
                <Typography variant='h3' p={2}>
                  <strong>{Amount} </strong>
                </Typography>
              </Stack>
            </Stack>

            <Stack direction='row' mx={6} spacing={2}>
              <TextField
                label='Discount Coupon if available'
                value={couponCodeDetail?.Code}
                disabled={couponCodeDetail?.CouponApplied}
                variant='outlined'
                sx={{width: '50%'}}
                onChange={(e) => {
                  setCouponCodeDetail({
                    CouponApplied: false,
                    FinalAmount: 0,
                    Code: e.target.value,
                  });
                }}
              />
              <Button
                variant='contained'
                disabled={couponCodeDetail?.CouponApplied}
                onClick={async () => {
                  console.log(data.CourseID, regDetail, PartcipantDetails);
                  setCouponCodeDetail({
                    CouponApplied: true,
                    FinalAmount: 1000,
                    Code: couponCodeDetail.Code,
                  });
                  const result = await axios.post(
                    'http://localhost:4000/payment/verifypayment',
                    {
                      CourseID: data.CourseID,
                      regDetail: regDetail,
                      PartcipantDetails: PartcipantDetails,
                    },
                  );
                  console.log('Resuult',result)
                }}
              >
                Apply
              </Button>
              <pre>{JSON.stringify(couponCodeDetail, null, 2)}</pre>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              px={5}
            >
              <Stack spacing={2} direction='column'>
                <Typography variant='h4'>
                  <strong>GST: </strong>
                </Typography>
              </Stack>
              <Stack
                direction='row'
                alignItems='center'
                justifyContent='flex-end'
              >
                <FaRupeeSign />
                <Typography variant='h3' p={2}>
                  <strong>{Amount * 0.18} </strong>
                </Typography>
              </Stack>
            </Stack>
            {/* <pre>{JSON.stringify(PartcipantDetails, null, 2)}</pre> */}
            <Stack direction='column' spacing={3} m={5}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={GSTDetail.isGSTNo}
                    onChange={() =>
                      setGSTDetail({
                        isGSTNo: !GSTDetail.isGSTNo,
                        CompanyName: '',
                        GSTN: '',
                      })
                    }
                  />
                }
                label='I have GST Number'
              />
              {GSTDetail.isGSTNo && (
                <Stack direction='row' spacing={2}>
                  <TextField
                    label='Company Name'
                    value={GSTDetail.CompanyName}
                    variant='outlined'
                    sx={{width: '50%'}}
                    onChange={(e) =>
                      setGSTDetail({...GSTDetail, CompanyName: e.target.value})
                    }
                  />
                  <TextField
                    label='GST Number'
                    value={GSTDetail.GSTN}
                    variant='outlined'
                    sx={{width: '50%'}}
                    onChange={(e) =>
                      setGSTDetail({...GSTDetail, GSTN: e.target.value})
                    }
                  />
                </Stack>
              )}
            </Stack>
          </>
        )}
        {/* <Box sx={{backgroundColor: 'white'}}>
          <pre>{JSON.stringify(GSTDetail, null, 2)}</pre>
        </Box> */}
      </AppScrollbar>

      <Grid container justifyContent='space-between' p={3}>
        {pageno !== sumPeoples + numberOfExtraPages && (
          <Button
            disabled={sumPeoples === 0 ? true : false}
            color='primary'
            variant='contained'
            onClick={() => clearAll()}
          >
            Clear All
          </Button>
        )}
        {pageno === 1 && (
          <Button
            disabled={sumPeoples === 0 ? true : false}
            color='primary'
            variant='contained'
            onClick={() => setPageNo(pageno + 1)}
          >
            Proceed
          </Button>
        )}
      </Grid>

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
              <Typography color='white'>
                {pageno === sumPeoples + numberOfExtraPages
                  ? Amount * 1.18
                  : Amount}
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1} alignItems='center'>
              <Group sx={{color: 'white'}} />
              <Typography color='white'>{sumPeoples} </Typography>
            </Stack>
          </Stack>
          <PaymentModule
            CourseID={data.CourseID}
            DiscountCoupon={null}
            RegisterationDetails={regDetail}
            PartcipantDetails={PartcipantDetails}
            GSTDetail={GSTDetail}
            clearAll={clearAll}
            disableOp={
              pageno === sumPeoples + numberOfExtraPages ? false : true
            }
          />
          {/* </Button> */}
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

export function PaymentType({item, regDetail, setRegDetail}) {
  const [displayButton, setDisplayButton] = React.useState(true);
  const regisDetailIndex = regDetail.findIndex(
    (item1) => item1.PayType === item.ConcessionType,
  );

  function handleDecrement(operation) {
    const NextNumber = regDetail.map((item2) => {
      if (item2.PayType === item.ConcessionType) {
        return {
          ...item2,

          RegisteredNumber:
            operation === 'Add'
              ? item2.RegisteredNumber + 1
              : item2.RegisteredNumber <= 0
              ? 0
              : item2.RegisteredNumber - 1,
        };
      } else {
        return item2;
      }
    });
    // Re-render with the new array
    console.log('ssdd', NextNumber);
    setRegDetail(NextNumber);
  }
  return (
    <>
      <Stack direction='row' justifyContent='space-between' sx={{px: 7, py: 2}}>
        <Stack spacing={2} direction='column'>
          <Typography variant='h2'>{item.ConcessionType}</Typography>
          <Stack direction='row' alignItems='center' gap={1}>
            <FaRupeeSign />
            <Typography variant='h3'>{item.Amount} </Typography>
          </Stack>
        </Stack>
        {regDetail?.findIndex(
          (item2) => item2.PayType === item.ConcessionType,
        ) === -1 ? (
          // && regDetail[regisDetailIndex]?.RegisteredNumber === 0
          <Button
            size='large'
            sx={{px: 9}}
            variant='outlined'
            onClick={() => (
              setDisplayButton(false),
              setRegDetail(
                regDetail.some((item2) => item2.PayType === item.ConcessionType)
                  ? [...regDetail]
                  : [
                      ...regDetail,
                      {
                        PayType: item.ConcessionType,
                        PayID: item._id,
                        Amount: item.Amount,
                        RegisteredNumber: 1,
                      },
                    ],
              )
              // setRegNumber((prevState) => ({
              //   ...prevState,
              //   [item.ConcessionType]: 1,
              // }))
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
              onClick={
                () => handleDecrement('Minus')
                // setRegNumber((prevState) => ({
                //   ...prevState,
                //   [item.ConcessionType]:
                //     regNumber[item.ConcessionType] === 0
                //       ? 0
                //       : regNumber[item.ConcessionType] - 1,
                // }))
              }
            />
            <Typography variant='h2'>
              {/* {regNumber[item.ConcessionType]} */}
              {regDetail[regisDetailIndex]?.RegisteredNumber}
            </Typography>
            <FaPlus
              fontSize='large'
              onClick={
                () => handleDecrement('Add')
                // setRegNumber((prevState) => ({
                //   ...prevState,
                //   [item.ConcessionType]: regNumber[item.ConcessionType] + 1,
                // }))
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
  regDetail: PropTypes.Array,
  setRegDetail: PropTypes.function,
};

export function EachParticipantDetail({
  PartcipantDetails,
  setPartcipantDetails,
  setPageNo,
  pageno,
}) {
  const validationSchema = yup.object({
    Name: yup.string().required('Name is required !'),
    Phone: yup
      .string()
      .required('Enter 10 digit valid mobile number')
      .matches(/^[0-9]+$/, 'Only digits are allowed for this field ')
      .length(10, 'Only 10 digit mobile number'),
    Email: yup
      .string()
      .email('Not valid Email id ')
      .required('Email ID is required !'),
  });
  const onSubmit = async (data, {setSubmitting}) => {
    console.log('Signup Form Submission', data);
    setSubmitting(true);
    setPartcipantDetails((prevArray) => [...prevArray, data]);
    setPageNo(pageno + 1);
    setSubmitting(false);
  };
  return (
    <AppCard>
      <Formik
        initialValues={{Name: '', Email: '', Phone: ''}}
        // validationSchema={validationSchema}
        validateOnChange={true}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({values, errors, setFieldValue, isSubmitting}) => (
          // {/* {(data, errors, isValidating, isSubmitting) => ( */}
          <Form style={{textAlign: 'left'}} noValidate autoComplete='off'>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            <Grid container sx={{mb: {xs: 4, xl: 5}}} spacing={2}>
              <Grid item xs={12}>
                <AppTextField
                  label='Name'
                  disabled={values.isSubmitting}
                  // name='Cost.Actual'
                  name='Name'
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={12}>
                <AppTextField
                  label='Email'
                  disabled={values.isSubmitting}
                  // name='Cost.Actual'
                  name='Email'
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={12}>
                <AppTextField
                  label='Phone'
                  disabled={values.isSubmitting}
                  // name='Cost.Actual'
                  name='Phone'
                  variant='outlined'
                />
              </Grid>
            </Grid>
            <Grid container justifyContent='right'>
              <Button
                variant='contained'
                color='primary'
                disabled={values.isValidating || values.isSubmitting}
                sx={{
                  minWidth: 160,
                  fontWeight: Fonts.REGULAR,
                  fontSize: 16,
                }}
                type='submit'
              >
                Save & Continue
              </Button>
            </Grid>
            <pre>{JSON.stringify(PartcipantDetails, null, 4)}</pre>
          </Form>
        )}
      </Formik>
    </AppCard>
  );
}
EachParticipantDetail.propTypes = {
  PartcipantDetails: PropTypes.Object,
  setPartcipantDetails: PropTypes.function,
  pageno: PropTypes.number,
  setPageNo: PropTypes.function,
};
