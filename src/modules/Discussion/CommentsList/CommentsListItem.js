import React from 'react';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import {Box, Button, Typography} from '@mui/material';
import clsx from 'clsx';
import {styled} from '@mui/material/styles';
import moment from 'moment';
import WriteComment from '../WriteComment';
import {useState} from 'react';

const CommentWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  borderTopRightRadius: theme.cardRadius,
  borderBottomRightRadius: theme.cardRadius,
  // margin:'210px',
  padding: '8px 12px',
  // minWidth: '80vw',
  border: `solid 1px ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  '.last-chat-message &': {
    borderBottomLeftRadius: theme.cardRadius,
  },
  '.reply-chat-message &': {
    margin: '210px',
  },
}));

const CommentsListItem = ({
  item,
  isPreviousSender = false,
  isLast,
  isItReply,
  ReplyCommentList,
}) => {
  const [replyClicked, setreplyClicked] = useState({id: null, action: false});
  const replyButtonClicked = () => {
    console.log('Click', item);
    setreplyClicked({
      id: item._id,
      action: true,
      mainID: item?.RepliedToSuperParentID
        ? item?.RepliedToSuperParentID
        : item._id,
    });
  };
  console.log('in REoly', item._id, isItReply);
  return (
    <Box
      sx={{
        marginTop: 1.5,
        display: 'flex',
        position: 'relative',

        '&.hideUserInfo': {
          position: 'relative',
          marginTop: 1,
          '& .todo-comment-time, & .todo-comment-user': {
            display: 'none',
          },
          '& .todo-comment-info': {
            marginLeft: 11.5,
          },
        },
      }}
      className={clsx(
        isPreviousSender ? 'hideUserInfo' : 'first-chat-message',
        isLast ? 'last-chat-message' : '',
        // isItReply ? 'reply-chat-message' : '',
      )}
    >
      <ShowAvatar data={item} />
      <Box
        sx={{
          position: 'relative',
        }}
        className='todo-comment-info'
      >
        <CommentTitle data={item} />
        <CommentWrapper>
          <Typography>{item.Content}</Typography>
        </CommentWrapper>

        {replyClicked.action ? (
          <WriteComment replyClicked={replyClicked} />
        ) : (
          <Button
            variant='outlined'
            size='small'
            sx={{m: 1}}
            onClick={replyButtonClicked}
          >
            Reply
          </Button>
        )}
        {ReplyCommentList.length > 0
          ? ReplyCommentList.map((newitem) => (
              // <h1>REply {ReplyCommentList.length }</h1>
              <>
                <ShowAvatar data={newitem} />
                <Box
                  sx={{
                    position: 'relative',
                  }}
                  className='todo-comment-info'
                >
                  <CommentTitle data={newitem} />
                  <CommentWrapper>
                    <Typography>{newitem.Content}</Typography>
                  </CommentWrapper>
                </Box>
              </>
            ))
          : null}
      </Box>
    </Box>
  );
};

function ShowAvatar({data}) {
  return (
    <Box
      sx={{
        marginRight: 2.5,
        position: 'relative',
      }}
      className='todo-comment-user'
    >
      {data.AvatarURL ? (
        <Avatar
          src={data.AvatarURL}
          sx={{
            height: 36,
            width: 36,
          }}
        />
      ) : (
        <Avatar
          sx={{
            height: 36,
            width: 36,
          }}
        >
          {data.ByName[0]}
        </Avatar>
      )}
    </Box>
  );
}

function CommentTitle({data}) {
  return (
    <Box
      sx={{
        display: 'block',
        marginBottom: 1.5,
        color: 'text.secondary',
        fontSize: 12,
        '& > span': {
          marginRight: 1,
        },
      }}
      className='todo-comment-time'
    >
      <span>{data.ByName} , </span>
      <span>
        <span>{moment(data.OnDate).format('DD MMM YYYY @ HH:mm')}</span>
      </span>
    </Box>
  );
}
export default CommentsListItem;

CommentsListItem.propTypes = {
  item: PropTypes.object,
  isPreviousSender: PropTypes.bool,
  isLast: PropTypes.bool,
};
