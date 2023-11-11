import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { onGetCoachList } from 'redux/actions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import CoachDetailData from 'modules/AdminPages/Coaches/List/CoachDetailData';
import { AppGrid } from '@crema';
import { Formik, Field, Form } from 'formik';
import { FormControl, InputLabel } from '@mui/material';
import IntlMessages from '@crema/utility/IntlMessages';
import {
    CocheSubject,
    CountryList,
    CourseOptions, SpecializationList, TrainerList,
} from 'modules/Constant/CommanConst';
import CustomizedSelectFormik from 'modules/commanmodules/Formik/CustomizedSelectFormik';
import { Fonts } from 'shared/constants/AppEnums';
import { useState } from 'react';

export default function Hirecoach() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(onGetCoachList());
    }, [dispatch]);

    const CoachList = useSelector((state) => state?.Coach?.Coachlist);
    const [FCoachList, setFCoachList] = useState()
    const [flag, setFlag] = useState(true)

    const onSubmit = async (data, { setSubmitting, resetForm }) => {
        const newList = CoachList?.filter(item => item.Expertise.includes(data.Type) && item.Specialization.includes('agile') && item.Country === data.Country);
        setFlag(false)
        setFCoachList(newList)
    }
    return (
        <div>
            <Grid container className='section' style={{ background: '#edeff3' }}>
                <Container
                    sx={{ maxWidth: { xl: 1400 }, textAlign: 'center', marginTop: 6 }}
                >
                    <Box>
                        <Typography
                            sx={{ fontSize: 14 }}
                            textAlign='center'
                            color='text.secondary'
                            gutterBottom
                        >
                            <Typography variant='h6'>Hire A Coach </Typography>
                        </Typography>
                    </Box>

                    <Formik
                        initialValues={{ Type: '', Specialization: '', Country: '' }}
                        // validationSchema={validationSchema}
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
                            <Form style={{ textAlign: 'left' }} noValidate autoComplete='off'>
                                <pre>{JSON.stringify(values, null, 2)}</pre>
                                <Grid container sx={{ mb: { xs: 4, xl: 5 } }} spacing={2}>
                                    <Grid item xs={12} md={3}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <InputLabel id='demo-simple-select-label'>
                                                <IntlMessages id='Select Coaching type' />
                                            </InputLabel>
                                            <Field
                                                name='Type'
                                                options={CocheSubject}
                                                component={CustomizedSelectFormik}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>

                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <InputLabel id='demo-simple-select-label'>
                                                <IntlMessages id='Select Specialization' />
                                            </InputLabel>
                                            <Field
                                                name='Specialization'
                                                options={SpecializationList}
                                                component={CustomizedSelectFormik}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>

                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <InputLabel id='demo-simple-select-label'>
                                                <IntlMessages id='Select Country' />
                                            </InputLabel>
                                            <Field
                                                name='Country'
                                                options={CountryList}
                                                component={CustomizedSelectFormik}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>

                                    </Grid>

                                    <Grid item xs={12} md={3}>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            // disabled={values.isValidating || values.isSubmitting}
                                            sx={{

                                                mt: { xs: 5, xl: 1 },
                                                minWidth: 250,
                                                fontWeight: Fonts.REGULAR,
                                                fontSize: 16,
                                                textTransform: 'capitalize',
                                                padding: '11px',
                                            }}
                                            type='submit'
                                        >
                                            Search
                                        </Button>
                                    </Grid>
                                </Grid>
                                {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
                            </Form>
                        )}
                    </Formik>
                </Container>
            </Grid>
            <Container sx={{ maxWidth: { xl: 1400 }, textAlign: 'center', marginTop: 6 }}>
                {CoachList && (
                    <AppGrid
                        responsive={{ xs: 1, sm: 2, md: 3, lg: 2, xl: 3 }}
                        data={flag ? CoachList : FCoachList}
                        renderRow={(coach, id) => (
                            <CoachDetailData coach={coach} key={id} />
                        )}
                    />
                )}
            </Container>
        </div>
    );
}
