import React from 'react';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  SHOW_MESSAGE,
  ADD_NEW_COACH,
  GET_INDIV_COACH_DATA,
  GET_COACH_LIST,
} from 'shared/constants/ActionTypes';
import IntlMessages from '@crema/utility/IntlMessages';
import jwtAxios from '@crema/services/auth/jwt-auth';

export const onGetCoachList = () => {
  console.log('Redux Get Cours List ');
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .get('/Coaches/getcourslist')
      .then((data) => {
        console.log('Data Rece REdux', data.data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_COACH_LIST, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onPostNewCoachData = ({formData, resetForm}) => {
  console.log('first redux', formData);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .post('/coaches/addnewcoach', formData)
      .then((data) => {
        if (data.status === 200) {
          console.log('Action ', data);
          dispatch({type: FETCH_SUCCESS});
          console.log('Action 2', data);
          dispatch({type: ADD_NEW_COACH, payload: data.data.data});
          console.log('Action 3', data);
          dispatch({
            type: SHOW_MESSAGE,
            payload: 'Data Added Succefully',
          });
          resetForm();
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onGetIndivCoachData = ({CoachID}) => {
  console.log('Redux Get  Indiv Coach', CoachID);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .get('/Coaches/getindividualCoach', {params: {CoachID: CoachID}})
      .then((data) => {
        console.log('Data Rece REdux', data.data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_INDIV_COACH_DATA, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onUpdateCoachData = ({CoachID, formData}) => {
  console.log('In Redux', data);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .put(`/Coaches/updateCoach/${CoachID}`, formData)
      .then((recdata) => {
        if (recdata.status === 200) {
          // console.log('Data from Redux Students LEads', data.data, deleteID);
          dispatch({type: FETCH_SUCCESS});
          if (recdata.data === 'Nothing to update') {
            dispatch({
              type: SHOW_MESSAGE,
              payload: 'Nothing to update',
            });
          } else {
            dispatch({type: GET_COACH_LIST, payload: recdata.data});
            dispatch({
              type: SHOW_MESSAGE,
              payload: `Data of ${CoachID} Updated`,
            });
          }
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onDeleteIndivCoachData = ({CoachID}) => {
  console.log('Redux Delete  Indiv Coach', CoachID);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .delete(`/Coaches/DeleteCoach/${CoachID}`)
      .then((data) => {
        console.log('Data Rece REdux', data.data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_COACH_LIST, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};
