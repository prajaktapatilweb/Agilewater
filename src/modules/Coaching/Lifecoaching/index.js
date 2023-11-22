import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import LifeHeader from './LifeHeader';
import CoachProfile from 'modules/commanmodules/CoachProfile';
import { usersList1 } from 'modules/Constant/Coachdata';
import Lifedetails from './Lifedetails';
import { useDispatch } from 'react-redux'
import { onGetCoachList } from 'redux/actions'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AppGrid } from '@crema';
import CoachDetailData from 'modules/AdminPages/Coaches/List/CoachDetailData';

export default function Lifecoching() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(onGetCoachList())
    }, [dispatch]);

    const CoachList = useSelector((state) => state?.Coach?.Coachlist);
    const LifeCoachList = CoachList?.filter(item => item.Expertise.includes("Life Coach"));
    // console.log('dddd', usersList1);

    return (
        <div>
            <LifeHeader />
            <Container sx={{ maxWidth: { xl: 1450 }, my: 10 }}>
                <Lifedetails />
                <Box sx={{ textAlign: 'center', my: 10 }}>
                    <Typography variant='h7'>Choose From Our Top Life Coaches</Typography>
                </Box>
                {LifeCoachList && (
                    <AppGrid
                        responsive={{ xs: 1, sm: 2, md: 3, lg: 2, xl: 3 }}
                        data={LifeCoachList}
                        renderRow={(coach, id) => (
                            <CoachDetailData coach={coach} key={id} />
                        )}
                    />
                )}
                {/* <CoachProfile data={usersList1} /> */}
            </Container>

            {/* <Democoach /> */}
        </div>
    );
}
