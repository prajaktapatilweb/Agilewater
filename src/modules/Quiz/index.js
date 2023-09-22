import {useAuthUser} from '@crema/utility/AuthHooks';
import {
  Button,
  Card,
  Container,
  FormControl,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import {Field, Form, Formik} from 'formik';
import FormikRadioGroup from 'modules/commanmodules/Formik/FormikRadioGroup';
import {useRouter} from 'next/router';
import React from 'react';
import {useState} from 'react';

export default function Quiz() {
  const {user} = useAuthUser();
  const router = useRouter();
  // const userData = JSON.parse(props?.router?.query?.data);
  console.log('RRRRR', router.query.btnQuizID);
  const [fileData, setFileData] = React.useState([]);
  const [page, setPage] = useState(1);
  var selected;
  selected = fileData[page - 1];

  const handleChangeQuestion = (event, value) => {
    setPage(value);
    selected = fileData[value];
  };
  React.useEffect(() => {
    router &&
      import(`/public/data/QuizData-${router.query.param}.json`)
        //   .then(response => console.log('reached',response))
        .then((data) =>
          setFileData(
            data.default.slice(
              20 * router.query.btnQuizID,
              20 * (parseInt(router.query.btnQuizID) + 1),
            ),
          ),
        )
        .catch((error) => console.error(error));
  }, [page]);
  console.log('sddd', selected);
  const onSubmit = () => {
    console.log('Submitted');
  };
  return (
    <div>
      {user && selected && (
        <Container sx={{maxWidth: {xl: 1450}, marginTop: 15}}>
          <Stack spacing={2} alignItems='center' sx={{m: 3}}>
            {/* <Typography>Page: {page}</Typography> */}
            <Pagination
              count={20}
              variant='outlined'
              color='primary'
              page={page}
              onChange={handleChangeQuestion}
              siblingCount={1}
              size='large'
            />
          </Stack>
          {/* {fileData.map((item, index) => ( */}
          <Card sx={{p: 5}}>
            <Stack direction='column' alignItems='center'>
              <Typography variant='h3' pb={3}>
                {selected['Question']}
              </Typography>
              <Formik
                initialValues={{answer: ''}}
                validateOnChange={true}
                onSubmit={onSubmit}
                enableReinitialize={true}
              >
                {({values}) => {
                  return (
                    <Form
                      style={{textAlign: 'left'}}
                      noValidate
                      autoComplete='off'
                      encType='multipart/form-data'
                    >
                      {/* <FormControl sx={{width: '100%'}}>
              <Field
                name='FileName'
                component={FileSubmission}
                setUploadedFiles={setUploadedFiles}
                setUploadedFilesData={setUploadedFilesData}
              />
            </FormControl> */}

                      <FormControl sx={{width: '100%'}}>
                        <Field
                          name='answer'
                          options={[
                            {key: 1, text: selected['A']},
                            {
                              key: 2,
                              text: selected['B'],
                            },
                            {key: 3, text: selected['C']},
                            {key: 4, text: selected['D']},
                          ]}
                          component={FormikRadioGroup}
                        />
                        {/* </Stack> */}
                      </FormControl>

                      <Button
                        variant='contained'
                        // disabled={!checked}
                        sx={{m: 3}}
                        type='submit'
                      >
                        Submit
                      </Button>
                    </Form>
                  );
                }}
              </Formik>
              {/* A {selected[' Option#1']} */}
            </Stack>
          </Card>
          {/* ))} */}
          {/* <pre>{JSON.stringify(fileData, null, 2)}</pre> */}
        </Container>
      )}
    </div>
  );
}
