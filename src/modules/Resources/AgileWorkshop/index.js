import React from 'react'
import HeroAPGIWorkshop from './HeroAPGIWorkshop'
import AgileWorkshopinfo from './AgileWorkshopinfo'
import { Box, Container, Grid, Link, Typography } from '@mui/material'
import RelatedCourses from 'modules/commanmodules/RelatedCourses'
import { agileworkshopvideoList } from 'modules/Constant/VideoConst'
import AgileWorkshopVideos from './AgileWorkshopVideos'
import { apgiList } from 'modules/Constant/Relatecoursedata'

export default function AgileWorkshop() {
    return (
        <div>

            <HeroAPGIWorkshop />
            <AgileWorkshopinfo />
            <Container sx={{ maxWidth: { xl: 1450 }, pt: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={9}>
                        <AgileWorkshopVideos data={agileworkshopvideoList} />
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ mt: 10 }}>
                        <RelatedCourses data={apgiList} />
                    </Grid>
                </Grid>
                <Box sx={{ pb: 10 }}>
                    <Typography variant='h7' gutterBottom>
                        For All Previous Free Online Workshop Recordings
                        Visit Our YouTube channel : <Link href='https://www.youtube.com/channel/UCaHUj0eP9LiEK5zL7QrNbNw' sx={{ textDecoration: 'none', fontWeight: 'bold' }} >AgileWaters Consulting</Link>
                    </Typography>
                </Box>
            </Container>
        </div>
    )
}
