import {GET_COMMENT_LIST} from 'shared/constants/ActionTypes';
import {GET_ALL_COMMENT_LIST} from 'shared/constants/ActionTypes';

const initialState = {
  CommentList: null,
  // AllCommentList: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT_LIST:
      return {
        ...state,
        CommentList: action.payload.List,
      };
    // case GET_ALL_COMMENT_LIST:
    //   console.log('Action Payload',action)
    //   return {
    //     ...state,
    //     AllCommentList: action.payload.List,
    //   };

    default:
      return state;
  }
};
export default userReducer;
