import { Container, Grid } from '@mui/material'
import React from 'react'
import { Link } from '@mui/material'

export default function Innerlink() {
    return (
        <div>

            <Grid className='section' sx={{ paddingTop: 5, paddingBottom: 5, borderTop: '2px solid white', backgroundImage: "linear-gradient(90deg, #2dd0aa 35%, #3e31cd 90%)" }}>
                <Container sx={{ textAlign: 'center', color: 'white' }}>

                    <Link href="" sx={{ fontSize: 18, textDecoration: "none", color: 'white', px: 3 }}>Overview</Link>|
                    <Link href="" sx={{ fontSize: 18, textDecoration: "none", color: 'white', px: 3 }}> Free Courses</Link>|
                    <Link href="" sx={{ fontSize: 18, textDecoration: "none", color: 'white', px: 3 }}>SAFe Quiz</Link>|
                    <Link href="" sx={{ fontSize: 18, textDecoration: "none", color: 'white', px: 3 }}>FAQs</Link>

                </Container>
            </Grid>
        </div>
    )
}
