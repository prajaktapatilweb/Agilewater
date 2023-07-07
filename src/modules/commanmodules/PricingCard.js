import React from 'react'
import AppCard from '@crema/core/AppCard';
import { Box } from '@mui/material'
import { Typography } from '@mui/material';

export default function PricingCard(props) {
    return (
        <div>

            <AppCard>
                <Typography variant='h2' sx={{ color: "#20509e" }} gutterBottom>
                    {props.heading}
                </Typography>
                <Box>
                    {props.img}
                </Box>
            </AppCard>
        </div>
    )
}
