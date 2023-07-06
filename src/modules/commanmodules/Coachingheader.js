import React from 'react'
import { Box, Card, CardContent, Container, Typography } from '@mui/material'

export default function Coachingheader(props) {

    return (
        <div>
            <Container sx={{ maxWidth: { xl: 1400 }, textAlign: 'center', marginTop: 10 }}>
                <Box>
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} textAlign="center" color='text.secondary' gutterBottom>
                                <h1>{props.title} </h1>
                                <h4>{props.subtitle}</h4>
                                <br></br>
                                <p>{props.para}</p>
                            </Typography>

                        </CardContent>
                    </Card>
                </Box>
            </Container>

        </div>
    )
}
