import { Container, Grid } from '@mui/material'
import { maindata1, maindata2, maindata3, otherCardList, otherCardList2, otherCardList3, otherCardList4, sideList1, sideList2, sideList3, sideList4, sideList5 } from 'modules/Constant/OtherCardsConst'
import SideCard from 'modules/SM/ScrumMasterCert/SideCard'
import HeroforOther from 'modules/commanmodules/HeroforOther'
import OtherCards from 'modules/commanmodules/OtherCards'
import React from 'react'

export default function AgileCert() {
    return (
        <div>
            <Container sx={{ maxWidth: { xl: 1550 }, marginTop: 15 }} >
                <Grid container spacing={{ xs: 4, md: 8 }} >

                    <Grid item xs={12} md={8}>
                        <HeroforOther data={maindata3}></HeroforOther>

                        <OtherCards data={otherCardList4}></OtherCards>

                        <HeroforOther data={maindata1} />

                        <OtherCards data={otherCardList}></OtherCards>

                        <HeroforOther data={maindata2}></HeroforOther>

                        <OtherCards data={otherCardList2}></OtherCards>


                    </Grid>

                    <Grid item xs={12} md={4} sx={{ marginTop: 15 }}>

                        <SideCard data={sideList2} />
                        <SideCard data={sideList3} />
                        <SideCard data={sideList4} />
                        <SideCard data={sideList5} />
                        <SideCard data={sideList1} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
