import {useAuthUser} from '@crema/utility/AuthHooks';
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  // Pagination,
  Stack,
  Tab,
  Typography,
} from '@mui/material';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import CustomizedCheckboxFormik from 'modules/commanmodules/Formik/CustomizedCheckboxFormik';
import FormikRadioGroup from 'modules/commanmodules/Formik/FormikRadioGroup';
import TextError from 'modules/commanmodules/Formik/TextError';
import {useRouter} from 'next/router';
import React from 'react';
import {useState} from 'react';
import * as yup from 'yup';
import LabTabs from './New';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import {useDispatch} from 'react-redux';
import {onUpdateFBUserData} from 'redux/actions';

// const validationSchema = yup.object({
//   answer: yup.array().of(
//     yup
//       .array()
//       // .of(yup.string().required(<>required !</>)),
//       .min(1, 'Please select any option to go to next question')
//       .required('required'),
//   ),
// });
export default function QuestionSet() {
  const {user} = useAuthUser();
  const router = useRouter();
  const [fileData, setFileData] = React.useState([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    console.log('values', newValue);
    setPage(newValue);
    setValue(newValue);
    selected = fileData[newValue];
  };
  const [showError, setShowError] = useState(false);
  var selected;
  selected = fileData[page - 1];
  const maxQuestion = 20;
  // const handleChangeQuestion = (event, value) => {
  //   setPage(value);
  //   selected = fileData[value];
  // };
  React.useEffect(() => {
    console.log('Use Effect');
    router &&
      import(`/public/data/QuizData-${router.query.param}.json`)
        .then((data) =>
          setFileData(
            data.default.slice(
              maxQuestion * router.query.btnQuizID,
              maxQuestion * (parseInt(router.query.btnQuizID) + 1),
            ),
          ),
        )
        .catch((error) => console.error(error));
  }, [router]);
  // console.log('sddd', selected);
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    console.log('values', values, page, maxQuestion);
    var cnt = 0;

    if (page === maxQuestion) {
      console.log('Submitting ');
      values?.answer[page]?.length > 0
        ? setShowError(false)
        : setShowError(true);

      // const indexOfAll = (arr, val) =>
      //   arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
      //   indexOfAll(values.answer, undefined),

      for (let i = 1; i <= maxQuestion; i++) {
        if (values.answer[i] === undefined) {
          alert('Answer all questions. Unanswered questions are in red color');
          break;
        } else {
          // console.log('gsdsds', i, fileData);
          fileData[i - 1].ChoosenOption = values.answer[i];
          // console.log('sdsds', fileData);
          if (fileData[i - 1].Type === 'MCQ') {
            if (values.answer[i] === fileData[i - 1]?.CorrectOption) {
              cnt = cnt + 1;
              fileData[i - 1].Result = true;
            } else {
              cnt = cnt + 0;
              fileData[i - 1].Result = false;
            }
          } else {
            var corr_Option_array = fileData[i - 1].CorrectOption.split(' ');
            console.log('Cirrect option array', corr_Option_array);
            if (
              [...new Set(corr_Option_array)].every((x) =>
                new Set(values.answer[i]).has(x),
              )
            ) {
              cnt = cnt + 1;
              fileData[i - 1].Result = true;
            } else {
              cnt = cnt + 0;
              fileData[i - 1].Result = false;
            }
          }
        }
      }
      console.log('Iuttrr', cnt);
      var UserData = {};
      UserData.email = user.email;
      UserData.Updates = {};
      UserData.Updates.QuizResult = {};
      UserData.Updates.QuizResult[
        `${router.query.param}-${router.query.btnQuizID}`
      ] = cnt;
      console.log('Submitting The data', UserData);
      dispatch(onUpdateFBUserData(UserData));
      actions.setSubmitting(false);
      console.log('DDDDDD', fileData);
      router.push({
        pathname: '/quiz/answers',
        as: '/quiz/answers',
        query: {data: JSON.stringify(fileData), FinalResult: cnt},
      });
    } else {
      console.log('Intreimdd', page, values.answer[page]?.length);
      values?.answer[page]?.length > 0
        ? (setPage(page + 1), setValue(value + 1), setShowError(false))
        : setShowError(true);
      actions.setSubmitting(false);
    }
  };
  return (
    <div>
      {user && selected && (
        <Container sx={{maxWidth: {xl: 1450}, marginTop: 15}}>
          {/* <LabTabs /> */}
          <Stack spacing={2} alignItems='center' sx={{m: 3}}>
            {/* <Typography>Page: {page}</Typography> */}
            {/* <Pagination
              count={maxQuestion}
              variant='outlined'
              color='primary'
              page={page}
              onChange={handleChangeQuestion}
              siblingCount={1}
              size='large'
            /> */}
          </Stack>
          <Card sx={{p: 5}}>
            <Formik
              initialValues={{answer: []}}
              // validationSchema={validationSchema}
              validateOnChange={true}
              onSubmit={onSubmit}
              enableReinitialize={true}
            >
              {({values, errors}) => (
                // return (
                <Form
                  style={{textAlign: 'left'}}
                  noValidate
                  autoComplete='off'
                  encType='multipart/form-data'
                >
                  <Box sx={{width: '100%', typography: 'body1'}}>
                    <TabContext value={value}>
                      <Box sx={{borderBottom: 2, borderColor: 'divider'}}>
                        <TabList
                          onChange={handleChange}
                          variant='scrollable'
                          scrollButtons
                          aria-label='lab API tabs example'
                        >
                          {fileData.map((item, index) => (
                            <Tab
                              key={index}
                              label={item.QN}
                              value={index + 1}
                              sx={{
                                // border: values.answer[index + 1]
                                //   ? '1px solid green'
                                //   : '2px solid red',
                                // borderRadius: '30%',
                                color: values.answer[index + 1]
                                  ? 'green'
                                  : 'red',
                              }}
                            />
                          ))}
                        </TabList>
                      </Box>
                      <TabPanel value={page}>
                        <Stack direction='column' alignItems='center'>
                          <Typography variant='h3' p={3}>
                            {selected['Question']}
                          </Typography>
                          <FormControl sx={{width: '100%'}}>
                            <div role='group' aria-labelledby='my-radio-group'>
                              <Stack
                                direction='column'
                                alignItems='stretch'
                                px={10}
                              >
                                {'ABCDEF'.split('').map((item) =>
                                  selected[item] ? (
                                    <label>
                                      <Field
                                        type={
                                          selected?.Type === 'MCQ'
                                            ? 'radio'
                                            : 'checkbox'
                                        }
                                        name={`answer[${page}]`}
                                        value={item}
                                      />{' '}
                                      {item}-{selected[item]}
                                    </label>
                                  ) : null,
                                )}
                              </Stack>
                            </div>
                            {/* <Stack direction='column' lignItems='flex-end'>
                              {'ABCDEF'.split('').map((item) =>
                                selected[item] ? (
                                  <label>
                                    <Field
                                      type='checkbox'
                                      name={`answer[${page}]`}
                                      value={item}
                                    />
                                    {selected[item]}
                                  </label>
                                ) : null,
                              )} 
                            </Stack>
                          )}*/}
                          </FormControl>
                          {/* <ErrorMessage component={TextError} name={`answer${page-1}`} /> */}
                        </Stack>
                        {showError &&
                          (!values?.answer[page] ||
                            values?.answer[page]?.length <= 0) && (
                            <Typography variant='h3' color='red'>
                              Please select at least one option to go to next
                              question
                            </Typography>
                          )}
                      </TabPanel>
                    </TabContext>
                  </Box>
                  <Stack direction='column' alignItems='center'>
                    <Button
                      variant='contained'
                      // disabled={!checked}
                      sx={{m: 3}}
                      type='submit'
                    >
                      {page === maxQuestion ? 'Submit' : 'Next'}
                    </Button>
                  </Stack>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
                // );
              )}
              {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
            </Formik>
            {/* A {selected[' Option#1']} */}
          </Card>
          {/* <pre>{JSON.stringify(fileData, null, 2)}</pre> */}
          {/* <TabPanel value={1}>Item One</TabPanel>
               <TabPanel value={2}>Item Two</TabPanel>
               <TabPanel value='3'>Item Three</TabPanel>
             </TabContext>
           </Box> */}
        </Container>
      )}
    </div>
  );
}
