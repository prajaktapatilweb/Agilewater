import React from 'react'
import { Box, Container, Typography, Grid, Link } from '@mui/material'
import { Button } from '@mui/material'

export default function Coachingheader(props) {

    return (
        <div>
            <Grid container className='section' style={{ background: '#edeff3' }}>
                <Container sx={{ maxWidth: { xl: 1400 }, textAlign: 'center', marginTop: 6 }}>
                    <Box>
                        <Typography sx={{ fontSize: 14 }} textAlign="center" color='text.secondary' gutterBottom>
                            <Typography variant='h6'>{props.title} </Typography>
                            <Typography variant='hed'>{props.subtitle}</Typography>

                            <Typography variant='h3' sx={{ my: 4 }}>{props.para}</Typography>

                            <Button variant="contained" sx={{ backgroundImage: "linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)" }}><Link href={props.link} sx={{ color: 'white', textDecoration: 'none' }}> {props.btn}</Link></Button>
                        </Typography>
                    </Box>
                </Container>
            </Grid>
        </div>
    )
}
