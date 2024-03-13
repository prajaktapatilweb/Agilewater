import {
  GET_COURSE_LIST,
  ADD_NEW_COURSE,
  GET_INDIV_COURSE_DATA,
  ADD_NEW_COUPON,
  GET_COUPON_LIST,
} from 'shared/constants/ActionTypes';

const initialState = {
  courselist: null,
  result: null,
  Coursedata: null,
  couponlist: null,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE_LIST:
      return {
        ...state,
        courselist: action.payload,
      };
    case ADD_NEW_COURSE:
      return {
        ...state,
        result: action.payload,
      };

    case GET_INDIV_COURSE_DATA:
      return {
        ...state,
        Coursedata: action.payload,
      };
    case ADD_NEW_COUPON:
      return {
        ...state,
        couponlist: action.payload,
      };
    case GET_COUPON_LIST:
      return {
        ...state,
        couponlist: action.payload,
      };
    default:
      return state;
  }
};
export default dashboardReducer;
