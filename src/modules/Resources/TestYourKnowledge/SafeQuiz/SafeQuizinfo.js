import LoginButton from '@crema/core/AppLayout/components/UserInfo/LoginButton';
import {Button, Card, Container, Grid, Typography} from '@mui/material';
import React from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {useRouter} from 'next/router';
import {quizText} from 'modules/Constant/QuizConst';
import PropTypes from 'prop-types';

// import SAFEJSON from '../../../../../public/data/QuizData-SAFE.json'
export default function SafeQuizinfo({data, subjectName}) {
  const router = useRouter();
  // console.log('ddsds',SAFEJSON)
  const onGotoQuiz = (btnQuizID) => {
    console.log('In quiz', fileData, btnQuizID);
    router.push({
      pathname: '/quiz',
      as: '/quiz',
      query: {param: subjectName, btnQuizID: btnQuizID},
    });
  };

  const [fileData, setFileData] = React.useState([]);

  React.useEffect(() => {
    import(`/public/data/QuizData-${subjectName}.json`)
      //   .then(response => console.log('reached',response))
      .then((data) => setFileData(data))
      .catch((error) => console.error(error));
  }, []);
  const quizNumbers = fileData ? Math.ceil(fileData?.length / 20) : null;
  const quizArrays = fileData
    ? //   ?[ ...Array(quizNumbers).keys() ]
      Array.from({length: quizNumbers}, (v, i) => i)
    : null;
  console.log('sdsds', quizNumbers, quizArrays);
  return (
    <>
      {fileData && (
        <>
          <h1 style={{textAlign: 'center', color: '#20509e'}}>Free Quizzes</h1>
          <br></br>
          <Grid container spacing={3}>
            {/* <pre>{JSON.stringify(fileData.default, null, 2)}</pre> */}

            {quizArrays.map((item, index) => (
              <Grid
                item
                xs={12}
                md={4}
                sx={{textAlign: 'center', py: 5}}
                key={index}
              >
                <Card sx={{p: 5}}>
                  <Typography variant='h1' gutterBottom>
                    {subjectName} Quiz {index + 1}
                  </Typography>
                  <Typography variant='body2'>
                    {quizText[subjectName]}
                  </Typography>
                  <br></br>
                  <LoginButton
                    ButtonHeading={'Take Quiz'}
                    onClickFunction={onGotoQuiz}
                    btnQuizID={index}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}

SafeQuizinfo.propTypes = {
  data: PropTypes.object,
  subjectName: PropTypes.string,
};
