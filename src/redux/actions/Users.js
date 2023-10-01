import React from 'react';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  SHOW_MESSAGE,
  GET_FB_USERS_LIST,
  ADD_NEW_USER,
  GET_INDIV_USER_DATA,
  GET_USERS_LIST,
} from 'shared/constants/ActionTypes';
import IntlMessages from '@crema/utility/IntlMessages';
import jwtAxios from '@crema/services/auth/jwt-auth';

export const onGetUserList = () => {
  console.log('Redux Get User List ');
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .get('/users/getuserslist')
      .then((data) => {
        console.log('Data Rece REdux', data.data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_USERS_LIST, payload: data.data});
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

export const onPostNewUserData = (data) => {
  console.log('first redux', data);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .post('/users/addnewuser', data)
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({
            type: SHOW_MESSAGE,
            payload: 'New User Added Succefully',
          });
          dispatch({type: GET_USERS_LIST, payload: data.data});
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

export const onUpdateUserData = (UserID, formData) => {
  console.log('In Redux', formData);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .put(`/users/updateuser/${UserID}`, formData)
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
            dispatch({type: GET_USERS_LIST, payload: recdata.data});
            dispatch({
              type: SHOW_MESSAGE,
              payload: `Data of ${UserID} Updated`,
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

export const onDeleteIndivUserData = (UserID, toggleDeleteUserDialogue) => {
  console.log('Redux Delete  Indiv User', UserID);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .delete(`/users/deleteuser/${UserID}`)
      .then((data) => {
        console.log('Data Rece REdux', data.data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({
            type: SHOW_MESSAGE,
            payload: 'User Deleted Succefully',
          });
          dispatch({type: GET_USERS_LIST, payload: data.data});
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

export const onUpdateFBUserData = (UserData) => {
  console.log('In Redux', UserData);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .put(`/users/firebaseuserupdates`, UserData)
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
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

export const onGetFBUserData = (email) => {
  console.log('Redux Get Firebase User Data', email);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .get('/users/getfirebaseuserupdates', {params: {email: email}})
      .then((data) => {
        console.log('Data Rece REdux', data.data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_FB_USERS_LIST, payload: data.data});
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
