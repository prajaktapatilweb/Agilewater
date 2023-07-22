import React from 'react'
import { Container, Typography } from '@mui/material'
import { AppCard } from '@crema'

export default function Coachingdetail(props) {
    return (
        <div>

            <Container sx={{ maxWidth: { xl: 1400 }, marginTop: 10 }}>
                <AppCard sx={{ mb: 7 }}>
                    {props.DetailObject.map((item, i) => (
                        <Typography key={i}>
                            <Typography variant='h1' sx={{ color: "#20509e", textAlign: "center", mt: 3 }} gutterBottom>{item.heading}</Typography>,
                            <Typography variant='body2'>{item.para}</Typography>
                        </Typography>
                    ))}
                </AppCard>
            </Container>
        </div>
    )
}
