import React from 'react';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  SHOW_MESSAGE,
  ADD_NEW_COURSE,
  GET_INDIV_COURSE_DATA,
  GET_COURSE_LIST,
  GET_BLOG_LIST,
} from 'shared/constants/ActionTypes';
import IntlMessages from '@crema/utility/IntlMessages';
import jwtAxios from '@crema/services/auth/jwt-auth';

export const onGetCourseList = () => {
  console.log('Redux Get Cours List ');
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .get('/courses/getcourslist')
      .then((data) => {
        console.log('Data Rece REdux', data.data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_COURSE_LIST, payload: data.data});
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

export const onPostNewCourseData = ({data, resetForm}) => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .post('/courses/addnewcourse', {data})
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: ADD_NEW_COURSE, payload: data.data});
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

export const onGetIndivCourseData = ({CourseID}) => {
  console.log('Redux Get  Indiv Course', CourseID);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .get('/courses/getindividualcourse', {params: {CourseID: CourseID}})
      .then((data) => {
        console.log('Data Rece REdux', data.data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_INDIV_COURSE_DATA, payload: data.data});
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

export const onUpdateCourseData = ({CourseID, data}) => {
  console.log('In Redux', data);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .put(`/courses/updatecourse/${CourseID}`, {data})
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
            dispatch({type: GET_COURSE_LIST, payload: recdata.data});
            dispatch({
              type: SHOW_MESSAGE,
              payload: `Data of ${CourseID} Updated`,
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

export const onDeleteIndivCourseData = ({CourseID}) => {
  console.log('Redux Delete  Indiv Course', CourseID);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    jwtAxios
      .delete(`/courses/DeleteCourse/${CourseID}`)
      .then((data) => {
        console.log('Data Rece REdux', data.data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_COURSE_LIST, payload: data.data});
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

import {createClient} from 'next-sanity';

const client = createClient({
  projectId: 'smjl4qzv',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false,
});

export const onGetBlogData = () => {
  console.log('Redux Get Blog List ');
  return (dispatch) => {
    dispatch({type: FETCH_START});
    client
      .fetch(`*[_type == "post"]`)
      .then((data) => {
        console.log('Blog Data Rece REdux', data.data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_BLOG_LIST, payload: data.data});
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
