import {Cancel, Check, Delete, Edit, Reply} from '@mui/icons-material';
import {Avatar, Box, Button, Card, Stack, Typography} from '@mui/material';
import React from 'react';
import {useState} from 'react';
import WriteComment from '../WriteComment';
import moment from 'moment';
import {useAuthUser, useJWTAuthUser} from '@crema/utility/AuthHooks';
import {AppConfirmDialog} from '@crema';
import {useDispatch, useSelector} from 'react-redux';
import {onChangeCommentStatus} from 'redux/actions';
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';

export default function CommentIndivCard({item, marginSize = 0, PageAsPath}) {
  const [replyClicked, setreplyClicked] = useState({id: null, action: false});
  const FBuser = useAuthUser().user;
  const router = useRouter();
  console.log('roteuere', router.asPath.split('/'));
  const pageLink = router.asPath.split('/')[1];
  console.log('Page Link', pageLink, PageAsPath);
  const JWTUser = useJWTAuthUser().user;
  const [actionDialogue, setactionDialogue] = useState({bool: false, task: ''});
  const dispatch = useDispatch();
  const toggleActionDialogue = () => {
    setactionDialogue(!actionDialogue);
  };
  const confirmDialogue = () => {
    console.log('Clicked Confirm Dialogy', PageAsPath);
    const userType = JWTUser ? 'JWT' : 'FB';
    const ID = item._id;
    const data = {
      PageAsPath: PageAsPath,
      Status: actionDialogue.task,
      pageLink: pageLink,
    };
    dispatch(onChangeCommentStatus(userType, ID, data));
    toggleActionDialogue();
  };
  const deleteButtonClicked = () => {
    console.log('Delete Button Clicked');
    setactionDialogue({bool: true, task: 'Deleted'});
  };
  const approveButtonClicked = () => {
    console.log('Approve Button Clicked', PageAsPath);
    setactionDialogue({bool: true, task: 'Approved'});
  };
  const replyButtonClicked = () => {
    console.log('Click', item);
    setreplyClicked({
      id: item._id,
      action: true,
      ThreadLevel: item.ThreadLevel,
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
      {item?.Status !== 'Deleted' &&
        (pageLink === 'adminpages'
          ? JWTUser && (
              <FullCard item={item} marginSize={marginSize}>
                {item.Status === 'SentForModeration' ? (
                  <>
                    <Button color='warning' onClick={deleteButtonClicked}>
                      <Delete /> Delete
                    </Button>
                    <Button color='success' onClick={approveButtonClicked}>
                      <Check /> Approve
                    </Button>
                  </>
                ) : !replyClicked?.action ? (
                  <Button onClick={replyButtonClicked}>
                    <Reply /> Reply
                  </Button>
                ) : (
                  <Button color='error' onClick={togglereplyButton}>
                    <Cancel /> Cancel
                  </Button>
                )}
              </FullCard>
            )
          : (item.Status === 'Approved' ||
              item.ByEmailID === FBuser?.email) && (
              <FullCard item={item} marginSize={marginSize}>
                {item.Status === 'Approved' &&
                  (!replyClicked?.action ? (
                    <Button onClick={replyButtonClicked}>
                      <Reply /> Reply
                    </Button>
                  ) : (
                    <Button color='error' onClick={togglereplyButton}>
                      <Cancel /> Cancel
                    </Button>
                  ))}
                {item.Status === 'SentForModeration' &&
                  FBuser?.email === item?.ByEmailID && (
                    <Button color='warning' onClick={deleteButtonClicked}>
                      <Delete /> Delete
                    </Button>
                  )}
              </FullCard>
            ))}
      {replyClicked?.action ? (
        <WriteComment
          replyClicked={replyClicked}
          togglereplyButton={togglereplyButton}
          PageAsPath={PageAsPath}
        />
      ) : null}
      <AppConfirmDialog
        open={actionDialogue.bool}
        onDeny={toggleActionDialogue}
        onConfirm={confirmDialogue}
        title={`Click Yes to ${
          actionDialogue.task === 'Deleted' ? 'delete' : 'approve'
        } the Comment having content "${item.Content}"`}
        dialogTitle={`${actionDialogue.task}`}
      />
    </>
  );
}

CommentIndivCard.propTypes = {
  item: PropTypes.object,
  marginSize: PropTypes.number,
  PageAsPath: PropTypes.string,
};
function FullCard({item, marginSize, children}) {
  return (
    <Card sx={{marginLeft: `${marginSize}px`}}>
      <Box sx={{p: '10px'}}>
        <Stack spacing={2} direction='row'>
          <Box>
            <ShowAvatar data={item}></ShowAvatar>
          </Box>
          <Box sx={{width: '100%'}}>
            <Stack spacing={1} direction='column'>
              <CommentTitle data={item} />
              <Typography sx={{color: 'grayishBlue', p: '2px 0'}}>
                {item.Content}
              </Typography>
              <Stack
                direction={{xs: 'column', sm: 'row'}}
                justifyContent='flex-end'
              >
                {children}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}
FullCard.propTypes = {
  item: PropTypes.object,
  marginSize: PropTypes.number,
  children: PropTypes.object,
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
          {/* {data.ByName[0]} */}
        </Avatar>
      )}
    </Box>
  );
}
ShowAvatar.propTypes = {
  data: PropTypes.object,
};
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
CommentTitle.propTypes = {
  data: PropTypes.object,
};
