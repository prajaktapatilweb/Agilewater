import {
  GET_COMMENT_LIST,
} from 'shared/constants/ActionTypes';

const initialState = {
  CommentList: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT_LIST:
      return {
        ...state,
        CommentList: action.payload.List,
      };

    default:
      return state;
  }
};
export default userReducer;
