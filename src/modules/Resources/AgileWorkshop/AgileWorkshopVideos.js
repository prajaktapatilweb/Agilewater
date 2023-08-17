import { Box, Grid, Typography } from '@mui/material'
import VideoMain from 'modules/commanmodules/VideoMain'
import React from 'react'

export default function AgileWorkshopVideos({ data }) {
    return (
        <div>
            <Box sx={{ pb: 15 }}>
                <h1 style={{ textAlign: 'center', color: '#20509e' }}>Previous Workshop Recordings</h1>
                <br></br>
                <Grid container spacing={3}>
                    {data.map((item) => (
                        <Grid item xs={12} md={4}>
                            <VideoMain links={item.links} videoPromo={'sd'}></VideoMain>
                            <br></br>
                            <Typography variant='h1'>{item.title}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}
