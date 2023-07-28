import EnhancedTable from 'modules/commanmodules/EnhancedTable3';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetCourseList} from 'redux/actions';
import TopHeading from '../TopHeading';
import {AppCard} from '@crema';

export default function EditCourse() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetCourseList());
  }, [dispatch]);
  const CourseList = useSelector((state) => state?.dashboard?.courselist?.List);
  return (
    <>
      <TopHeading title='Edit the course data' />
      {CourseList && (
        <AppCard>
          <EnhancedTable
            rows={CourseList}
            TableTitle='List of Courses'
            mainColumn='CourseName'
            orderByColumn='City'
            ActionLabel='Edit'
          />
        </AppCard>
      )}
    </>
  );
}
