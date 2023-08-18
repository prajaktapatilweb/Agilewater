import React from 'react'
import HerofreeCourses from './HerofreeCourses'
import FreeCoursesinfo from './FreeCoursesinfo'
import { Container, Grid } from '@mui/material'

export default function FreeCourses() {
    return (
        <div>
            <HerofreeCourses />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={12}>
                        <FreeCoursesinfo />

                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}
