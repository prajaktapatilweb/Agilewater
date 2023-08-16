import { Container, Grid } from '@mui/material'
import { otherCardList, otherHeroList } from 'modules/Constant/OtherCardsConst'
import HeroforOther from 'modules/commanmodules/HeroforOther'
import OtherCardscopy from 'modules/commanmodules/OtherCardscopy'
import React from 'react'

export default function HeroMentor() {
    return (
        <div>
            <Grid className='section section-lg section-shaped' sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <div className='shape shape-style-u1 shape-dark'>
                    <span className='span-150' />
                    <span className='span-50' />
                    <span className='span-50' />
                    <span className='span-75' />
                    <span className='span-200' />
                    <span className='span-75' />
                    <span className='span-50' />
                    <span className='span-100' />
                    <span className='span-50' />
                    <span className='span-100' />
                </div>
                <Container sx={{ maxWidth: { xl: 1400 } }}>
                    <HeroforOther data={otherHeroList} />


                </Container>
            </Grid>


        </div>
    )
}
