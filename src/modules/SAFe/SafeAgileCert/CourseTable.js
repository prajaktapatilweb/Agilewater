import {AppCard, AppGridContainer, AppInfoView} from '@crema';
import {Container, Grid} from '@mui/material';
import CityFilterOption from 'modules/commanmodules/CityFilterOption';
import EnhancedTable from 'modules/commanmodules/EnhancedTable3';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetCourseList} from 'redux/actions';
import PropTypes from 'prop-types';
import {CourseOptions} from 'modules/Constant/CommanConst';

export default function CourseTable({DataID}) {
  const PageCourseName = CourseOptions.filter((item) => item.key === DataID)[0]
    .text;
  console.log('PAger', PageCourseName);
  const TableTitle = CourseOptions.filter((item) => item.key === DataID)[0]
    .TableTitle;
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
                TableTitle={TableTitle}
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
  DataID: PropTypes.number,
};
