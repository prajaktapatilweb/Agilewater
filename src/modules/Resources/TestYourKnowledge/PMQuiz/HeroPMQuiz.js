import { Link } from '@mui/material'
import Herosectioncopy1 from 'modules/commanmodules/Herosectioncopy1'
import React from 'react'

export default function HeroPMQuiz() {
    return (
        <div>
            <Herosectioncopy1
                image1='/assets/images/courselogo/ICP-APM.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Test Your Agile Project Management Knowledge'
                para={<span>
                    Agile Project Management is the best industrial approach to improve the management and delivery. The use of the Agile Project Management and Delivery skills are much in need and demand in the software and IT industry, so it is must at first to know thoroughly about it.
                    <br></br>
                    But to get certified with <Link href='' sx={{ color: 'yellow' }}> ICP-APM</Link> you'll need to go through the ICP-APM assesment. And so for the same Agile Project Management Practise Exam is the gateway to get yourself assessed with the fundamentals of Agile Project Management and Delivery. So let's dive in and know more about Agile Project Management.
                </span>}

            />
        </div>
    )
}
