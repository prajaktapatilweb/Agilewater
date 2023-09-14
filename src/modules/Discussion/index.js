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

export default function Discussion() {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetCommentsList({PageAsPath: router.asPath}));
  }, [dispatch]);
  const CommentList = useSelector((state) => state?.Comments?.CommentList);
  // const CommentFullList = CommentList?.Comments;
  // console.log('DARA', CommentList);
  // const rootComments = CommentFullList.filter((item) => !item.IsItReply);
  // const getReplies = (commentId) =>
  //   CommentFullList.filter((item) => item.RepliedToParentID === commentId).sort(
  //     (a, b) =>
  //       new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  //   );
  return (
    <div>
      {/* <pre>{JSON.stringify(user, null, 4)}</pre> */}
      <Divider sx={{marginTop: 4, marginBottom: 5}} />

      {CommentList && CommentList?.PageAsPath === router?.asPath ? (
        <CommentsList comments={CommentList?.Comments} />
      ) : null}
      <Typography variant='h1' p={3}>
        Leave a Reply
      </Typography>
      <WriteComment />
    </div>
  );
}
