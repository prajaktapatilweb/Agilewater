import { Link, List, ListItem, ListItemText } from '@mui/material'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React from 'react'
import { freecourselink, safequizlink } from 'modules/commanmodules/Pagelinks';

export default function SafeTeamaccord() {
    var DetailObject = [
        {
            heading: "Why use SAFe For Teams?",
            para: <span>No matter how big, sophisticated, or specialised your organisation is, it is tried-and-true, scalable, and adaptable. SAFe is trusted by 20,000 businesses and more than a million professionals worldwide.</span>
        },
        {
            heading: "What are the advantages of SAFe For Teams?",
            para: <span>Improve team productivity, time to market, employee engagement, and the calibre of your goods and solutions by changing the way you work.</span>
        },
        {
            heading: 'How SAFe and Agile are helpful?',
            para: <span>Change your culture and mentality. Train individuals in a new method of working to empower them. Modify how you generate and offer value to customers. and prosper in the digital age with company agility.</span>
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
            heading: 'How will SAFe for Teams empower you and your team?',
            para: <span>
                Your position on an Agile team and how your team collaborates with others as part of an ART will be fully explained to you by SAFe for Teams. You'll learn how to organize and carry out tasks, how to use the Scaled Agile Framework® and Agile principles, and how to continuously improve.
                <br></br><br></br>
                The Scaled Agile Framework® for Teams will provide your team with the collective knowledge needed to work well together, produce the best work possible, and get started right away before your next planning event.
            </span>
        },
        {
            heading: 'What is the cost of SAFe For Teams Certification?',
            para: <span>
                The SAFe For Teams Certification cost is Rs.50k with exam, course and training cost included in the same. But the first attempt for the exam must be taken within 30days of course completion. Afterwards, every retake of the exams costs US 50$. ( Subject to change as time passes)
            </span>
        },
        {
            heading: 'What other roles specific certification does SAFe Offer?',
            para: <span>
                The roles in the SAFe are wide and so are the certification programs. So, to choose the kind of role which fits your need and requirement for the Software Industry must be configured very precisely. The different kinds of roles come with a different type of responsibility at the enterprise.
                <br></br><br></br>
                But most of them are highly responsible jobs most in which certifications and training are there for the role of Scrum Master, Agile Coach, Consultant, Architect, Agile Trainer, Solution Architect or System Architect, Business Analyst, Release Engineer Trainee, Program Manager, Product Owner, portfolio manager, Team Lead, change agent and CEO.
            </span>
        }
    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
