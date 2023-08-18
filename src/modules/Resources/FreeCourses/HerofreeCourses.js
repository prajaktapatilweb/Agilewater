import { Button } from '@mui/material'
import Herosectioncopy1 from 'modules/commanmodules/Herosectioncopy1'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React from 'react'

export default function HerofreeCourses() {
    return (
        <div>
            <Herosectioncopy1
                image1='/assets/images/courselogo/freecourses.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Enroll in any course and get access to 30+ free Courses and Certifications.'
                para=" "
                btn={<Button variant='contained'>Free Courses <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon> </Button>}
            />
        </div>
    )
}
