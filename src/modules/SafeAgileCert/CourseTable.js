import { AppCard, AppGridContainer, AppInfoView } from '@crema';
import {
  Container,
  Grid,
} from '@mui/material';
import EnhancedTable from 'modules/commanmodules/EnhancedTable2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGetCourseList, } from 'redux/actions';

export default function CourseTable() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetCourseList());
  }, [dispatch]);
  const CourseList = useSelector((state) => state?.dashboard?.courselist?.List);
  console.log('first 2225', CourseList);

  return (
    <Container>
      {CourseList && (
        <>
          <AppGridContainer>
            <Grid item xs={12} md={12}>

              {/* <AppCard
                title={
                  <>
                    {/* <h3>Teachers and Lecture Category wise Rates</h3>
                    <Box component='p' sx={{ color: 'text.secondary' }}>
                      Standared Lecture Rates are given in heading
                    </Box> *
                  </>
                }
                contentStyle={{ px: 0, textAlign: 'center' }}
              > */}

              <EnhancedTable
                rows={CourseList}
                TableTitle='Agile'
                mainColumn='CourseName'
                orderByColumn='City'
              />
              {/* </AppCard> */}
            </Grid>
          </AppGridContainer>
          {/* <AppDialog
                        open={isDialogOpen}
                        onClose={toggleDialogOpen}
                        title={`Teacher ID:  ${selectedRow?.name}`}
                    >
                        <AddTeacherRates
                            selectedIDData={selectedNewTeacher}
                            toggleEdit={toggleDialogOpen}
                            LectureCategoryData={LectureCategoryData}
                        /> 
                    sds
                </AppDialog> */}
        </>
      )}
      <AppInfoView />
    </Container>
  );
}
