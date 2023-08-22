import React from 'react'
import HeroContactus from './HeroContactus'
import { Container, Grid, Typography } from '@mui/material'
import { AppCard } from '@crema'
import Contactusinfo from './Contactusinfo'
import ContactService from './ContactService'
import ContactValues from './ContactValues'
import Contactcourses from './Contactcourses'
import Contactprinciple from './Contactprinciple'
import TeamSlider from './TeamSlider'
import Clients from './Clients'
import Contact from 'modules/commanmodules/Contact'


export default function ContactUs() {
    return (
        <div>
            <HeroContactus />
            <Container sx={{ marginTop: -15, zIndex: 1, position: 'relative' }}>
                <AppCard sxStyle={{ p: 5 }}>
                    <Typography variant='body2' sx={{ textAlign: 'justify' }}> AgileWaters Consulting is a leading consulting, coaching, training(among top10) organisation in the Software and IT industry. Founded by Vijay Wade in the year of 2011, AgileWaters ever-since has been helping professionals get the desired Knowledge & certification to make a successful outreach with the desired set of skills that enables the aspirant to work effectively with 90% of the modern team workflow process. We work on the motto to dwell a culture which invokes Relation building and customised solutions. There are many methods, techniques or frameworks to achieve this, and on our Agile Journey, We have learned these all with magical results of Agile Scrum, Lean Six Sigma combined with other well-known methods or frameworks like Project Management, IT Service Management and Business Analysis.</Typography>
                </AppCard>
            </Container>
            <Grid className='section section-lg section-shaped' sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'white' }}>
                <Container sx={{ maxWidth: { xl: 1450 } }}>
                    <Contactusinfo />
                </Container>
            </Grid>
            <Container sx={{ maxWidth: { xl: 1450 } }}>
                <ContactService />
                <ContactValues />
            </Container>
            <Contactcourses />
            <Grid className='section' sx={{ background: 'white' }}>
                <Container sx={{ maxWidth: { xl: 1450 } }}>
                    <Contactprinciple />
                </Container>
            </Grid>
            <Container sx={{ maxWidth: { xl: 1450 } }}>
                {/* <TeamMember></TeamMember> */}
                <TeamSlider></TeamSlider>
                <Clients></Clients>
                <Contact></Contact>
            </Container>


        </div>
    )
}
