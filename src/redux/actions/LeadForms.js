import React from 'react';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  SHOW_MESSAGE,
  ADD_NEW_ENQUIRY,
} from 'shared/constants/ActionTypes';
import IntlMessages from '@crema/utility/IntlMessages';
import jwtAxios from '@crema/services/auth/jwt-auth';

// export const onGetCoachList = () => {
//   console.log('Redux Get Cours List ');
//   return (dispatch) => {
//     dispatch({ type: FETCH_START });
//     jwtAxios
//       .get('/coaches/getcoachlist')
//       .then((data) => {
//         console.log('Data Rece REdux', data.data);
//         if (data.status === 200) {
//           dispatch({ type: FETCH_SUCCESS });
//           dispatch({ type: GET_COACH_LIST, payload: data.data });
//         } else {
//           dispatch({
//             type: FETCH_ERROR,
//             payload: <IntlMessages id='message.somethingWentWrong' />,
//           });
//         }
//       })
//       .catch((error) => {
//         dispatch({ type: FETCH_ERROR, payload: error.message });
//       });
//   };
// };

export const onPostNewLead = ({ data }) => {
  console.log('first redux', data);
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .post('/lead/addnewlead', data)
      .then((data) => {
        console.log('data', data)
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: SHOW_MESSAGE,
            payload: 'Data Added Succefully',
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};







export const onPostNewExpert = ({ data }) => {
  console.log('first redux', data);
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .post('/lead/addnewExpert', data)
      .then((data) => {
        console.log('data', data)
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: SHOW_MESSAGE,
            payload: 'Data Added Succefully',
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};
// export const onGetIndivCoachData = ({ CoachID }) => {
//   console.log('Redux Get  Indiv Coach', CoachID);
//   return (dispatch) => {
//     dispatch({ type: FETCH_START });
//     jwtAxios
//       .get('/coaches/getindividualCoach', { params: { CoachID: CoachID } })
//       .then((data) => {
//         console.log('Data Rece REdux', data.data);
//         if (data.status === 200) {
//           dispatch({ type: FETCH_SUCCESS });
//           dispatch({ type: GET_INDIV_COACH_DATA, payload: data.data });
//         } else {
//           dispatch({
//             type: FETCH_ERROR,
//             payload: <IntlMessages id='message.somethingWentWrong' />,
//           });
//         }
//       })
//       .catch((error) => {
//         dispatch({ type: FETCH_ERROR, payload: error.message });
//       });
//   };
// };

// export const onUpdateCoachData = ({ CoachID, formData }) => {
//   console.log('In Redux', CoachID);
//   return (dispatch) => {
//     dispatch({ type: FETCH_START });
//     jwtAxios
//       .put(`/coaches/updatecoach/${CoachID}`, formData)
//       .then((recdata) => {
//         if (recdata.status === 200) {
//           // console.log('Data from Redux Students LEads', data.data, deleteID);
//           dispatch({ type: FETCH_SUCCESS });
//           if (recdata.data === 'Nothing to update') {
//             dispatch({
//               type: SHOW_MESSAGE,
//               payload: 'Nothing to update',
//             });
//           } else {
//             dispatch({ type: GET_COACH_LIST, payload: recdata.data });
//             dispatch({
//               type: SHOW_MESSAGE,
//               payload: `Data of ${CoachID} Updated`,
//             });
//           }
//         } else {
//           dispatch({
//             type: FETCH_ERROR,
//             payload: <IntlMessages id='message.somethingWentWrong' />,
//           });
//         }
//       })
//       .catch((error) => {
//         dispatch({ type: FETCH_ERROR, payload: error.message });
//       });
//   };
// };

// export const onDeleteIndivCoachData = (CoachID) => {
//   console.log('Redux Delete  Indiv Coach', CoachID);
//   return (dispatch) => {
//     dispatch({ type: FETCH_START });
//     jwtAxios
//       .delete(`/coaches/deletecoach/${CoachID}`)
//       .then((data) => {
//         console.log('Data Rece REdux', data.data);
//         if (data.status === 200) {
//           dispatch({ type: FETCH_SUCCESS });
//           dispatch({ type: GET_COACH_LIST, payload: data.data });
//         } else {
//           dispatch({
//             type: FETCH_ERROR,
//             payload: <IntlMessages id='message.somethingWentWrong' />,
//           });
//         }
//       })
//       .catch((error) => {
//         dispatch({ type: FETCH_ERROR, payload: error.message });
//       });
//   };
// };
