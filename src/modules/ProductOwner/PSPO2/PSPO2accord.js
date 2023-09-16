import { Link, List, ListItem } from '@mui/material'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import React from 'react'
import { acspolink, freecourselink } from 'modules/commanmodules/Pagelinks';

export default function PSPO2accord() {
    var DetailObject = [
        {
            heading: 'What is PSPO-II (Professional Scrum Product Owner)?',
            para: (
                <span>

                    The Professional Scrum Product Owner II (PSPO II) assessment from Scrum.org is an advanced-level assessment designed to show that you understand Scrum theory and how to use it in the real world. Between PSPO I and PSPO III in terms of difficulty is the PSPO II evaluation.

                </span>
            )
        },
        {
            heading: ' How many chances are there to pass the test?',
            para: (
                <span>
                    The Professional Scrum Product Owner II (PSPO II) assessment from Scrum.org is an advanced-level assessment designed to show that you understand Scrum theory and how to use it in the real world. Between PSPO I and PSPO III in terms of difficulty is the PSPO II evaluation.
                </span>
            )
        },
        {
            heading: 'Why Agile Waters Consulting?',
            para: (
                <span>
                    <List>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>Our Trainers at AgileWaters are currently Product Owners or previously have been through this role, hence you will get hands-on real-time experience.</ListItem>

                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>At AgileWaters, we have a team of experienced trainers where each one of them has more than 20+ years of experience on the working and guiding principles of Scrum, Kanban, DevOps, SAFe etc. They provide the best of what we say as theoretical guidance and then about how to implement the fundamentals of Scrum in the work process for the role of an ethical Scrum Product Owner.</ListItem>

                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>We provide support for post-work implementation. This helps the learners to exactly know how to implement the function and methods of Scrum into work-process as a Scrum Product Owner and deliver a quality solution to the enterprise.</ListItem>

                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>AgileWaters has combined agile experience of more than 50years, which means our trainers will drive you through every role Scrum has played and how it has evolved with time.</ListItem>

                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>Our Trainers at AgileWaters provide Real-life case studies to know the in-depth and thorough approach of Scrum Framework and its working process.</ListItem>

                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>We at Agile Waters provide a free mock test so you can analyse and evaluate your preparation scenario for the  Professional Scrum Product Owner Certification Exam.</ListItem>

                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>AgileWaters provides a holistic view to Scrum Framework which means we believe in inter-connecting all the things which are related to Scrum Framework to deliver the exact concept and principles of Scrum Framework.</ListItem>

                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon><span>We also provide additional <Link href={freecourselink}>FREE Certified Courses</Link>.</span></ListItem>
                    </List>
                    The  Professional Scrum Product Owner Exam is already added in the Course when you take it from AgileWaters. At first, we will provide you with training and workshops. Afterwards, we will take you through both the theoretical and practical approach with the perspective of the exam.
                    <br></br><br></br>
                    Many mock papers will also be provided so that you have a good preparation scenario to clear the exam with ease.
                    <br></br><br></br>
                    Check out our other upcoming <Link href={freecourselink}>Online LSPO Certification Training Courses.</Link>
                </span>
            )
        },
        {
            heading: 'Is it hard to pass PSPO II?',
            para: 'Become an expert in project management by learning the subject! Obtain the abilities and information you need to prosper and advance your profession. The PSPO II test is one of the more challenging ones for product owners.'
        },
        {
            heading: 'Is there an alternate to PSPO II ?',
            para:
                <span>The alternative to PSPO II is <Link href={acspolink}> Advanced Certified Scrum Product Owner Certification </Link> which is provided by Scrum Alliance Certification body.</span>
        },
        {
            heading: 'What does the PSPO II certification validate?',
            para: 'Understanding of advanced Professional Scrum Product Ownership, the Scrum framework, and delivering valuable products.'
        }




    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
