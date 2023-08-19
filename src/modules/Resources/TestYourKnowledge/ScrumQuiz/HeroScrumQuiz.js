import { Link } from '@mui/material'
import Herosectioncopy1 from 'modules/commanmodules/Herosectioncopy1'
import React from 'react'

export default function HeroScrumQuiz() {
    return (
        <div>
            <Herosectioncopy1
                image1='/assets/images/courselogo/CSM.png'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Test Your Scrum Knowledge'
                para={<span>
                    The CSM and LSM is the key for someone who wants to become a Certified Scrum Master. Though Scrum is a light-weight technique, to know in-depth about the Scrum Framework and its working methodologies, it is must at first to get yourself trained under an experienced hand and then get certified with it. But the certification preparation must and should be an evaluated process. And so for the same is a tool which you need for <Link href='' sx={{ color: 'yellow' }}> CSM certification</Link>.
                    <br></br>
                    The tool is Test your Knowledge for Scrum. The Scrum Master Certification Mock Test tool helps you to assess your preparation for the CSM certification exam as well as gives you an idea about the relevant questions to be asked in the exam.
                </span>}
            />
        </div>
    )
}
