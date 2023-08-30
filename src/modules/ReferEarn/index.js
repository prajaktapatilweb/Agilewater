import HeroforOther from 'modules/commanmodules/HeroforOther'
import React from 'react'
import HeroReferEarn from './HeroReferEarn'
import Referinfo from './Referinfo'
import { Container } from '@mui/material'
import ReferFaq from './ReferFaq'

export default function ReferEarn() {
    return (
        <div>
            <HeroReferEarn />
            <Container sx={{ maxWidth: { xl: 1450 } }}>
                <Referinfo></Referinfo>
                <ReferFaq />
            </Container>
        </div>
    )
}
