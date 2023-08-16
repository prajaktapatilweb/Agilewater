import { Button } from '@mui/material'
import Coachingheader from 'modules/commanmodules/Coachingheader'
import React from 'react'

export default function HeroAPGI() {
    return (
        <div>
            <Coachingheader
                title="APGI 5.0 - AGILITY IN THE NEW CONFERENCE (@Pune)"
                subtitle="ON 31ST MARCH AND 1ST APRIL'23 - 9:00 AM - 5:30 PM"
                para={<Button variant="contained" sx={{ backgroundImage: "linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)" }}> Vote for Agile Maestro</Button>}

            />
        </div>
    )
}
