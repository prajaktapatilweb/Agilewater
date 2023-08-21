import { Grid, List, ListItem, Typography } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React from 'react'

export default function Contactprinciple() {
    var details = {
        list11: [
            {
                list1: 'Serve with complete honesty, and dwell culture of learning and growth'
            },
            {
                list1: 'Deliver the transparency for appropriate facilitation'
            },
            {
                list1: 'Futuristic and Holistic growth for all'
            },
            {
                list1: 'Have Friendly, Courteous, Welcoming and Learning Growth for all'
            }
        ],
        list12: [
            {
                list1: 'Thrive Competency Analysis and Development With Standard and Customized Training and workshops'
            },
            {
                list1: 'Possess Engaging manner and bring Wealth of Experience by honesty and integrity.'
            },
            {
                list1: 'Do more with less investment and care for long-term association.'
            }
        ]
    }

    return (
        <div>
            <Grid container spacing={3} sx={{ textAlign: 'center' }}>
                <Grid item xs={12} md={6}>

                    <Typography variant='h7' >Our Principles</Typography>

                    {details.list11.map((item, i) => (

                        <List key={i}>
                            <ListItem alignItems='flex-start'>
                                <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                                {item.list1}
                            </ListItem>
                        </List>
                    ))}

                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h7'>Our Goal</Typography>
                    {details.list12.map((item, i) => (
                        <List key={i}>

                            <ListItem alignItems='flex-start'>
                                <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                                {item.list1}
                            </ListItem>
                        </List>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}
