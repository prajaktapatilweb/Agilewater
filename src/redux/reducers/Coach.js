import {
  GET_COACH_LIST,
  ADD_NEW_COACH,
  GET_INDIV_COACH_DATA,
} from 'shared/constants/ActionTypes';

const initialState = {
  Coachlist: null,
  result: null,
  Coachdata: null,
};

const coachReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COACH_LIST:
      return {
        ...state,
        Coachlist: action.payload.List,
      };

    case ADD_NEW_COACH:
      return {
        ...state,
        result: action.payload,
      };

    case GET_INDIV_COACH_DATA:
      return {
        ...state,
        Coachdata: action.payload,
      };

    default:
      return state;
  }
};
export default coachReducer;
