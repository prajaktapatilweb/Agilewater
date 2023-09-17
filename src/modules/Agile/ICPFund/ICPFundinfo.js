import { Link } from '@mui/material'
import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import { icpatflink } from 'modules/commanmodules/Pagelinks'
import React from 'react'

export default function ICPFundinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'PEOPLE OUT OF JOB CONTACT on WhatsAPP +91 9421809846 FOR DISCOUNTED PRICE',
        },
        {
            type: 'title',
            text: 'Why this class?',
        },

        {
            type: 'para',
            text: [
                'In addition to the learning Agile Fundamentals, following are the other top three benefits of having this class with us.',
            ],
        },
        {
            type: 'items',
            text: [
                'All your questions answered from from agile frameworks like ICAgile Certification paths, Scrum, Kanban, SAFe, Scrum@Scale',
                'You get an option to become member of https://www.scrumglobal.com',
                'You will be getting an option for one to one scrum coaching for 16 hours per annum.There are so many Agile and Scrum Certifications in the market and doing all of them has become very expensive. Trying to solve this problem we have come up with an offering that you can choose regular price of any one certification and can attend any certification class that we offer in a year free of cost by just paying the certification fee.',
            ]
        },
        {
            type: 'title',
            text: 'Who Should Attend',
        },
        {
            type: 'para',
            text: [
                'Scrum Masters;Product Owners;Business Analysts;Test Managers;Project Managers;Delivery Managers;Program Managers;Chief Product Owners;Chief Scrum Master;Operations Manager;CIO and CTOs;PMO and Anyone who wish to know how to improve speed, value, quality and adaptability of your team',
            ],
        },
        {
            type: 'title',
            text: 'Training Content',
        },
        {
            type: 'para',
            text: [
                'ICAgile Fundamental Certification training course covers the history of the agile, agile manifesto, principles and practices at a brief. It also covers Scrum, Kanban and agile estimation and planning at brief Below are the topics we will cover',
            ],
        },
        {
            type: 'title',
            text: 'History',
        },
        {
            type: 'items',
            text: [

                'Origins of Agile',
                'Agile Manifesto',
                'Agile Beyond Software Development',
            ]
        },
        {
            type: 'title',
            text: 'Culture & Mindset',
        },
        {
            type: 'items',
            text: [
                'Understanding the Agile Mindset',
                'Establishing the Agile Mindset',
                'Agile in Context',
            ]
        },

        {
            type: 'title',
            text: 'Individuals & Interactions',
        },
        {
            type: 'items',
            text: [
                'Developing Soft Skills',
                'Understanding Communication Barriers',
                'Sharing Knowledge',

            ]
        },
        {
            type: 'para',
            text: [<span>Check out our other upcoming <Link href=''> Online Agile Coaching Certification</Link>, & <Link href={icpatflink}> ICP Agile Team Facilitation Certification</Link>. </span>]

        }
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
