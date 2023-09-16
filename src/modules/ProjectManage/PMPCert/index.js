import React from 'react'
import HeroPMPcert from './HeroPMPcert'
import Innerlink from 'modules/commanmodules/Innerlink'
import { Container, Grid } from '@mui/material'
import { AppCard } from '@crema'
import PMPCertinfo from './PMPCertinfo'
import MainPMPcertaccord from './MainPMPcertaccord'
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider'
import { freecourseList } from 'modules/Constant/FreeCourseConst'
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload'

export default function PMPCert() {
    return (
        <div>
            <HeroPMPcert />
            <Innerlink />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <PMPCertinfo />
                            <MainPMPcertaccord />
                        </AppCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
                        <Atscaledownload />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
