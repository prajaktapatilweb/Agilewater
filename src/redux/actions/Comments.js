import React from 'react';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  SHOW_MESSAGE,
  GET_COMMENT_LIST,
} from 'shared/constants/ActionTypes';
import IntlMessages from '@crema/utility/IntlMessages';
import jwtAxios from '@crema/services/auth/jwt-auth';

export const onGetCommentsList = (data) => {
  console.log('Redux Get Comments List ', data);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .get('/comments/getpagecommentlist', {params: data})
      .then((data) => {
        console.log('Data Rece REdux', data.data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_COMMENT_LIST, payload: data.data});
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

export const onPostNewComment = (data) => {
  console.log('redux', data);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .post('/comments/addnewcomment', data)
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_COMMENT_LIST, payload: data.data});
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
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onChangeCommentStatus = (userType, ID, data) => {
  const linkField = userType ==='JWT' ? 'JWTChangeStatus' : 'FBChangeStatus';
  console.log('In Redux', userType, data, ID, linkField);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .put(`/comments/${linkField}/${ID}`, data)
      .then((recdata) => {
        if (recdata.status === 200) {
          // console.log('Data from Redux Students LEads', data.data, deleteID);
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_COMMENT_LIST, payload: recdata.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: `Status of the Comment Changed`,
          });
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

// export const onDeleteIndivCourseData = ({CourseID}) => {
//   console.log('Redux Delete  Indiv Course', CourseID);
//   return (dispatch) => {
//     dispatch({type: FETCH_START});
//     jwtAxios
//       .delete(`/courses/DeleteCourse/${CourseID}`)
//       .then((data) => {
//         console.log('Data Rece REdux', data.data);
//         if (data.status === 200) {
//           dispatch({type: FETCH_SUCCESS});
//           dispatch({type: GET_COURSE_LIST, payload: data.data});
//         } else {
//           dispatch({
//             type: FETCH_ERROR,
//             payload: <IntlMessages id='message.somethingWentWrong' />,
//           });
//         }
//       })
//       .catch((error) => {
//         dispatch({type: FETCH_ERROR, payload: error.message});
//       });
//   };
// };
