import { AppCard } from '@crema'
import { Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { isTemplateExpression } from 'typescript'

export default function Contactcourses() {
    var Coursenm = [
        {
            coursename: 'Scrum Certification',
            links: ''
        },
        {
            coursename: 'SAFe Certification',
            links: ''
        },
        {
            coursename: 'Agile Coaching',
            links: ''
        },
        {
            coursename: 'DevOps Certification',
            links: ''
        },
        {
            coursename: 'Six Sigma Certification',
            links: ''
        },
        {
            coursename: 'Lean & Agile Coaching',
            links: ''
        },
        {
            coursename: 'Technical Consulting',
            links: ''
        },
        {
            coursename: 'Strategy Consulting',
            links: ''
        },
        {
            coursename: 'Process Consulting',
            links: ''
        },
    ]
    return (
        <div>
            <section className="events2">
                {/* <section className='section' style={{ backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7),rgba(255,255,255,0.7)" }}> */}
                <section className='section' style={{ backgroundImage: "linear-gradient(to right, rgba(60,162,202,0.7), rgba(60,62,202,0.7)" }}>
                    <Container sx={{ maxWidth: 1500, marginTop: 10, textAlign: 'center' }}>
                        <Typography sx={{ color: 'white', fontSize: 27, fontWeight: 'bold' }}> Offerings From AgileWaters</Typography>
                        <Grid container spacing={3} className='section' alignItems='center' sx={{ textAlign: 'center' }}>
                            {Coursenm.map((item, i) => (
                                <Grid item xs={12} md={4} key={i}>
                                    <AppCard key={i}>
                                        <Typography variant='h1'><Link href={item.links} sx={{ fontWeight: 'bold', color: 'black' }}>{item.coursename}</Link></Typography>
                                    </AppCard>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </section>
            </section>
        </div>
    )
}
