import React, {useEffect, useRef} from 'react';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Fonts} from 'shared/constants/AppEnums';
import SimpleBarReact from 'simplebar-react';
import {AppList} from '@crema';
// import CommentsListItem from './CommentsListItem';
import {styled} from '@mui/material/styles';
import CommentsListItem2 from './CommentsListItem2';
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
const CommentsList = ({comments}) => {
  const _scrollBarRef = useRef();
  useEffect(() => {
    if (comments?.length > 0) {
      if (_scrollBarRef?.current) {
        const scrollEl = _scrollBarRef.current.getScrollElement();
        scrollEl.scrollTop = scrollEl.scrollHeight;
      }
    }
  }, [comments, _scrollBarRef]);

  const rootComments = comments.filter((item) => !item.IsItReply);
  // const rootComments = comments;
  const getReplies = (commentId) => {
    console.log('Get reoply ', commentId);
    return comments
      .filter((item) => item.RepliedToSuperParentID === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
  };
  console.log('first', rootComments.length);
  return (
    <>
      {rootComments.length > 0 ? (
        <Box
          sx={{
            marginBottom: 5,
          }}
        >
          <Box sx={{mb: 4, fontWeight: Fonts.SEMI_BOLD}} component='h4'>
            Comments {rootComments.length}
          </Box>
          {/* <pre>{JSON.stringify(comments, null, 2)}</pre> */}
          <StyledSimpleBarReact ref={_scrollBarRef}>
            <Stack spacing={3}>
              {rootComments.map((item, index) => (
                <CommentsListItem2
                  item={item}
                  key={index}
                  // isPreviousSender={
                  //   index > 0 &&
                  //   comments.CommentBy === comments[index - 1].CommentBy
                  // }
                  isItReply={getReplies(item._id).length > 0}
                  ReplyCommentList={getReplies(item._id)}
                  isLast={
                    (index + 1 < rootComments.length &&
                      rootComments.CommentBy !==
                        rootComments[index + 1].CommentBy) ||
                    index + 1 === rootComments.length
                  }
                />
              ))}
              {/* <AppList
                data={rootComments}
                renderRow={(item, index) => (
                  <CommentsListItem2
                    item={item}
                    key={index}
                    // isPreviousSender={
                    //   index > 0 &&
                    //   comments.CommentBy === comments[index - 1].CommentBy
                    // }
                    isItReply={getReplies(item._id).length > 0}
                    ReplyCommentList={getReplies(item._id)}
                    isLast={
                      (index + 1 < rootComments.length &&
                        rootComments.CommentBy !==
                          rootComments[index + 1].CommentBy) ||
                      index + 1 === rootComments.length
                    }
                  />
                )}
              /> */}
            </Stack>
          </StyledSimpleBarReact>
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
};
