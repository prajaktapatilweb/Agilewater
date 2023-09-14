import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import { usersList2 } from 'modules/Constant/Coachdata'
import CoachProfile from 'modules/commanmodules/CoachProfile'
import Careerdetails from './Careerdetails'
import CareerHeader from './CareerHeader'

export default function Careercoaching() {
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
                <CoachProfile data={usersList2} />
            </Container>
            {/* <CareerCoach /> */}

        </div>
    )
}
