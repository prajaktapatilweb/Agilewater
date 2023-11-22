import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import AgileHeader from '../Agilecoaching/AgileHeader'
import Agiledetails from '../Agilecoaching/Agiledetails'
import CoachProfile from 'modules/commanmodules/CoachProfile'
import { usersList } from 'modules/Constant/Coachdata'
import { useDispatch } from 'react-redux'
import { onGetCoachList } from 'redux/actions'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import CoachDetailData from 'modules/AdminPages/Coaches/List/CoachDetailData'
import { AppGrid } from '@crema'
import AppActionGridCard from '@crema/core/New/AppActionGridCard'

export default function Agilecoaching() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(onGetCoachList())
    }, [dispatch]);

    const CoachList = useSelector((state) => state?.Coach?.Coachlist);
    const AgileCoachList = CoachList?.filter(item => item.Expertise.includes("Agile Coach"));

    // console.log('AAAAA', AgileCoachList)
    return (
        <div>
            <AgileHeader />
            <Container sx={{ maxWidth: { xl: 1450 }, my: 10 }}>
                <Agiledetails />
                <Box sx={{ textAlign: 'center', my: 10 }} >
                    <Typography variant='h7'>Choose From Our Top Agile Coaches</Typography>
                </Box>
                {/* <CoachProfile data={CoachList} /> */}

                {AgileCoachList && (
                    <AppGrid
                        responsive={{ xs: 1, sm: 2, md: 3, lg: 2, xl: 3 }}
                        data={AgileCoachList}

                        renderRow={(coach, id) => (
                            <CoachDetailData coach={coach} key={id} />

                        )}
                    />
                )}
            </Container>

        </div >
    )
}
