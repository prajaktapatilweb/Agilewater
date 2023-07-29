import React from 'react'
import OtherCards from 'modules/commanmodules/OtherCards'
import { maindata1, maindata2, maindata3, otherCardList, otherCardList2, otherCardList3, sideList1, sideList2, sideList3, sideList4, sideList5 } from 'modules/Constant/OtherCardsConst'
import { Container, Grid } from '@mui/material'
import HeroforOther from 'modules/commanmodules/HeroforOther'
import SideCard from './SideCard'

export default function index() {

    return (
        <div>

            <Container sx={{ maxWidth: { xl: 1550 }, marginTop: 15 }} >
                <Grid container spacing={{ xs: 4, md: 8 }} direction="row"
                    justifyContent="center"
                    alignItems="center">

                    <Grid item xs={12} md={8}>
                        <HeroforOther data={maindata1} />

                        <OtherCards data={otherCardList}></OtherCards>

                        <HeroforOther data={maindata2}></HeroforOther>

                        <OtherCards data={otherCardList2}></OtherCards>

                        <HeroforOther data={maindata3}></HeroforOther>

                        <OtherCards data={otherCardList3}></OtherCards>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <SideCard data={sideList1} />
                        <SideCard data={sideList2} />
                        <SideCard data={sideList3} />
                        <SideCard data={sideList4} />
                        <SideCard data={sideList5} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
