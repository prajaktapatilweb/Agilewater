import { Box, Grid, Typography } from '@mui/material'
import VideoMain from 'modules/commanmodules/VideoMain'
import React from 'react'

export default function APGIVideos() {
    return (
        <div>
            <Box sx={{ p: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={4}>
                        {/* <VideoMain data={links} videoPromo={'sd'}></VideoMain> */}
                        <Typography variant='h1'>dfgh ghgh</Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
