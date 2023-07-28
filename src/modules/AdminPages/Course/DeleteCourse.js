import React, {useEffect} from 'react';
import TopHeading from '../TopHeading';
import {useDispatch, useSelector} from 'react-redux';
import EnhancedTable from 'modules/commanmodules/EnhancedTable3';
import {onGetCourseList} from 'redux/actions';
import {AppCard} from '@crema';

export default function DeleteCourse() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetCourseList());
  }, [dispatch]);
  const CourseList = useSelector((state) => state?.dashboard?.courselist?.List);
  return (
    <>
      <TopHeading title='Delete the course' />
      {CourseList && (
        <AppCard>
          <EnhancedTable
            rows={CourseList}
            TableTitle='List of Courses'
            mainColumn='CourseName'
            orderByColumn='City'
            ActionLabel='Delete'
          />
        </AppCard>
      )}
    </>
  );
}
