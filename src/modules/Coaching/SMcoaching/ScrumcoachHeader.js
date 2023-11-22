import Coachingheader from 'modules/commanmodules/Coachingheader'
import React from 'react'
import { Button } from '@mui/material'


export default function ScrumcoachHeader() {
    return (
        <div>
            <Coachingheader
                title="SCRUM MASTER COACHING"
                subtitle="If it matters to you, you'll find a way"
                para=" "
                btn="Hire An Scrum Master Coach"
                link="/hire-coach"
            ></Coachingheader>
        </div>
    )
}
