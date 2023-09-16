import { Container, Typography } from '@mui/material'
import React from 'react'

export default function NewForm() {
    return (
        <div>
            <Container sx={{ maxWidth: { xl: 1400 }, marginTop: 10 }}>
                <Typography variant='h1' gutterBottom> Free Certification Course</Typography>
                <Typography variant='h4' gutterBottom> Enroll in any paid course and get access to 30+ free Courses and Certifications.</Typography>
                <Typography variant='h4' gutterBottom>Fill Form To Know About Courses</Typography>
            </Container>
        </div>
    )
}
