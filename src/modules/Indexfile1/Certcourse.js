import { Box, Card, Container } from '@mui/material'
import { headList2, headList21, } from 'modules/Constant/titlefile'
import CertScrumaccord from 'modules/SM/CertScrumMaster/CertScrumaccord'
import CertScruminfo from 'modules/SM/CertScrumMaster/CertScruminfo'
import Heading from 'modules/commanmodules/Heading'
import LabTabs from 'modules/commanmodules/LabTabs'
import React from 'react'
import Hero from './Hero'
import { AppCard } from '@crema'
import Heading1 from 'modules/commanmodules/Heading1'
import UnstyledTab from 'modules/commanmodules/Unstylelab'

export default function Certcourse() {
    return (
        <div>

            <Box className='section' sx={{ background: "#f3f7f9" }}>
                <Container>
                    <Heading1 data={headList21}></Heading1>
                    <br></br>
                    {/* <AppCard sx={{ py: 7, boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}> */}
                    {/* <UnstyledTab

                        data={[
                            { label: 'Scrum Master', panelData: <Hero /> },
                            { label: 'SAFe', panelData: <Hero /> },
                            { label: 'Agile', panelData: 'hgdfhg r' },
                            { label: 'Product Owner', panelData: <Hero /> },
                            { label: 'DevOps', panelData: <Hero /> }
                        ]}
                    >


                    </UnstyledTab> */}


                    <LabTabs data={[
                        { label: 'Scrum Master', panelData: <Hero /> },
                        { label: 'SAFe', panelData: <Hero /> },
                        { label: 'Agile', panelData: 'hgdfhg r' },
                        { label: 'Product Owner', panelData: <Hero /> },
                        { label: 'DevOps', panelData: <Hero /> }
                    ]} />
                    {/* </AppCard> */}
                </Container>
            </Box>



        </div>
    )
}
