import { Box, Card, Container } from '@mui/material'
import { headList21, } from 'modules/Constant/titlefile'
import LabTabs from 'modules/commanmodules/LabTabs'
import React from 'react'
import Hero from './Hero'
import Heading1 from 'modules/commanmodules/Heading1'
import { motion } from 'framer-motion'

export default function Certcourse() {
    return (
        <div>

            <Box className='section' sx={{ background: "#f3f7f9" }}>
                <Container>
                    <motion.div

                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}

                        viewport={{ once: true }}

                        transition={{
                            delay: 0.2,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1
                        }}
                    >
                        <Heading1 data={headList21}></Heading1>
                        <br></br>
                    </motion.div>
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
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.6,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 0.6 },
                            ease: "easeIn",
                            duration: 1
                        }}
                    >

                        <LabTabs data={[
                            { label: 'Scrum Master', panelData: <Hero /> },
                            { label: 'SAFe', panelData: <Hero /> },
                            { label: 'Agile', panelData: 'hgdfhg r' },
                            { label: 'Product Owner', panelData: <Hero /> },
                            { label: 'DevOps', panelData: <Hero /> }
                        ]} />
                    </motion.div>
                    {/* </AppCard> */}
                </Container>
            </Box>



        </div>
    )
}
