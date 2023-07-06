import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from './ListItem';
import AppInfoView from '@crema/core/AppInfoView';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import Image from 'next/image';

const CoachProfile = () => {
  const dispatch = useDispatch();
  var usersList = [
    {
      img:
        <Image src='/assets/images/coach/Vijay-Wade1.webp' width={100}
          height={90}
          layout='fill'>

        </Image>,
      name: "Vijay",
      para: <span>Agile Coach,Career Coach,Life Coach
        Experience : 21+ Years India
        COACH SPECIALIZATIONS
        Corporate Coaching
        Leadership Coaching
        Organizational Development Coaching
        Work Life Balance Coaching</span>
    },
    {
      img: <Image src='/assets/images/coach/RahulShah.webp' width={100}
        height={90}
        layout='fill'>

      </Image>,
      name: "Vijay wade",
      para: <span>Agile Coach,Career Coach,Life Coach
        Experience : 21+ Years India
        COACH SPECIALIZATIONS
        Corporate Coaching
        Leadership Coaching
        Organizational Development Coaching
        Work Life Balance Coaching</span>
    },
    {
      img: <Image src='/assets/images/coach/mk-e.webp' width={100}
        height={90}
        layout='fill'>

      </Image>,
      name: "Vijay wade",
      para: <span>Agile Coach,Career Coach,Life Coach
        Experience : 21+ Years India
        COACH SPECIALIZATIONS
        Corporate Coaching
        Leadership Coaching
        Organizational Development Coaching
        Work Life Balance Coaching</span>
    },
    {
      img: <Image src='/assets/images/coach/jeff.webp' width={100}
        height={90}
        layout='fill'>

      </Image>,
      name: "Vijay wade",
      para: <span>Agile Coach,Career Coach,Life Coach
        Experience : 21+ Years India
        COACH SPECIALIZATIONS
        Corporate Coaching
        Leadership Coaching
        Organizational Development Coaching
        Work Life Balance Coaching</span>
    },
    {
      img: <Image src='/assets/images/coach/ali-sohail.webp' width={100}
        height={90}
        layout='fill'>

      </Image>,
      name: "Vijay wade",
      para: <span>Agile Coach,Career Coach,Life Coach
        Experience : 21+ Years India
        COACH SPECIALIZATIONS
        Corporate Coaching
        Leadership Coaching
        Organizational Development Coaching
        Work Life Balance Coaching</span>
    },
    {
      img: <Image src='/assets/images/coach/rahul-mukh.webp' width={100}
        height={90}
        layout='fill'>

      </Image>,
      name: "Vijay wade",
      para: <span>Agile Coach,Career Coach,Life Coach
        Experience : 21+ Years India
        COACH SPECIALIZATIONS
        Corporate Coaching
        Leadership Coaching
        Organizational Development Coaching
        Work Life Balance Coaching</span>
    },
    {
      img: <Image src='/assets/images/coach/viji-menon.webp' width={100}
        height={90}
        layout='fill'>

      </Image>,
      name: "Vijay wade",
      para: <span>Agile Coach,Career Coach,Life Coach
        Experience : 21+ Years India
        COACH SPECIALIZATIONS
        Corporate Coaching
        Leadership Coaching
        Organizational Development Coaching
        Work Life Balance Coaching</span>
    },
    {
      img: <Image src='/assets/images/coach/shijo-paul.webp' width={100}
        height={90}
        layout='fill'>

      </Image>,
      name: "Vijay wade",
      para: <span>Agile Coach,Career Coach,Life Coach
        Experience : 21+ Years India
        COACH SPECIALIZATIONS
        Corporate Coaching
        Leadership Coaching
        Organizational Development Coaching
        Work Life Balance Coaching</span>
    },

  ]
  // const usersList = useSelector(({ userList }) => userList.usersList);
  // console.log("abc", usersList)

  // useEffect(() => {
  //   dispatch(onGetUserList());
  // }, [dispatch]);

  return (
    <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
      {usersList ?
        <Grid container>
          {usersList.map(user =>
            <Grid lg={3}><ListItem user={user} key={user.id} /></Grid>
          )}
        </Grid>
        : null}

      <AppInfoView />
    </Container >
  );
};

export default CoachProfile;
