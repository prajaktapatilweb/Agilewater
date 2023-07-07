import React from 'react'
import { Container, Typography } from '@mui/material'
import { AppCard } from '@crema'

export default function Coachingdetail(props) {
    return (
        <div>

            <Container sx={{ maxWidth: { xl: 1400 }, marginTop: 10 }}>
                <AppCard>
                    <Typography variant='h1' sx={{ color: "#20509e", textAlign: "center" }} gutterBottom>{props.heading}</Typography>
                    <Typography variant='body2'>{props.para}</Typography>

                </AppCard>
            </Container>
        </div>
    )
}
