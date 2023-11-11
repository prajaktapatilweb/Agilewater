import { Link } from '@mui/material'
import Herosectioncopy1 from 'modules/commanmodules/Herosectioncopy1'
import React from 'react'

export default function HeroKanbanQuiz() {
    return (
        <div>
            <Herosectioncopy1
                image1='/assets/images/courselogo/kanban1.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Test Your Kanban Knowledge'
                para={<span>
                    Kanban is the best industrial approach to improve the workflow process and generate effective and efficient performance. The use of the Kanban Method is much in need and demand in the software and It industry, so it is must at first to know thoroughly about its principles and then get yourself certified with Kanban management professional or practitioner.
                    <br></br>
                    But to get certified with KMP1, KMP2, TKP you'll need to clear the Kanban Certification exam which needs to be an analysed and evaluated process. And so for the same Kanban Practise Exam is the gateway to get yourself assessed with the fundamentals of Kanban. So let's dive in and know more about Kanban Certification Questions Practise Exam.
                </span>

                }
                btn=''
                btn1=''
            />
        </div>
    )
}
