import {AppCard} from '@crema';
import {
  Check,
  CheckBox,
  CheckCircle,
  Close,
  DisabledByDefault,
  Done,
  DoneOutline,
} from '@mui/icons-material';
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import {useRouter} from 'next/router';
import React from 'react';
import {useEffect} from 'react';
import {CardTitle} from 'react-trello/dist/styles/Base';

export default function Answers() {
  const router = useRouter();
  useEffect(() => {
    // if (router.asPath === '/?step=2') {
    window.onpopstate = () => {
      router.push('/quiz/freequiz');
      //   history.go(1);
    };
    // }
  }, [router]);
  const objectData = JSON.parse(router.query.data);
  console.log('sdsds', objectData);
  return (
    <div>
      {objectData && (
        <Container sx={{maxWidth: {xl: 1450}, marginTop: 15}}>
          <AppCard>
            <Stack direction={'row'} justifyContent='space-around'>
              <Typography variant='h2' color={'primary.main'}>
                <strong>
                  The total marks obtained = {router.query.FinalResult} /
                  {objectData.length}
                </strong>
              </Typography>
              <Button
                variant='contained'
                onClick={() => router.push('/quiz/freequiz')}
              >
                Go to Other Quizes
              </Button>
            </Stack>
            {objectData.map((item) => (
              <Card key={item.QN}>
                <Grid container spacing={{xs: 4, md: 8}}>
                  <Grid item xs={11}>
                    <CardContent>
                      <Typography variant='h3'>
                        <strong>
                          Q. {item.QN}:{'  '}
                          {item.Question}
                        </strong>
                      </Typography>
                      {item.Result ? (
                        <Typography variant='h5' sx={{pl: 5}} color={'blue'}>
                          Correct Option & Your Selection - {item.CorrectOption}
                          -
                          {item?.type === 'MCQ'
                            ? item[item.CorrectOption]
                            : item.CorrectOption.split(' ').map(
                                (newItem, i) => (
                                  <Stack direction='column' key={i}>
                                    {newItem} - {item[newItem]}
                                  </Stack>
                                ),
                              )}
                        </Typography>
                      ) : (
                        <Stack direction='column'>
                          <Typography
                            variant='h5'
                            sx={{pl: 5}}
                            color={'secondary.main'}
                          >
                            Your Selection - {item.ChoosenOption} -{' '}
                            {item[item.ChoosenOption]}
                          </Typography>
                          <Typography variant='h5' sx={{pl: 5}}>
                            Correct Option - {item.CorrectOption} -
                            {item?.type === 'MCQ'
                              ? item[item.CorrectOption]
                              : item.CorrectOption.split(' ').map(
                                  (newItem, i) => (
                                    <Stack direction='column' key={i}>
                                      {newItem} - {item[newItem]}
                                    </Stack>
                                  ),
                                )}
                          </Typography>
                        </Stack>
                      )}
                    </CardContent>
                  </Grid>
                  <Grid item xs={1}>
                    <CardContent>
                      {item.Result ? (
                        <Check color={'success'} />
                      ) : (
                        <Close color={'error'} />
                      )}
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            ))}
            {/* <pre>{JSON.stringify(objectData, null, 2)}</pre> */}
          </AppCard>
        </Container>
      )}
    </div>
  );
}
