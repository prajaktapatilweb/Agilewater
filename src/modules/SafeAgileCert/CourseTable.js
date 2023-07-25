import {AppCard, AppGridContainer, AppInfoView} from '@crema';
import {Container, Grid} from '@mui/material';
import CityFilterOption from 'modules/commanmodules/CityFilterOption';
import EnhancedTable from 'modules/commanmodules/EnhancedTable2';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetCourseList} from 'redux/actions';

export default function CourseTable({PageCourseName}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetCourseList());
  }, [dispatch]);
  const FullCourseList = useSelector(
    (state) => state?.dashboard?.courselist?.List,
  );
  console.log('first Full', FullCourseList);
  let CourseList = PageCourseName
    ? FullCourseList?.filter((item) => item.CourseName === PageCourseName)
    : FullCourseList;
  console.log('first 2225', CourseList);
  const [citySelection, setCitySelction] = useState('All');
  console.log('sdfdsfds', citySelection);
  CourseList =
    citySelection !== 'All'
      ? CourseList?.filter((item) => item.Place === citySelection)
      : CourseList;
  return (
    <Container>
      <CityFilterOption setCitySelction={setCitySelction} />
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

CourseTable.propTypes = {
  PageCourseName: PropTypes.string,
};
