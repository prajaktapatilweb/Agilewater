import { Box, Card, Container } from '@mui/material'
import { headList2, } from 'modules/Constant/titlefile'
import CertScrumaccord from 'modules/SM/CertScrumMaster/CertScrumaccord'
import CertScruminfo from 'modules/SM/CertScrumMaster/CertScruminfo'
import Heading from 'modules/commanmodules/Heading'
import LabTabs from 'modules/commanmodules/LabTabs'
import React from 'react'
import Hero from './Hero'
import { AppCard } from '@crema'

export default function Certcourse() {
    return (
        <div>

            <Box className='section'>
                <Container sx={{ maxWidth: 1500, paddingTop: 10 }} >
                    <Heading data={headList2}></Heading>
                    <AppCard sx={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}>
                        <LabTabs data={[
                            { label: 'Scrum Master', panelData: <Hero /> },
                            { label: 'SAFe', panelData: <Hero /> },
                            { label: 'Agile', panelData: 'hgdfhg r' },
                            { label: 'Product Owner', panelData: <Hero /> },
                            { label: 'DevOps', panelData: <Hero /> }
                        ]} />
                    </AppCard>
                </Container>
            </Box>



        </div>
    )
}
