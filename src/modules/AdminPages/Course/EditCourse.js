import EnhancedTable from 'modules/commanmodules/EnhancedTable2';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetCourseList} from 'redux/actions';
import TopHeading from '../TopHeading';
import {AppCard} from '@crema';
import {Button, TableCell} from '@mui/material';
import AppDialog from '@crema/core/AppDialog';

export default function EditCourse() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetCourseList());
  }, [dispatch]);
  const CourseList = useSelector((state) => state?.dashboard?.courselist?.List);
  console.log('first 2225', CourseList);

  const [selectedRow, setSelectedRow] = useState();
  const [isDialogOpen, setisDialogOpen] = useState(false);
  const toggleDialogOpen = () => {
    setisDialogOpen(!isDialogOpen);
    setSelectedRow();
  };
  return (
    <>
      <TopHeading title='List of Courses' />
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
