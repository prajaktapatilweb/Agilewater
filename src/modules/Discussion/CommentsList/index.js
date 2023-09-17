import React, {useEffect, useRef} from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {Fonts} from 'shared/constants/AppEnums';
import SimpleBarReact from 'simplebar-react';
import {styled} from '@mui/material/styles';
import CommentsListItem from './CommentsListItem';
import {Stack} from '@mui/material';

export const StyledSimpleBarReact = styled(SimpleBarReact)(({theme}) => ({
  maxHeight: 600,
  [theme.breakpoints.up('xl')]: {
    maxHeight: 600,
  },
  '@media (min-width: 1920px)': {
    maxHeight: 310,
  },
  '@media (min-width: 2000px)': {
    maxHeight: 350,
  },
  '@media (min-width: 2400px)': {
    maxHeight: 460,
  },
}));
const CommentsList = ({comments, PageAsPath}) => {
  // const _scrollBarRef = useRef();
  // useEffect(() => {
  //   if (comments?.length > 0) {
  //     if (_scrollBarRef?.current) {
  //       const scrollEl = _scrollBarRef.current.getScrollElement();
  //       scrollEl.scrollTop = scrollEl.scrollHeight;
  //     }
  //   }
  // }, [comments, _scrollBarRef]);

  const rootComments = comments.filter((item) => !item.IsItReply);
  // Get All Reply Comments
  const getReplies = (commentId) => {
    const finalArray = [];
    const AllLevelReply = comments
      .filter((item) => item.RepliedToSuperParentID === commentId)
      .sort((a, b) =>
        a.ThreadLevel - b.ThreadLevel === 0 && a.ThreadLevel > 1
          ? new Date(b.OnDate).getTime() - new Date(a.OnDate).getTime()
          : a.ThreadLevel - b.ThreadLevel,
      );
    // .sort(
    //       (a, b) =>
    //   new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    if (AllLevelReply.length > 0) {
      var Threds = AllLevelReply.map((item) => {
        return item.ThreadLevel;
      });
      console.log('Theresd Level', AllLevelReply, Math.max(...Threds));
      for (let i = 0; i < AllLevelReply.length; i++) {
        if (AllLevelReply[i].ThreadLevel === 1) {
          finalArray.push(AllLevelReply[i]);
          console.log('After insertion', finalArray);
        } else {
          // console.log('ssssss',i,finalArray.map((e) => e._id).indexOf(AllLevelReply[i].RepliedToParentID),finalArray);
          let putIndex;
          var FoundIndex = finalArray
            .map((e) => e._id)
            .indexOf(AllLevelReply[i].RepliedToParentID);
          finalArray[FoundIndex]?.ThreadLevel ===
          finalArray[FoundIndex + 1]?.ThreadLevel
            ? (putIndex = FoundIndex + 1)
            : (putIndex = FoundIndex + 1);
          // Put the Element at the index position
          finalArray.splice(putIndex, 0, AllLevelReply[i]);
        }
      }
    }
    console.log('NEWSLU', finalArray);
    return finalArray;
  };
  console.log('first Comments', comments, PageAsPath);
  return (
    <>
      {rootComments.length > 0 ? (
        <Box sx={{marginBottom: 5}}>
          <Box sx={{mb: 4, fontWeight: Fonts.SEMI_BOLD}} component='h4'>
            Comments {comments.length}
          </Box>
          {/* <StyledSimpleBarReact ref={_scrollBarRef}> */}
          <Stack spacing={3}>
            {rootComments.map((item, index) => (
              <CommentsListItem
                item={item}
                key={index}
                isItReply={getReplies(item._id)?.length > 0}
                ReplyCommentList={getReplies(item._id)}
                PageAsPath={PageAsPath}
              />
            ))}
          </Stack>
          {/* </StyledSimpleBarReact> */}
        </Box>
      ) : null}
    </>
  );
};

export default CommentsList;

CommentsList.defaultProps = {
  comments: [],
};

CommentsList.propTypes = {
  comments: PropTypes.array,
  PageAsPath: PropTypes.string,
};
