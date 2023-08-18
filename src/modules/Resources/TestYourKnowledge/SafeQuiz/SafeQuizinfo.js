import { Button, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default function SafeQuizinfo({ data }) {
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: '#20509e' }}>Free Quizzes</h1><br></br>
            <Grid container spacing={3}>
                {data.map((item, index) => (
                    <Grid item xs={12} md={4} sx={{ textAlign: 'center', py: 5 }} key={index}>
                        <Card sx={{ p: 5 }}>
                            <Typography variant='h1' gutterBottom> {item.title}</Typography>
                            <Typography variant='body2'>{item.para}</Typography><br></br>
                            <Button variant='contained'>Take Quiz</Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>


        </div>
    )
}
