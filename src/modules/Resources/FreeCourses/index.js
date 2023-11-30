import React from 'react'
import HerofreeCourses from './HerofreeCourses'
import { Container, Grid, Link } from '@mui/material'
import Image from 'next/image'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpertForm from 'modules/Forms/ExpertForm'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import { courseList2 } from 'modules/Constant/Relatecoursedata'

export default function FreeCourses() {

    const alldata = {
        Scrum: [
            'Scrum Fundamentals',
            'Scrum Developer',
            'Scrum Master',
            'Agile Master',
            'Scrum Product Owner',
            'Expert Scrum Master',
        ],
        Six_Sigma: [
            'Six Sigma Yellow Belt',
            'Six Sigma Green Belt',
            'Lean Six Sigma Green Belt',
            'Six Sigma Black Belt',
            'Lean Six Sigma Black Belt',
        ],
        DigitalMarketing: [
            'Digital Marketing Fundamentals',
            'Digital Marketing Professional',
            'Digital Marketing Specialist',
            'Digital Marketing Expert',
        ],
        MarketingStrategy: [
            'Marketing Strategy Fundamentals',
            'Marketing Strategy Professional',
            'Marketing Strategy Specialist',
            'Marketing Strategy Expert',
        ],
        ITIL: [
            'ITIL Foundation v3',
            'ITIL Foundation v4',
            'ITIL Intermediate SO',
            'ITIL Intermediate CSI',
        ],
        COBIT: [
            'COBIT Foundation v5'
        ],
        PRINCE2: [
            'PRINCE2 Foundation',
            'PRINCE2 Practitioner',
        ],
        MSP: [
            'MSP Foundation',
            'MSP Practitioner',
        ],
        Negotiation: [
            'Negotiation Associate',
            'Negotiation Professional',
        ],
        RiskManagement: [
            'Risk Management',
        ]

    }
    return (
        <div>
            <HerofreeCourses />

            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Typography variant='h2'>Get Free Online Certification Courses*:</Typography>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>

                        {
                            Object.keys(alldata).map(item => {
                                return <>
                                    <Accordion sx={{ border: '1px solid lightgrey' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>{item}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container spacing={3}>
                                                {

                                                    alldata[item].map(item1 => <>
                                                        <Grid item xs={12} md={4}>
                                                            <Image src={`/assets/images/cards/freecert/${item1}.webp`} width={460} height={200} layout='responsive' alt={item.title} />
                                                            <h2>{item1}</h2>
                                                            <Link href="/free-course">Free Certification Course</Link>
                                                        </Grid>
                                                    </>
                                                    )
                                                }

                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                    {/* <h1>{item}</h1> */}
                                    {/* {
                                        alldata[item].map(item1 => <>
                                            <Image src={`/assets/images/cards/freecert/${item1}.jpg`} width={460} height={200} layout='responsive' alt={item.title} />
                                            <h2>{item1}</h2>
                                            <Link href="/free-course">Free Certification Course</Link>
                                        </>
                                        )
                                    } */}

                                </>
                            }
                            )
                        }
                        <RelatedCourses data={courseList2}></RelatedCourses>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ExpertForm AllowedFieldArray={['Name', 'Email', 'Phone', 'Certification', 'Message']} />
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}
