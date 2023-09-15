import {
  Grid,
} from '@mui/material';
import React, {useEffect} from 'react';
import CommentIndivCard from './CommentIndivCard';
import PropTypes from 'prop-types';
import UseWindowDimensions from 'modules/commanmodules/UseWindowDimensions';

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

export default function CommentsListItem({item, isItReply, ReplyCommentList,PageAsPath}) {
  const {height, width} = UseWindowDimensions();
  console.log('Widnow Dimenstion', height, width);
  return (
    <div>
      <CommentIndivCard item={item} />
      <Grid container spacing={5}>
        <Grid item xs={12}>
          {isItReply
            ? ReplyCommentList.map((item1) => (
                // <CommentFullCard
                <CommentIndivCard
                  item={item1}
                  marginSize={width * ((item1.ThreadLevel * 6) / 100)}
                  PageAsPath={PageAsPath}
                />
              ))
            : null}
        </Grid>
      </Grid>
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

CommentsListItem.propTypes = {
  item: PropTypes.object,
  ReplyCommentList: PropTypes.array,
  isItReply: PropTypes.bool,
};
