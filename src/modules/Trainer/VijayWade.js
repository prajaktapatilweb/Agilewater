
import { Container, Grid } from '@mui/material'
import { sideList11 } from 'modules/Constant/OtherCardsConst'
import SideCard from 'modules/SM/ScrumMasterCert/SideCard'
import Herosectioncopy1 from 'modules/commanmodules/Herosectioncopy1'
import React from 'react'



export default function VijayWade() {
    return (
        <div>
            <Herosectioncopy1
                image1='/assets/images/courselogo/freecourses.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Vijay'
                para="Enroll in any course and get access to 30+ free Courses and Certifications. "
                btn='Book Session'
                btn1='Class Shedule'

            />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        Professional Summary
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SideCard data={sideList11} />
                    </Grid>
                </Grid>
            </Container>



        </div>
    )
}
