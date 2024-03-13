import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import {
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import {Formik, Field, Form} from 'formik';
import * as yup from 'yup';
import AppInfoView from '@crema/core/AppInfoView';
import Box from '@mui/material/Box';
import AppTextField from '@crema/core/AppFormComponents/AppTextField';
import {Fonts} from '../../../shared/constants/AppEnums';
import IntlMessages from '@crema/utility/IntlMessages';
import CustomizedSelectFormik from 'modules/commanmodules/Formik/CustomizedSelectFormik';
import {
  CourseOptions,
  DiscountTypeOptions,
  TicketType,
  TitleOptions,
} from 'modules/Constant/CommanConst';
import DateTimePicker from '@mui/lab/DateTimePicker';
import moment from 'moment';
import {DatePicker} from '@mui/lab';
import {onPostCouponCode, onUpdateCourseData} from 'redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import CustomizedCheckboxFormik from 'modules/commanmodules/Formik/CustomizedCheckboxFormik';

// Yup Form Validation
const validationSchema = yup.object({
  DiscountType: yup.string().required('Discount Type is  required ! '),
  DiscountAmountType: yup
    .string()
    .required('Discount Amount Type is required ! '),
  DiscountAmount: yup
    .number()
    .min(0)
    .required('Discount Amount is required ! ')
    .when(['DiscountAmountType'], (DiscountAmountType, schema) => {
      return schema.test({
        test: (DiscountAmount) => {
          if (DiscountAmountType === 'Percentage') return DiscountAmount <= 100;
          return true;
        },
        message: 'The percentage should be less than 100 %',
      });
    }),
  NumberofTimes: yup
    .number()
    .min(0)
    .required('The number of times code applicable is required ! '),
  DiscountCode: yup.string().required('Discount Code is required ! '),
  CouponStartDate: yup.date().required('Start Date is required !'),
  // .max(new Date(), intl.formatMessage({ id: 'start_date.error.max' }))
  CouponEndDate: yup
    .date()
    .required('It is required field')
    .when(['CouponStartDate'], (CouponStartDate, schema) => {
      return schema.test({
        test: (CouponEndDate) => {
          if (!CouponEndDate) return true;
          return CouponEndDate >= CouponStartDate;
        },
        message: 'Coupon expires on Date should be after the start date',
      });
    }),
  //   TicketType: yup.string().required('Ticket Type is required ! '),
  TicketType: yup
    .array()
    .min(1, 'Please select at least select one Expertise Field')
    .required(
      <>
        <IntlMessages id='Coach.expertise' /> required !
      </>,
    ),
});

export default function AddCouponCodeForm({CouponIDDetailData, closefn}) {
  const [checked, setChecked] = React.useState([]);
  const dispatch = useDispatch();
  console.log('RRRRRRR', CouponIDDetailData);

  const onSubmit = async (data, {setSubmitting, resetForm}) => {
    data.DiscountCode = data.DiscountCode.toUpperCase();
    console.log('Signup Form Submission', data);
    data.CouponID = CouponIDDetailData ? CouponIDDetailData.CouponID : null;
    setSubmitting(true);
    dispatch(onPostCouponCode({data, resetForm}));
    closefn();
    setSubmitting(false);
  };
  const initialValues = {
    DiscountType: CouponIDDetailData?.DiscountType || '',
    DiscountAmountType: CouponIDDetailData?.DiscountAmountType || '',
    DiscountAmount: CouponIDDetailData?.DiscountAmount || '',
    NumberofTimes: CouponIDDetailData?.NumberofTimes || '',
    CouponStartDate: CouponIDDetailData?.CouponStartDate || '',
    // CouponStartDate: moment(CouponIDDetailData?.CouponStartDate).format('MM/DD/YYYY HH:mm') || '',
    CouponEndDate: CouponIDDetailData?.CouponEndDate || '',
    DiscountCode: CouponIDDetailData?.DiscountCode || '',
    TicketType: CouponIDDetailData?.TicketType || [],
    Status: CouponIDDetailData?.Status || 'Active',
  };

  return (
    <Box sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
      <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', m: 8}}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={true}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {({values, errors, setFieldValue, isSubmitting}) => (
            <Form style={{textAlign: 'left'}} noValidate autoComplete='off'>
              {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              <Grid container sx={{mb: {xs: 4, xl: 5}}} spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormControl sx={{width: '100%'}}>
                    <InputLabel id='demo-simple-select-label'>
                      Discount Coupon Type
                    </InputLabel>
                    <Field
                      name='DiscountType'
                      options={DiscountTypeOptions}
                      component={CustomizedSelectFormik}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                  <AppTextField
                    label='Discount Coupon'
                    name='DiscountCode'
                    variant='outlined'
                    inputProps={{style: {textTransform: 'uppercase'}}}
                    sx={{width: '100%', mb: 3}}
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{width: '100%'}}>
                    <InputLabel id='demo-simple-select-label'>
                      Discount Amount Type
                    </InputLabel>
                    <Field
                      name='DiscountAmountType'
                      options={[
                        {key: 0, text: 'Percentage'},
                        {key: 1, text: 'Fixed Amount'},
                      ]}
                      component={CustomizedSelectFormik}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <AppTextField
                    type='number'
                    label='Discounted Amount / Percentage'
                    name='DiscountAmount'
                    disabled={values.isSubmitting}
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <AppTextField
                    label='Number of Times Applicable'
                    disabled={values.isSubmitting}
                    name='NumberofTimes'
                    variant='outlined'
                  />
                </Grid>
              </Grid>
              {/* *****************Dates of the event  Started*/}
              <Grid container justifyContent='space-between' spacing={2} p={2}>
                <Grid item xs={6}>
                  <DateTimePicker
                    autoOk
                    format='YYYY/MM/DD'
                    variant='inline'
                    inputVariant='outlined'
                    label={<IntlMessages id='common.startDate' />}
                    name='CouponStartDate'
                    value={values.CouponStartDate}
                    slotProps={{
                      textField: {
                        helperText: 'MM/DD/YYYY',
                      },
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(value) =>
                      setFieldValue(
                        'CouponStartDate',
                        value,
                        // moment.utc(value).format('YYYY/MM/DD'),
                      )
                    }
                  />
                  {errors?.CouponStartDate ? (
                    <Typography color='red'>
                      {errors.CouponStartDate}
                    </Typography>
                  ) : (
                    <Typography>MM/DD/YYYY</Typography>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <DateTimePicker
                    autoOk
                    format='YYYY/MM/DD'
                    variant='inline'
                    inputVariant='outlined'
                    label={<IntlMessages id='common.endDate' />}
                    name='CouponEndDate'
                    value={values.CouponEndDate}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(value) =>
                      setFieldValue(
                        'CouponEndDate',
                        value,
                        // moment(value).format('YYYY/MM/DD'),
                      )
                    }
                  />
                  {errors.CouponEndDate ? (
                    <Typography color='red'>{errors.CouponEndDate}</Typography>
                  ) : (
                    <Typography>MM/DD/YYYY</Typography>
                  )}
                </Grid>
              </Grid>
              {/* *****************Dates of the event  Finished */}
              <Grid item xs={12}>
                <Stack direction='row' spacing={6} alignItems='center'>
                  <Typography variant='h4'>Select the payment type</Typography>
                  <FormControl>
                    <Field
                      name='TicketType'
                      options={TicketType}
                      checked={checked}
                      disabled={values.isSubmitting}
                      setChecked={setChecked}
                      component={CustomizedCheckboxFormik}
                    ></Field>
                  </FormControl>
                </Stack>
              </Grid>
              {CouponIDDetailData && (
                <Grid item xs={12}>
                  <FormGroup>
                    <Stack direction='row' spacing={1} alignItems='center'>
                      <Typography>Inactive</Typography>
                      <Switch
                        checked={values.Status === 'Active' ? true : false}
                        onChange={() =>
                          values.Status === 'Active'
                            ? setFieldValue('Status', 'Inactive')
                            : setFieldValue('Status', 'Active')
                        }
                        inputProps={{'aria-label': 'controlled'}}
                      />

                      <Typography>Active</Typography>
                    </Stack>
                  </FormGroup>
                </Grid>
              )}
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
      <AppInfoView />
    </Box>
  );
}
