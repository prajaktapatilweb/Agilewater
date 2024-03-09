import { Link, List, ListItem } from '@mui/material'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React from 'react'
import { freecourselink, safequizlink } from 'modules/commanmodules/Pagelinks';

export default function SpcAccord() {
    var DetailObject = [
        {
            heading: "What is SAFe Program Consultant Certification?",
            para: <span>SAFe Program Consultant Certification is a globally recognized certification program offered by Scaled Agile, Inc. It validates the knowledge, skills, and expertise of professionals in implementing the Scaled Agile Framework (SAFe) at an enterprise level.</span>
        },
        {
            heading: "Who should consider getting SAFe Program Consultant Certification?",
            para: <span>SAFe Program Consultant Certification is ideal for Agile coaches, Scrum Masters, project managers, product owners, and anyone involved in leading Agile transformations within organizations.</span>
        },
        {
            heading: 'What are the prerequisites for SAFe Program Consultant Certification?',
            para: <span>To be eligible for SAFe Program Consultant Certification, candidates must have at least five years of experience in Agile practices, as well as experience in Scrum, XP, Kanban, and Lean principles.</span>
        },
        {
            heading: "Why Agile Waters Consulting?",
            para: <List>
                <ListItem alignItems='flex-start'>
                    <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon><span>At AgileWaters, we have a team of experienced trainers where each one of them has more than 20+ years of experience on the working and guiding principles of Scrum, Kanban, DevOps, SAFe etc.They provide the best of what we say as theoretical guidance and then about how to implement the fundamentals of SAFe in the work process.</span>
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon><span>At Agile Waters, we provide support for post - work implementation.This helps the learners to exactly know how to implement the function and methods of SAFe into the work- process and deliver a quality solution to the enterprise.</span>
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon><span>AgileWaters has combined agile experience of more than 50years, which means our trainers will drive you through every role SAFe has played and how it has evolved with time.</span>
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon><span>Our Trainers at AgileWaters provide Real - life case studies to know the in -depth and thorough approach of SAFe Agile principles and its working process.</span>
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon><span>We at Agile Waters provide free SAFe mock tests so you can analyse and evaluate your preparation scenario for the <Link href={safequizlink}>SAFe Agile Certification Exam.</Link></span>
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon><span>AgileWaters provides a holistic view to SAFe Fundamentals which means we believe in inter - connecting all the things which are related to SAFe Fundamentals to deliver the exact concept and principles of SAFe working process.</span>
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon><span><Link href={freecourselink}>We also provide additional free certified Courses.</Link></span>
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon><span>SAFe Agilist Certification Exam is already added in the Course when you take it from AgileWaters.At first, we will provide you with training and workshops.Afterwards, we will take you through both the theoretical and practical approach with the perspective of the exam.</span>
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon><span><Link href={safequizlink}>Many mock papers</Link> will also be provided so that you have a good preparation scenario to clear the exam with ease.</span>
                </ListItem>
            </List >
        },
        {
            heading: 'Is SAFe Program Consultant Certification valid for a lifetime?',
            para: <span>
                No, SAFe Program Consultant Certification is valid for one year. After the initial certification period, certified individuals are required to renew their certification annually to maintain their active status.
            </span>
        },
        {
            heading: 'What are the benefits of SAFe Program Consultant Certification?',
            para: <span>
                SAFe Program Consultant Certification offers numerous benefits, including enhanced career opportunities, increased credibility as an Agile practitioner, advanced knowledge of the Scaled Agile Framework, and the ability to guide organizations in successful Agile transformations.
            </span>
        },

    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
