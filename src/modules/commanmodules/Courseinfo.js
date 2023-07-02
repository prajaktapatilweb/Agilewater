import React from 'react';
import { Box } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

export default function Courseinfo(props) {
    return (
        <>
            <Box>
                {props.DetailObject.map((item, i) => (
                    <h5>
                        <Typography variant='h2' key={i} gutterBottom>
                            {item.subtitle}
                        </Typography>
                        <Typography variant='body1' gutterBottom>{item.para}</Typography>
                    </h5>
                ))}
            </Box>
        </>
    );
}
