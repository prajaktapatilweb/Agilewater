import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'

export default function Coachingheader(props) {

    return (
        <div>

            <Box sx={{ minWidth: 275 }}>
                <Card variant='outlined'>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} textAlign="center" color='text.secondary' gutterBottom>
                            <h1>{props.title} </h1>
                            <h4>{props.subtitle}</h4>
                            <p>{props.para}</p>
                        </Typography>

                    </CardContent>
                </Card>
            </Box>

        </div>
    )
}
