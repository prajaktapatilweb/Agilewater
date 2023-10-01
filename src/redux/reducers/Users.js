import {
  ADD_NEW_USER,
  GET_INDIV_USER_DATA,
  GET_USERS_LIST,
  GET_FB_USERS_LIST,
} from 'shared/constants/ActionTypes';

const initialState = {
  Userslist: null,
  result: null,
  Coachdata: null,
  FBUserData: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      console.log('sdsdsdsd', action);
      return {
        ...state,
        Userslist: action.payload.List,
      };

    case GET_INDIV_USER_DATA:
      return {
        ...state,
        Userdata: action.payload,
      };

    case GET_FB_USERS_LIST:
      return {
        ...state,
        FBUserData: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
