import React from 'react'
import HeroAPGI from './HeroAPGI'
import APGIinfo from './APGIinfo'
import APGIGallery from './APGIGallery'
import { Container } from '@mui/material'
import APGIVideos from './APGIVideos'

export default function APGI() {
    return (
        <div>
            <HeroAPGI />
            <APGIinfo />
            <Container sx={{ maxWidth: { xl: 1400 } }}>
                <APGIGallery />
                <APGIVideos />
            </Container>

        </div>
    )
}
