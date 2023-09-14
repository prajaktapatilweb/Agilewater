import {Avatar, Box, Button, Card, Stack, Typography} from '@mui/material';
import moment from 'moment';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {styled} from '@mui/material/styles';
import {Cancel, Reply} from '@mui/icons-material';
import WriteComment from '../WriteComment';
import CommentIndivCard from './CommentIndivCard';
import PropTypes from 'prop-types';

// const CommentWrapper = styled(Box)(({theme}) => ({
//   display: 'flex',
//   borderTopRightRadius: theme.cardRadius,
//   borderBottomRightRadius: theme.cardRadius,
//   // margin:'210px',
//   padding: '8px 12px',
//   // minWidth: '80vw',
//   border: `solid 2px ${theme.palette.divider}`,
//   backgroundColor: theme.palette.background.paper,
//   '.last-chat-message &': {
//     borderBottomLeftRadius: theme.cardRadius,
//   },
//   '.reply-chat-message &': {
//     margin: '210px',
//   },
// }));
function getWindowDimensions() {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height,
  };
}
export default function CommentsListItem2({
  item,
  // isPreviousSender = false,
  // isLast,
  isItReply,
  ReplyCommentList,
}) {
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions(),
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }
  const {height, width} = useWindowDimensions();

  // const [selecteditem, setselecteditem] = useState(null);

  // var viewSize = getCurrentDimension();
  // console.log('Size', height, width);
  return (
    <div>
      {/* <CommentFullCard */}
      <CommentIndivCard
        item={item}
        // replyButtonClicked={replyButtonClicked}
        // togglereplyButton={togglereplyButton}
        // replyClicked={replyClicked}
        // setselecteditem={setselecteditem}
      />

      {/* <Stack spacing={5} direction={{sm: 'column'}} alignItems='stretch'> */}
      {isItReply
        ? ReplyCommentList.map((item1) => (
            // <RepliesSection
            //   onReplies={replies}
            //   onClicked={clicked}
            //   onTar={userName}
            // />
            // <h1>sdfdsfds</h1>
            // <Stack
            //   spacing={5}
            //   direction={{sm: 'column'}}
            //   alignItems='flex-end'
            //   // alignItems='stretch'
            //   // useFlexGap flexWrap="wrap"
            // >
            // <div sx={{padding:'100px'}}>

            // <CommentFullCard
            <CommentIndivCard
              item={item1}
              // replyButtonClicked={replyButtonClicked}
              // togglereplyButton={togglereplyButton}
              // replyClicked={replyClicked}
              // setselecteditem={setselecteditem}
              // viewSize={80}
              // viewSize={100 - item1.ThreadLevel * 10}
              marginSize={width * ((item1.ThreadLevel * 6) / 100)}
            />
            // </div>
            // </Stack>
          ))
        : null}
      {/* </Stack> */}
    </div>
  );
}

// function CommentFullCard({
//   item,
//   replyButtonClicked,
//   togglereplyButton,
//   replyClicked,
//   marginSize = 0,
//   setselecteditem,
// }) {
//   return (
//     <Card sx={{marginLeft: `${marginSize}px`}}>
//       <Box sx={{p: '15px'}}>
//         <Stack spacing={2} direction='row'>
//           <Box>
//             <ShowAvatar data={item}></ShowAvatar>
//           </Box>
//           <Box sx={{width: '100%'}}>
//             <Stack
//               spacing={2}
//               direction='column'
//               // justifyContent='space-between'
//               // alignItems='center'
//             >
//               {/* <Stack spacing={2} direction='row' alignItems='center'> */}
//               <CommentTitle data={item} />
//               {/* </Stack>     */}
//               {/* {userName === 'juliusomo' ? (
//               <Stack direction='row' spacing={1}>
//                 <DeleteButton functionality={() => handleOpen()} />
//                 <EditButton
//                   functionality={() => setEditingComm(!editingComm)}
//                   editingComm={editingComm}
//                 />
//               </Stack>
//             ) : (
//               <ReplyButton functionality={() => setClicked(!clicked)} />
//             )} */}
//               <Typography sx={{color: 'grayishBlue', p: '10px 0'}}>
//                 {item.Content}
//               </Typography>
//               {/* <CommentWrapper>
//               <Typography>{item.Content}</Typography>
//             </CommentWrapper> */}
//               {/* <Button
//               variant='outlined'
//               size='small'
//               sx={{m: 1}}
//               onClick={replyButtonClicked}
//             >
//               Reply
//             </Button> */}
//               <Stack
//                 direction={{xs: 'column', sm: 'row'}}
//                 justifyContent='flex-end'
//               >
//                 {!replyClicked?.action ? (
//                   <Button
//                     onClick={() => {
//                       setselecteditem(item);
//                       replyButtonClicked();
//                     }}
//                   >
//                     <Reply /> Reply
//                   </Button>
//                 ) : (
//                   <Button color='error' onClick={() => togglereplyButton(item)}>
//                     <Cancel /> Cancel
//                   </Button>
//                 )}
//               </Stack>
//             </Stack>
//             {replyClicked?.action ? (
//               <WriteComment replyClicked={replyClicked} />
//             ) : null}

//             {/* {editingComm ? (
//             <>
//               <EditableCommentField
//                 commentText={commentText}
//                 setCommentText={setCommentText}
//                 placeHolder="Don't leave this blank!"
//               />
//               <UpdateButton
//                 commentText={commentText}
//                 editingComm={editingComm}
//                 setEditingComm={setEditingComm}
//               />
//             </>
//           ) : (
//             <CommentText commentText={commentText} />
//           )} */}
//           </Box>
//         </Stack>
//       </Box>
//     </Card>
//   );
// }

CommentsListItem2.propTypes = {
  item: PropTypes.object,
  ReplyCommentList: PropTypes.array,
  isItReply:PropTypes.bool
};