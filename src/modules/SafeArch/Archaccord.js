import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'
import { Link, List, ListItem } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function Archaccord() {
    var DetailObject = [
        {
            heading: 'SAFe® for Architects answers below questions:',
            para: (<span>
                <List>
                    <ListItem alignItems='flex-start'>
                        <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>How to plan for and execute a program increment (PI)?</ListItem>
                    <ListItem alignItems='flex-start'>
                        <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>How to create clarity and visibility into the architectural vision for an ART?</ListItem>
                    <ListItem alignItems='flex-start'>
                        <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>How to plan the architectural runway to consistently deliver business value?</ListItem>
                </List>
            </span>
            )
        },
        {
            heading: ' Why Agile Waters Consulting?',
            para: (
                <span>
                    <List>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>At
                            AgileWaters, we have a team of experienced trainers where each one
                            of them have more than 20+ years of experience on the working and
                            guiding principles of Scrum, Kanban, DevOps, SAFe etc. They
                            provide the best of what we say as theoretical guidance and then
                            about how to implement the fundamentals of Scrum and SAFe in the
                            work process.
                        </ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>At
                            AgileWaters, we provide support for post-work implementation. This
                            helps the learners to exactly know how to implement the function
                            and methods of Scrum and SAFe into the work-process and deliver a
                            quality solution to the enterprise.
                        </ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                            AgileWaters has combined agile experience of more than 50 years,
                            which means our trainers will drive you through every role Scrum
                            and SAFe has played and how it has evolved with time.
                        </ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>Our
                            Trainers at AgileWaters provide Real-life case studies to know the
                            in-depth and thorough approach of Scrum and SAFe Framework and its
                            working process.
                        </ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>We at
                            Agile Waters provide free SAFe mock tests so you can analyse and
                            evaluate your preparation scenario for the SAFe for Architects
                            Training Certification Exam.
                        </ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                            AgileWaters provides a holistic view to Scrum and SAFe Framework
                            which means we believe in inter-connecting all the things which
                            are related to Scrum and SAFe Framework to deliver the exact
                            concept and principles of both the Framework.
                        </ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>We
                            also provide additional free certified Courses.
                        </ListItem>
                    </List>
                    SAFe for Architecture (ARCH) Exam is already added in the Course when
                    you take it from AgileWaters. At first, we will provide you with
                    training and workshops. Afterwards, we will take you through both the
                    theoretical and practical approach with the perspective of the exam.
                    Many mock papers will also be provided so that you have a good
                    preparation scenario to clear the exam with ease.
                </span>
            ),
        },





    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject} />
        </div>
    )
}
