import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import { Link, List, ListItem } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React from 'react'

export default function ICPAPOaccord() {
    var DetailObject = [
        {
            heading: 'What are some challenges faced by value-driven product owners?',
            para: (
                <span>
                    Some challenges faced by value-driven product owners include managing conflicting stakeholder needs, adapting to changing market conditions, and effectively communicating the product's value proposition.
                </span>
            )
        },
        {
            heading: 'What is value-driven product ownership?',
            para: 'Value-driven product ownership is an approach where the focus is on maximizing the value delivered to customers and stakeholders through the development and management of a product. It involves understanding the needs of the users, prioritizing features based on their value, and continuously iterating and improving the product to ensure it meets the desired outcomes.'
        },
        {
            heading: 'Why Agile Waters Consulting?',
            para: (
                <span>
                    <List>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>At AgileWaters, we have a team of experienced trainers where each one of them has more than 20+ years of experience on the working and guiding principles of Scrum, Kanban, DevOps, SAFe etc. They provide the best of what we say as theoretical guidance and then about how to implement the fundamentals of SAFe in the work process.</ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>At Agile Waters, we provide support for post-work implementation. This helps the learners to exactly know how to implement the function and methods of SAFe into the work-process and deliver a quality solution to the enterprise.</ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>AgileWaters has combined agile experience of more than 50years, which means our trainers will drive you through every role SAFe has played and how it has evolved with time.</ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>Our Trainers at AgileWaters provide Real-life case studies to know the in-depth and thorough approach of SAFe Agile principles and its working process.</ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>We at Agile Waters provide free SAFe mock tests so you can analyse and evaluate your preparation scenario for the SAFe Agile Certification Exam.</ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>AgileWaters provides a holistic view to SAFe Fundamentals which means we believe in inter-connecting all the things which are related to SAFe Fundamentals to deliver the exact concept and principles of SAFe working process.</ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>We also provide additional free certified Courses.</ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>SAFe Agilist Certification Exam is already added in the Course when you take it from AgileWaters. At first, we will provide you with training and workshops. Afterwards, we will take you through both the theoretical and practical approach with the perspective of the exam.</ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>Many mock papers will also be provided so that you have a good preparation scenario to clear the exam with ease.</ListItem>
                    </List>
                </span>
            )
        },
        {
            heading: 'Why is value-driven product ownership important?',
            para: 'SAFe Agilist certification is the gateway to have a smart approach for the SAFe Agile Practice in an authorised way. SAFe Agilist Certification gives you the license to practice the principle of SAFe in an organisation both at a simple and the advanced level. The good results in the SAFe Agilist certification define your grip on the working principle of SAFe and Agile Principles which eventually helps to explore further career opportunities.'
        },
        {
            heading: 'What is the role of stakeholders in value-driven product ownership?',
            para: 'Stakeholders play a crucial role in value-driven product ownership by providing input, feedback, and representing the interests of the target customers.'
        },
        {
            heading: 'What is the role of a value-driven product owner?',
            para: 'The role of a value-driven product owner is to prioritize the needs and goals of stakeholders in order to deliver the most value to the customer.'
        }


    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
