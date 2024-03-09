import { Link, List, ListItem } from '@mui/material'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React from 'react'
import { freecourselink, safequizlink } from 'modules/commanmodules/Pagelinks';

export default function RteAccord() {
    var DetailObject = [
        {
            heading: "How does a SAFe® Release Train Engineer promote collaboration and alignment?",
            para: <span>A SAFe® Release Train Engineer promotes collaboration and alignment by facilitating ART events such as Program Increment (PI) Planning, Scrum of Scrums, and Inspect and Adapt workshops. They also support cross-team communication and ensure that everyone is working towards the same goals.
                <br></br><br></br>
                As most sections of the Software Industry are turning to Lean-Agile Methods for quality results and improved workflow methods, getting along with the idea of SAFe Agilist Certification can actually prove to be a smart choice.</span>
        },
        {

            heading: "How to become a SAFe® Release Train Engineer?",
            para: <span>SAFe Agilist is someone who implements the fundamentals of working principle of Agile within an organisation at the very beginning of the development cycle. SAFe Agilist are responsible to scale up the use of lean and agile development within an organisation.
                <br></br><br></br>
                SAFe Agilist is the key force behind the planning and execution of program increments within an organisation. They not only help to adopt the fundamentals of SAFe in an organisation but also they do guide the team to have an improvement in the ongoing projects to bring success and better results. They help the knowledge workers to have the smart vision of Agile in order to enhance the capability and engagement.</span>
        },
        {
            heading: 'What is a SAFe® Release Train Engineer (RTE)?',
            para: <span>A SAFe® Release Train Engineer (RTE) is a servant leader and coach for Agile Release Trains (ARTs) within the Scaled Agile Framework (SAFe®). They facilitate the ART processes and execution, working closely with Product Management, Product Owners, and other stakeholders.</span>
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

            heading: ' What are the responsibilities of a SAFe® Release Train Engineer?',
            para: <span>
                The responsibilities of a SAFe® Release Train Engineer include facilitating ART events, ensuring alignment and collaboration across teams, resolving impediments, managing risks, assisting with program execution, and fostering continuous improvement.
                <br></br><br></br>
                The responsibilities of a SAFe® Release Train Engineer include facilitating ART events, ensuring alignment and collaboration across teams, resolving impediments, managing risks, assisting with program execution, and fostering continuous improvement.

            </span>
        },

    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
