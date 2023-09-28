import {useAuthUser} from '@crema/utility/AuthHooks';
import {Box, Button, Divider, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import CommentsList from './CommentsList';
import LoginButton from '@crema/core/AppLayout/components/UserInfo/LoginButton';
import {useRouter} from 'next/router';
import {onGetCommentsList, onPostNewComment} from 'redux/actions/Comments';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import WriteComment from './WriteComment';
import {AppCard} from '@crema';

export default function Discussion() {
  const router = useRouter();
  const dispatch = useDispatch();
  const PageAsPath = router?.asPath;
  useEffect(() => {
    dispatch(onGetCommentsList({PageAsPath: PageAsPath}));
  }, [dispatch]);
  const CommentList = useSelector((state) => state?.Comments?.CommentList);
  return (
    <div>
      {/* <pre>{JSON.stringify(user, null, 4)}</pre> */}
      <AppCard>
        {/* <Divider sx={{ marginTop: 4, marginBottom: 5 }} /> */}
        {CommentList && CommentList?.PageAsPath === PageAsPath ? (
          <CommentsList
            comments={CommentList?.Comments}
            PageAsPath={PageAsPath}
          />
        ) : null}
        <Typography variant='h1' p={3}>
          Leave a Reply
        </Typography>
        <WriteComment />
      </AppCard>
    </div>
  );
}
