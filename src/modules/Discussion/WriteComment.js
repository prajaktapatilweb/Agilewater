import LoginButton from '@crema/core/AppLayout/components/UserInfo/LoginButton';
import {useAuthUser} from '@crema/utility/AuthHooks';
import {Box, TextField} from '@mui/material';
import {useRouter} from 'next/router';
import React from 'react';
import {useState} from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {onPostNewComment} from 'redux/actions';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

export default function WriteComment({
  replyClicked = null,
  togglereplyButton = null,
  PageAsPath = null,
}) {
  const {user} = useAuthUser();
  const [comment, setComment] = useState('');
  const router = useRouter();
  const pageLink = router.asPath.split('/')[1];
  // console.log('RRRR',router,PageAsPath)
  const dispatch = useDispatch();
  const onAddComments = () => {
    // console.log('first', user, router.asPath, comment);
    const data = {
      PageAsPath: PageAsPath || router.asPath,
      pageLink: pageLink,
      Comment: {
        Content: comment,
        ByEmailID: user?.email,
        ByName: user?.displayName,
        AvatarURL: user?.photoURL,
      },
    };
    replyClicked
      ? ((data.Comment.IsItReply = true),
        (data.Comment.RepliedToSuperParentID = replyClicked.mainID),
        (data.Comment.ThreadLevel = replyClicked.ThreadLevel + 1 || 1),
        (data.Comment.RepliedToParentID = replyClicked.id))
      : null;
    console.log('New Subjemit data', data);
    dispatch(onPostNewComment(data));
    setComment('');
    togglereplyButton ? togglereplyButton() : null;
  };
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        marginTop: 'auto',
        marginLeft: '3px',
      }}
      pb={5}
    >
      <TextField
        multiline
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            padding: '10px 15px',
          },
        }}
        rows='1'
        variant='outlined'
        placeholder='Write a Comment'
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <LoginButton
        sxStyle={{
          position: 'relative',
          width: 41,
          height: 41,
          minWidth: 41,
          padding: 2,
          marginLeft: 3,
          '& svg': {
            marginLeft: 0.75,
          },
        }}
        ButtonHeading={<SendOutlinedIcon />}
        onClickFunction={onAddComments}
        disabled={!comment}
      />
      {/* <Button
      sx={{
        position: 'relative',
        width: 41,
        height: 41,
        minWidth: 41,
        padding: 2,
        marginLeft: 3,
        '& svg': {
          marginLeft: 0.75,
        },
      }}
      variant='contained'
      color='primary'
      disabled={!comment}
      onClick={onAddComments}
    >
      <SendOutlinedIcon />
    </Button> */}
    </Box>
  );
}

WriteComment.propTypes = {
  replyClicked: PropTypes.object,
  togglereplyButton: PropTypes.func,
  PageAsPath: PropTypes.string,
};
