import LoginButton from '@crema/core/AppLayout/components/UserInfo/LoginButton';
import { Button, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useRouter } from 'next/router';
import { quizText } from 'modules/Constant/QuizConst';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { onGetFBUserData } from 'redux/actions';
import { useAuthUser } from '@crema/utility/AuthHooks';
import { useSelector } from 'react-redux';
import { AppCard } from '@crema';
import ExpertForm from 'modules/Forms/ExpertForm';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { courseList2 } from 'modules/Constant/Relatecoursedata';

// import SAFEJSON from '../../../../../public/data/QuizData-SAFE.json'
export default function QuizMainPageCard({ subjectName }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useAuthUser();
  console.log('uuus', user);
  // const userData = useSelector((state) => state?.User?.FBUserData);
  const userData = useSelector((state) => state?.User?.FBUserData);

  console.log('ddsds', subjectName, userData);
  const onGotoQuiz = (btnQuizID) => {
    router.push({
      pathname: '/quiz',
      as: '/quiz',
      query: { param: subjectName, btnQuizID: btnQuizID },
    });
  };
  const [fileData, setFileData] = React.useState([]);

  React.useEffect(() => {
    dispatch(onGetFBUserData(user?.email));
    import(`/public/data/QuizData-${subjectName}.json`)
      .then((data) => setFileData(data))
      .catch((error) => console.error(error));
  }, []);
  const maxQuestion = 20;
  const quizNumbers = fileData && Math.ceil(fileData?.length / maxQuestion);
  const newQuizNumbers =
    fileData && Math.ceil(fileData?.length - (quizNumbers - 1) * maxQuestion);
  const quizArrays = fileData
    ? Array.from(
      {
        length:
          newQuizNumbers > maxQuestion * 0.25 ? quizNumbers : quizNumbers - 1,
      },
      (v, i) => i,
    )
    : null;

  return (
    <>


      {fileData && (
        <>
          <h1 style={{ textAlign: 'center', color: '#20509e' }}>Free Quizzes</h1>
          <br></br>

          <Grid container spacing={3}>

            {quizArrays.map((item, index) => (
              <Grid
                item
                xs={12}
                md={4}
                sx={{ textAlign: 'center', py: 5 }}
                key={index}
              >
                <Card sx={{ p: 5 }}>
                  <Typography variant='h1' gutterBottom>
                    {subjectName} Quiz {index + 1}
                  </Typography>
                  <Typography variant='body2'>
                    {quizText[subjectName]}
                  </Typography>
                  {userData?.QuizResult[`${subjectName}-${index + 1}`] ? (
                    <Typography variant='h4' color={'blue'} p={1}>
                      Last Score of the quiz ={' '}
                      {userData.QuizResult[`${subjectName}-${index + 1}`]}
                    </Typography>
                  ) : (
                    <br></br>
                  )}

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

QuizMainPageCard.propTypes = {
  subjectName: PropTypes.string,
};
