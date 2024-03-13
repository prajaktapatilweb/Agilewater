import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import {
  Divider,
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import {Formik, Field, Form} from 'formik';
import * as yup from 'yup';
import AppInfoView from '@crema/core/AppInfoView';
import Box from '@mui/material/Box';
import AppTextField from '@crema/core/AppFormComponents/AppTextField';
import {Fonts} from '../../../shared/constants/AppEnums';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IntlMessages from '@crema/utility/IntlMessages';
import CustomizedSelectFormik from 'modules/commanmodules/Formik/CustomizedSelectFormik';
import {CourseOptions, TitleOptions} from 'modules/Constant/CommanConst';
import DateTimePicker from '@mui/lab/DateTimePicker';
import moment from 'moment';
import {DatePicker} from '@mui/lab';
import {
  onGetCoachList,
  onGetIndivCourseData,
  onPostNewCourseData,
  onUpdateCourseData,
} from 'redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import CustomizedFieldArray from 'modules/commanmodules/Formik/CustomizedFieldArray';
import CustomizedFieldArray2TextBox from 'modules/commanmodules/Formik/CustomizedFieldArray2TextBox';

// Yup Form Validation
const validationSchema = yup.object({
  CourseName: yup.string().required(
    <>
      <IntlMessages id='course' /> required !
    </>,
  ),
  Time: yup.string().required(
    <>
      <IntlMessages id='Course.time' /> required !
    </>,
  ),
  Place: yup.string().required(
    <>
      <IntlMessages id='Course.place' /> required !
    </>,
  ),
  Trainer: yup.string().required(
    <>
      <IntlMessages id='Course.trainer' /> required !
    </>,
  ),
  ActualCost: yup.number().required(
    <>
      <IntlMessages id='Course.actualcost' /> required !
    </>,
  ),
  DiscountedCost: yup.number().required(
    <>
      <IntlMessages id='Course.discost' /> required !
    </>,
  ),
  StartDate: yup.date().required(
    <>
      <IntlMessages id='common.startDate' /> required !
    </>,
  ),
  // .max(new Date(), intl.formatMessage({ id: 'start_date.error.max' }))
  EndDate: yup
    .date()
    .required('It is required field')
    .when(['StartDate'], (StartDate, schema) => {
      return schema.test({
        test: (EndDate) => {
          if (!EndDate) return true;
          return EndDate >= StartDate;
        },
        message: 'Event Delete Date should be after the start date',
      });
    }),

  EventDeleteDate: yup
    .date()
    .required('It is required field')
    .when(['StartDate'], (StartDate, schema) => {
      return schema.test({
        test: (EventDeleteDate) => {
          if (!EventDeleteDate) return true;
          return EventDeleteDate >= StartDate;
        },
        message: 'Event Delete Date should be after the start date',
      });
    }),
  PaymentTypes: yup.array().of(
    yup.object({
      Amount: yup.string().required('It is required'),
      CloseDate: yup.date().required('It is required'),
      // DiscountCoupon: yup.array().of(
      //   yup.object({
      //     Title: yup.string().required('It is required'),
      //     Percentage: yup.string().required('It is required'),
      //   }),
      // ),
    }),
  ),
});

const AddCourseForm = ({CourseID, closefn}) => {
  console.log('sds', CourseID);
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState('');
  const [dialogaction, setDialogaction] = React.useState('');
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetIndivCourseData({CourseID}));
    dispatch(onGetCoachList());
  }, [dispatch]);
  const CoachList = useSelector((state) => state?.Coach?.Coachlist);
  console.log('RRRRRRR', CoachList);
  const TrainerList = [];
  CoachList?.map((item) =>
    TrainerList.push({
      key: item.CoachID,
      text: item.CoachName,
      value: `${item.CoachID}#${item.CoachName}`,
    }),
  );
  console.log('RRRRRRR', TrainerList);
  const CourseData = useSelector(
    (state) => state?.dashboard?.Coursedata?.CourseData,
  );
  console.log('Signup Form Submission', CourseData);

  const onSubmit = async (data, {setSubmitting, resetForm}) => {
    console.log('Signup Form Submission', data);
    // data.PaymentTypes[0].DiscountCoupon.map((item) => {
    //   item.Title = item.Title.toUpperCase();
    // });
    // data.PaymentTypes[1].DiscountCoupon.map((item) => {
    //   item.Title = item.Title.toUpperCase();
    // });
    console.log('Signup Form Submission', data);
    setSubmitting(true);
    CourseID
      ? dispatch(onUpdateCourseData({CourseID, data}))
      : dispatch(onPostNewCourseData({data, resetForm}));
    CourseID ? closefn() : null;
    setSubmitting(false);
  };
  const initialValues = {
    CourseName: CourseData?.CourseName || '',
    StartDate: CourseData?.StartDate || '',
    EndDate: CourseData?.EndDate || '',
    Time: CourseData?.Time || '9:30 am to 05:30 pm',
    ActualCost: CourseData?.ActualCost || '',
    DiscountedCost: CourseData?.DiscountedCost || '',
    Place: CourseData?.Place || '',
    Trainer: CourseData?.Trainer || '',
    EventDeleteDate: CourseData?.EventDeleteDate || '',
    PaymentTypes: [
      {
        ConcessionType: 'Early Bird',
        Amount: '',
        CloseDate: '',
        // DiscountCoupon: [{Title: '', Percentage: '', MaxTimeAppl: ''}],
      },
      {
        ConcessionType: 'Regular',
        Amount: '',
        CloseDate: '',
        // DiscountCoupon: [{Title: '', Percentage: '', MaxTimeAppl: ''}],
      },
    ],
  };
  CourseData?.PaymentTypes?.map((item, index) => {
    initialValues.PaymentTypes[index] = {};
    index === 0
      ? (initialValues.PaymentTypes[index].ConcessionType =
          item.ConcessionType || 'EarlyBird')
      : (initialValues.PaymentTypes[index].ConcessionType =
          CourseData?.PaymentTypes[index].ConcessionType || 'Regular');
    initialValues.PaymentTypes[index].Amount = item.Amount || '';
    initialValues.PaymentTypes[index].CloseDate = item.CloseDate || '';
    // initialValues.PaymentTypes[index].DiscountCoupon = [];
    // item.DiscountCoupon.map((item2, index2) => {
    //   initialValues.PaymentTypes[index].DiscountCoupon[index2] = {};
    //   initialValues.PaymentTypes[index].DiscountCoupon[index2].Title =
    //     item2.Title;
    //   initialValues.PaymentTypes[index].DiscountCoupon[index2].Percentage =
    //     item2.Percentage;
    //   initialValues.PaymentTypes[index].DiscountCoupon[index2].MaxTimeAppl =
    //     item2.MaxTimeAppl;
    // });
  });

  return (
    <Box sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
      {CourseID ? (
        <Typography variant='h1'>Update the data of {CourseID}</Typography>
      ) : null}
      <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', m: 8}}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={true}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {({
            values,
            errors,
            isValidating,
            touched,
            setFieldValue,
            isSubmitting,
          }) => (
            // {/* {(data, errors, isValidating, isSubmitting) => ( */}
            <Form style={{textAlign: 'left'}} noValidate autoComplete='off'>
              {/* <pre>{JSON.stringify(initialValues, null, 2)}</pre> */}
              <Grid container sx={{mb: {xs: 4, xl: 5}}} spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormControl sx={{width: '100%'}}>
                    <InputLabel id='demo-simple-select-label'>
                      <IntlMessages id='course' />
                    </InputLabel>
                    <Field
                      name='CourseName'
                      options={CourseOptions}
                      component={CustomizedSelectFormik}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormControl sx={{width: '100%'}}>
                    <InputLabel id='demo-simple-select-label'>
                      <IntlMessages id='Course.trainer' />
                    </InputLabel>
                    <Field
                      name='Trainer'
                      options={TrainerList}
                      component={CustomizedSelectFormik}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                </Grid>
                {/* *****************Dates of the event  Started*/}
                <Grid
                  container
                  justifyContent='space-between'
                  spacing={2}
                  p={2}
                >
                  {/* <DateTimePicker
                    autoOk
                    format='YYYY/MM/DD'
                    variant='inline'
                    inputVariant='outlined'
                    label={<IntlMessages id='common.startDate' />}
                    name='StartDate'
                    value={values.StartDate}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(value) => setFieldValue('StartDate', value)}
                  /> */}
                  <Grid item>
                    <DatePicker
                      autoOk
                      format='YYYY/MM/DD'
                      variant='inline'
                      inputVariant='outlined'
                      label={<IntlMessages id='common.startDate' />}
                      name='StartDate'
                      value={values.StartDate}
                      slotProps={{
                        textField: {
                          helperText: 'MM/DD/YYYY',
                        },
                      }}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(value) =>
                        setFieldValue(
                          'StartDate',
                          value,
                          // moment.utc(value).format('YYYY/MM/DD'),
                        )
                      }
                    />
                    {errors.StartDate ? (
                      <Typography color='red'>{errors.StartDate}</Typography>
                    ) : (
                      <Typography>MM/DD/YYYY</Typography>
                    )}
                  </Grid>
                  <Grid item>
                    <DatePicker
                      autoOk
                      format='YYYY/MM/DD'
                      variant='inline'
                      inputVariant='outlined'
                      label={<IntlMessages id='common.endDate' />}
                      name='EndDate'
                      value={values.EndDate}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(value) =>
                        setFieldValue(
                          'EndDate',
                          value,
                          // moment(value).format('YYYY/MM/DD'),
                        )
                      }
                    />
                    {errors.EndDate ? (
                      <Typography color='red'>{errors.EndDate}</Typography>
                    ) : (
                      <Typography>MM/DD/YYYY</Typography>
                    )}
                  </Grid>
                  <Grid item>
                    <DatePicker
                      autoOk
                      format='YYYY/MM/DD'
                      variant='inline'
                      inputVariant='outlined'
                      label={<IntlMessages id='common.delDate' />}
                      name='EventDeleteDate'
                      value={values.EventDeleteDate}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(value) =>
                        setFieldValue(
                          'EventDeleteDate',
                          value,
                          // moment(value).format('YYYY/MM/DD'),
                        )
                      }
                    />
                    {errors.EventDeleteDate ? (
                      <Typography color='red'>
                        {errors.EventDeleteDate}
                      </Typography>
                    ) : (
                      <Typography>MM/DD/YYYY</Typography>
                    )}
                  </Grid>
                </Grid>
                {/* *****************Dates of the event  Finished */}
                <Grid item xs={6} md={3}>
                  <AppTextField
                    type='number'
                    label={<IntlMessages id='Course.actualcost' />}
                    disabled={values.isSubmitting}
                    // name='Cost.Actual'
                    name='ActualCost'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <AppTextField
                    type='number'
                    label={<IntlMessages id='Course.discost' />}
                    name='DiscountedCost'
                    // name='`Cost`.Discounted'
                    disabled={values.isSubmitting}
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <AppTextField
                    label={<IntlMessages id='Course.time' />}
                    disabled={values.isSubmitting}
                    name='Time'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <AppTextField
                    label={<IntlMessages id='Course.place' />}
                    disabled={values.isSubmitting}
                    name='Place'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      '& .MuiInputBase-input': {
                        fontSize: 14,
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Divider
                sx={{borderBottomWidth: '3px', bgcolor: 'blue', mb: 3}}
              />
              {/* *****************Payment Related Information  */}
              <Grid item xs={12}>
                <Typography variant='h2' mb={4}>
                  Payment Related Information
                </Typography>
              </Grid>
              <Box sx={{border: '1px solid green', p: 5, borderRadius: 5}}>
                {/* *****************Payment Related Information  Started 1*/}
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>Early Bird Payment</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <AppTextField
                      type='number'
                      label={<IntlMessages id='Course.earlybirdcost' />}
                      disabled={values.isSubmitting}
                      name='PaymentTypes[0]Amount'
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DatePicker
                      autoOk
                      format='YYYY/MM/DD'
                      variant='inline'
                      inputVariant='outlined'
                      label={<IntlMessages id='Course.earlybirdenddate' />}
                      name='PaymentTypes[0]CloseDate'
                      value={values.PaymentTypes[0]?.CloseDate}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(value) =>
                        setFieldValue(
                          'PaymentTypes[0]CloseDate',
                          value,
                          // moment(value).format('YYYY/MM/DD'),
                        )
                      }
                    />
                    {errors?.PaymentTypes?.length > 0 ? (
                      <Typography color='red'>
                        {errors?.PaymentTypes[0]?.CloseDate}
                      </Typography>
                    ) : (
                      <Typography>MM/DD/YYYY</Typography>
                    )}
                  </Grid>
                  {/* <Grid item xs={12}>
                    <CustomizedFieldArray2TextBox
                      PTIndex={0}
                      arrayField='DiscountCoupon'
                      fieldName1='Coupon Code'
                      fieldName2='Applicable Percentage discount'
                      fieldName3='Maximum times Applicable'
                    />
                  </Grid> */}
                </Grid>
              </Box>
              {/* *****************Payment Related Information  Finished 1*/}
              <Divider
                sx={{borderBottomWidth: '3px', bgcolor: 'green', m: 4}}
              />
              {/* *****************Payment Related Information  Started 2*/}
              <Box sx={{border: '1px solid blue', p: 5, borderRadius: 5}}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>Regular Payment</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <AppTextField
                      type='number'
                      label={'Regular Registration Price'}
                      disabled={values.isSubmitting}
                      name='PaymentTypes[1]Amount'
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DatePicker
                      autoOk
                      format='YYYY/MM/DD'
                      variant='inline'
                      inputVariant='outlined'
                      label={<IntlMessages id='Course.earlybirdenddate' />}
                      name='PaymentTypes[1]CloseDate'
                      value={values.PaymentTypes[1]?.CloseDate}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(value) =>
                        setFieldValue(
                          'PaymentTypes[1]CloseDate',
                          value,
                          // moment(value).format('YYYY/MM/DD'),
                        )
                      }
                    />
                    {errors?.PaymentTypes ? (
                      <Typography color='red'>
                        {errors?.PaymentTypes[1]?.CloseDate}
                      </Typography>
                    ) : (
                      <Typography>MM/DD/YYYY</Typography>
                    )}
                  </Grid>
                  {/* <Grid item xs={12}>
                    <CustomizedFieldArray2TextBox
                      PTIndex={1}
                      arrayField='DiscountCoupon'
                      fieldName1='Coupon Code'
                      fieldName2='Applicable Percentage discount'
                      fieldName3='Maximum times Applicable'
                    />
                  </Grid> */}
                </Grid>
              </Box>
              {/* <Divider component="li" sx={{borderBottomWidth: 4}} /> */}
              {/* *****************Payment Related Information  Finished 2*/}
              <Grid container>
                <Button
                  variant='contained'
                  color='primary'
                  disabled={values.isValidating || values.isSubmitting}
                  sx={{
                    mt: {xs: 5, xl: 6},
                    minWidth: 160,
                    fontWeight: Fonts.REGULAR,
                    fontSize: 16,
                    textTransform: 'capitalize',
                    padding: '8px 16px 8px',
                  }}
                  type='submit'
                >
                  Submit
                </Button>
              </Grid>
              {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
            </Form>
          )}
        </Formik>
      </Box>

      <Box sx={{color: 'grey.500'}}></Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle sx={{color: 'white', backgroundColor: `${dialogaction}`}}>
          <h2>
            Form submission {dialogaction === 'red' ? 'Failed' : 'Success'}
          </h2>
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{mt: 5}}>{msg} Thank you !</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
      <AppInfoView />
    </Box>
  );
};

export default AddCourseForm;

AddCourseForm.propTypes = {
  CourseID: PropTypes.string,
  closefn: PropTypes.function,
};
