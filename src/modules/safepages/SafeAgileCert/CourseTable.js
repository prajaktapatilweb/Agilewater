import { AppCard, AppGridContainer, AppInfoView } from "@crema";
import AppDialog from "@crema/core/AppDialog";
import IntlMessages from "@crema/utility/IntlMessages";
import { Box, Button, CardHeader, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLectureRateData } from "redux/actions";
import { Fonts } from "shared/constants/AppEnums";
import EnhancedTable from "../../commanmodules/EnhancedTable";
// import UserTableComman from "modules/commanmodules/UserTableComman";

export default function CourseTable() {
    // const dispatch = useDispatch()
    // React.useEffect(() => {
    //     dispatch(getLectureRateData('LectureRateDataOnly'));
    // }, [dispatch])
    // const LectureCategoryData = useSelector((state) => state.PayRelated.lectureRate);


    // const [selectedRow, setSelectedRow] = useState()
    // const [isDialogOpen, setisDialogOpen] = useState(false)
    // const toggleDialogOpen = () => {
    //     setisDialogOpen(!isDialogOpen)
    //     setSelectedRow()
    // };
    const rows = [
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Donut', 452, 25.0, 51, 4.9),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Honeycomb', 408, 3.2, 87, 6.5),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Jelly Bean', 375, 0.0, 94, 0.0),
        createData('KitKat', 518, 26.0, 65, 7.0),
        createData('Lollipop', 392, 0.2, 98, 0.0),
        createData('Marshmallow', 318, 0, 81, 2.0),
        createData('Nougat', 360, 19.0, 9, 37.0),
        createData('Oreo', 437, 18.0, 63, 4.0),
    ];
    function createData(name, calories, fat, carbs, protein) {
        return {
            name,
            calories,
            fat,
            carbs,
            protein,
            action: 'Register'
        };
    }
    const columns = [
        {
            id: 'name',
            numeric: false,
            label: 'Dessert (100g serving)',
        },
        {
            id: 'calories',
            numeric: true,
            label: 'Calories',
        },
        {
            id: 'fat',
            numeric: true,
            label: 'Fat (g)',
        },
        {
            id: 'carbs',
            numeric: true,
            label: 'Carbs (g)',
        },
        {
            id: 'protein',
            numeric: true,
            label: 'Protein (g)',
        },
        {
            id: 'action',
            numeric: false,
            label: 'Action',
        },
    ];
    const LectureCategoryData = {}

    return (
        <Container>
            {LectureCategoryData &&
                <>
                    <AppGridContainer>
                        <Grid item xs={12} md={12}>
                            <AppCard
                                title={<><h3>Teachers and Lecture Category wise Rates</h3>
                                    <Box component='p' sx={{ color: 'text.secondary' }}>
                                        Standared Lecture Rates are given in heading
                                    </Box></>}
                                contentStyle={{ px: 0, textAlign: 'center' }}
                            >
                                <Typography variant="h2" p={2} >Approved</Typography>
                                <EnhancedTable
                                    rows={rows}
                                    headCells={columns}
                                    TableTitle='Enhanced Table On Nutrition'
                                    mainColumn='name'
                                    orderByColumn='calories'
                                // selectedRow={selectedRow}
                                // setSelectedRow={setSelectedRow}
                                // setisDialogOpen={setisDialogOpen}
                                />

                            </AppCard>
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
            }
            < AppInfoView />
        </Container >

    )
}