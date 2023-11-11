import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import { usersList2 } from 'modules/Constant/Coachdata'
import CoachProfile from 'modules/commanmodules/CoachProfile'
import Careerdetails from './Careerdetails'
import CareerHeader from './CareerHeader'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { onGetCoachList } from 'redux/actions'
import { useSelector } from 'react-redux'
import { AppGrid } from '@crema'
import CoachDetailData from 'modules/AdminPages/Coaches/List/CoachDetailData'


export default function Careercoaching() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(onGetCoachList())
    }, [dispatch]);

    const CoachList = useSelector((state) => state?.Coach?.Coachlist);
    const CareerCoachList = CoachList?.filter(item => item.Expertise.includes("Career Coach"));
    return (
        <div>
            <CareerHeader />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Careerdetails />
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant='h7'>
                        Choose From Our Top Career Coaches
                    </Typography>
                </Box>
                {CareerCoachList && (
                    <AppGrid
                        responsive={{ xs: 1, sm: 2, md: 3, lg: 2, xl: 3 }}
                        data={CareerCoachList}
                        renderRow={(coach, id) => (
                            <CoachDetailData coach={coach} key={id} />
                        )}
                    />
                )}
                {/* <CoachProfile data={usersList2} /> */}
            </Container>
            {/* <CareerCoach /> */}

        </div>
    )
}
