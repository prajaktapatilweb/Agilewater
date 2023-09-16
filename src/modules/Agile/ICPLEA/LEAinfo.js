import { Link } from '@mui/material'
import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function LEAinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Leading with Agility',
        },


        {
            type: 'para',
            text: [
                'This industry-recognized certificate demonstrates understanding of essential areas of organizational agility capabilities and agile leadership. It certifies a thorough understanding of the essential abilities needed to build personal agility, interpersonal agility, and change and transformation leadership.',
            ],
        },
        {
            type: 'title',
            text: 'FEATURED LEARNING OUTCOMES',
        },
        {
            type: 'items',
            text: [
                'Organizational Agility',
                'Capability Leadership Styles',
                'Emotional Intelligence in Relationships',
                'Leader as Agent of Transformation',
            ]
        },
        {
            type: 'title',
            text: 'Who benefits from this certification?',
        },
        {
            type: 'para',
            text: [
                'This knowledge-based accreditation is beneficial to all levels of the organization\'s leaders and prospective leaders. It was created for professionals interested in learning about the paradigm shifts that are required to lead in adaptive environments and developing essential leadership skills.',
            ],
        },
        {
            type: 'items',
            text: [
                'Delivery leads / Delivery Managers or people moving into these roles',
                'Project or Program Manager or people moving into these roles',
                'Portfolio Managers or people moving into these roles',
                'Release Train Engineers',
                'Business Architects',
                'Enterprise Architects',
                'Managers at any level in the organization',
            ]
        },
        {
            type: 'title',
            text: ' Certification:',
        },
        {
            type: 'para',
            text: [
                'Hands - on learning is included in every ICAgile - accredited course.To achieve this certification, you must actively engage in a live class.',
                'You\'ll receive a certificate after successfully completing the program and completing the post-class survey, which you may share with employers and your professional network. Certificates are printable PDFs that have been set up to be uploaded and shared on LinkedIn.'
            ],
        },



        {
            type: 'items',
            text: [
                'Earn a certificate upon completion',
                'Join a class from anywhere',
                'Explore beyond the limitations of a single agile framework',
                'MINIMUM OF 14 HOURS TO COMPLETE',
                'Foundational knowledge of agile principles, values, and mindset',
            ]
        },



    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
