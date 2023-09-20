import React from 'react'
import HeroCareers from './HeroCareers'
import { Container, Grid } from '@mui/material'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import { careerlist, courseList2 } from 'modules/Constant/Relatecoursedata'
import { AppCard } from '@crema'
import SideCard from 'modules/SM/ScrumMasterCert/SideCard'
import { sideList1, sideList6 } from 'modules/Constant/OtherCardsConst'
import Careersidecard from './Careersidecard'
import JobCards from './JobCards'

export default function Careers() {
    return (
        <div>
            <HeroCareers />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard>
                            <h1>Job Opportunities</h1>
                            <JobCards></JobCards>
                        </AppCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Careersidecard></Careersidecard>
                        <RelatedCourses data={careerlist}></RelatedCourses>
                        <SideCard data={sideList6} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
