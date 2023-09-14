import {Cancel, Reply} from '@mui/icons-material';
import {Avatar, Box, Button, Card, Stack, Typography} from '@mui/material';
import React from 'react';
import {useState} from 'react';
import WriteComment from '../WriteComment';
import moment from 'moment';

export default function CommentIndivCard({item, marginSize = 0}) {
  const [replyClicked, setreplyClicked] = useState({id: null, action: false});
  const [selecteditem, setselecteditem] = useState(null);

  const replyButtonClicked = () => {
    console.log('Click', item);
    // selecteditem &&
      setreplyClicked({
        id: item._id,
        action: true,
        ThreadLevel:item.ThreadLevel,
        mainID: item?.RepliedToSuperParentID
          ? item?.RepliedToSuperParentID
          : item._id,

      });
  };
  const togglereplyButton = () => {
    setreplyClicked({id: null, action: false});
  };
  return (
    <>
      <Card sx={{marginLeft: `${marginSize}px`}}>
        <Box sx={{p: '15px'}}>
          <Stack spacing={2} direction='row'>
            <Box>
              <ShowAvatar data={item}></ShowAvatar>
            </Box>
            <Box sx={{width: '100%'}}>
              <Stack
                spacing={2}
                direction='column'
                // justifyContent='space-between'
                // alignItems='center'
              >
                {/* <Stack spacing={2} direction='row' alignItems='center'> */}
                <CommentTitle data={item} />
                {/* </Stack>     */}
                {/* {userName === 'juliusomo' ? (
              <Stack direction='row' spacing={1}>
                <DeleteButton functionality={() => handleOpen()} />
                <EditButton
                  functionality={() => setEditingComm(!editingComm)}
                  editingComm={editingComm}
                />
              </Stack>
            ) : (
              <ReplyButton functionality={() => setClicked(!clicked)} />
            )} */}
                <Typography sx={{color: 'grayishBlue', p: '10px 0'}}>
                  {item.Content}
                </Typography>
                {/* <CommentWrapper>
              <Typography>{item.Content}</Typography>
            </CommentWrapper> */}
                {/* <Button
              variant='outlined'
              size='small'
              sx={{m: 1}}
              onClick={replyButtonClicked}
            >
              Reply
            </Button> */}
                <Stack
                  direction={{xs: 'column', sm: 'row'}}
                  justifyContent='flex-end'
                >
                  {!replyClicked?.action ? (
                    <Button
                    onClick={replyButtonClicked}
                    //   onClick={() => {
                    //     // setselecteditem(item);
                    //     replyButtonClicked();
                    //   }}
                    >
                      <Reply /> Reply
                    </Button>
                  ) : (
                    <Button
                      color='error'
                    //   onClick={() => togglereplyButton(item)}
                      onClick={togglereplyButton}
                    >
                      <Cancel /> Cancel
                    </Button>
                  )}
                </Stack>
              </Stack>
              {replyClicked?.action ? (
                <WriteComment replyClicked={replyClicked} togglereplyButton={togglereplyButton} />
              ) : null}

              {/* {editingComm ? (
            <>
              <EditableCommentField
                commentText={commentText}
                setCommentText={setCommentText}
                placeHolder="Don't leave this blank!"
              />
              <UpdateButton
                commentText={commentText}
                editingComm={editingComm}
                setEditingComm={setEditingComm}
              />
            </>
          ) : (
            <CommentText commentText={commentText} />
          )} */}
            </Box>
          </Stack>
        </Box>
      </Card>
    </>
  );
}

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
    <>
      <Stack
        spacing={{xs: 1, sm: 2, md: 4}}
        direction={{xs: 'column', sm: 'row'}}
        //   alignItems='center'
        mb={2}
      >
        <Typography sx={{fontSize: 14, fontWeight: 'bold', color: 'darkblue'}}>
          {data.ByName}
        </Typography>
        <Typography sx={{fontSize: 12, color: 'grayishBlue'}} pl={1}>
          <span>{moment(data.OnDate).format('DD MMM YYYY @ HH:mm')}</span>
        </Typography>
      </Stack>
    </>
  );
}
