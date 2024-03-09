import { Box, Container } from '@mui/material'
import { headList2, } from 'modules/Constant/titlefile'
import Heading from 'modules/commanmodules/Heading'
import LabTabs from 'modules/commanmodules/LabTabs'
import React from 'react'
import { AppCard } from '@crema'
import Safeslider from 'modules/commanmodules/Safeslider'
import Smslider from 'modules/commanmodules/Smslider'
import Agileslider from 'modules/commanmodules/Agileslider'
import Poslider from 'modules/commanmodules/Poslider'
import Devopslider from 'modules/commanmodules/Devopslider'

export default function Certcourse() {
    return (
        <div>
            <Box className='' sx={{ background: "#f3f7f9", pt: 2, pb: 15 }}>
                <Container>
                    <Heading data={headList2}></Heading>
                    <br></br>
                    <AppCard sx={{ pt: 7, pb: 15, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <LabTabs data={[
                            { label: 'SAFe', panelData: <Safeslider></Safeslider> },
                            { label: 'Scrum Alliance', panelData: <Smslider></Smslider> },
                            { label: 'ICAgile', panelData: <Agileslider></Agileslider> },
                            { label: 'Product Owner', panelData: <Poslider /> },
                            { label: 'DevOps', panelData: <Devopslider></Devopslider> }
                        ]} />
                    </AppCard>
                </Container>
            </Box>
        </div>
    )
}
