import React from 'react'
import HeroMentor from './HeroMentor'
import { Container } from '@mui/material'
import { otherCardCopyList } from 'modules/Constant/OtherCardsConst'
import OtherCardscopy from 'modules/commanmodules/OtherCardscopy'

export default function MentorMain() {
    return (
        <div>
            <HeroMentor />

            <Container sx={{ maxWidth: { xl: 1400 }, marginTop: 10, marginBottom: 10 }} >
                <OtherCardscopy data={otherCardCopyList}></OtherCardscopy>
            </Container>

        </div>
    )
}
