import { Link } from '@mui/material'
import Herosectioncopy1 from 'modules/commanmodules/Herosectioncopy1'
import React from 'react'

export default function HeroSafeQuiz() {
    return (
        <div>
            <Herosectioncopy1
                image1='/assets/images/courselogo/freecourses.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Test Your SAFe Knowledge'
                para={<span>
                    SAFe is the leading certification body which provides for different Agile Certification. These certifications include <Link href='' sx={{ color: 'yellow' }}>SAFe Agilist</Link>, <Link href='' sx={{ color: 'yellow' }}>SAFe Scrum Master</Link>, <Link href='' sx={{ color: 'yellow' }}>SAFe Advanced Scrum Master</Link>, & <Link href='' sx={{ color: 'yellow' }}>SAFe POPM Certification</Link>. The working principles of SAFe are of great use when it comes to becoming Agile and delivering effective progressive work value.
                    <br></br>
                    SAFe offers various certifications based on the roles in an IT & Software Industry on a large scale. But at first, one needs to clear the certification exam so as to get certified with SAFe Certification. And that needs a thoroughly analyzed process for which the SAFe Agile Certification Questions practice exam is the best tool to evaluate your hold on the principles and techniques of SAFe.
                </span>}

            />
        </div>
    )
}
