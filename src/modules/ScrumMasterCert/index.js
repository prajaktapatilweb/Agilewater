import React from 'react'
import HeroSMCert from './HeroSMCert'
import OtherCards from 'modules/commanmodules/OtherCards'
import { otherCardList } from 'modules/Constant/OtherCardsConst'
import { Container, Grid } from '@mui/material'

export default function index() {
    return (
        <div>
            <HeroSMCert />
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <OtherCards data={otherCardList}></OtherCards>

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
