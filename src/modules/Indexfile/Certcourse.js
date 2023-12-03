import { Box, Card, Container } from '@mui/material'
import { headList2, } from 'modules/Constant/titlefile'
import CertScrumaccord from 'modules/SM/CertScrumMaster/CertScrumaccord'
import CertScruminfo from 'modules/SM/CertScrumMaster/CertScruminfo'
import Heading from 'modules/commanmodules/Heading'
import LabTabs from 'modules/commanmodules/LabTabs'
import React from 'react'
import Hero from './Hero'

export default function Certcourse() {
    return (
        <div>

            <Box className='section'>
                <Container sx={{ maxWidth: 1500, paddingTop: 15 }} >
                    <Heading data={headList2}></Heading>
                    <LabTabs data={[
                        { label: 'Scrum Master', panelData: <Hero /> },
                        { label: 'SAFe', panelData: <Hero /> },
                        { label: 'Agile', panelData: 'hgdfhg r' },
                        { label: 'Product Owner', panelData: <Hero /> },
                        { label: 'DevOps', panelData: <Hero /> }
                    ]} />
                </Container>
            </Box>



        </div>
    )
}
