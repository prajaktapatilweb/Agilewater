import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import { freecourselink, scrumquizlink } from 'modules/commanmodules/Pagelinks'
import React from 'react'

export default function AtScaleinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Registered Scrum@Scale Practitioner Training Overview:',
        },
        {
            type: 'para',
            text: [
                'If you are someone who has good knowledge of Scrum framework and wants to outreach some good projects practice and techniques for Scrum Practice and exquisite career scope, then Registered Scrum @Scale Practitioner Certification is the one for you.Scrum@Scale(by Jeff Sutherland) certification helps to develop an agile approach of how to bring a collaborative approach to develop, process and service in an effective and efficient manner',
            ],
        },
        {
            type: 'title',
            text: 'Benefits of Getting Certified with the Registered Scrum@Scale Practitioner Certification:',
        },
        {
            type: 'items',
            text: [

                'Earn 16 PDUs',
                'Learn to make a minimal bureaucratic organisation',
                'Access to best industry techniques and methods to do Scrum and Scrum@Scale Practitioner roles efficiently and effectively.',
                'Build a collaborative approach with the team to stay ahead of the market competition.',
                'Outreach to wide Career Opportunities across Various Sections of the Software & IT industry.',
                'Engage methods for the attainment of core Scrum and Scrum@Scale knowledge.',
                'Authenticate incremental growth values for Scrum Team.',
            ]
        },
        {
            type: 'title',
            text: ' Requirements:',
        },
        {
            type: 'items',
            text: [
                'Attend Registered Scrum@Scale Practitioner Training Course by our expert and handson Experienced Trainer.',
                'After completion of the Course, clear the Certification Exam.',
                'Upon passing the Certification Exam, accept your Registered Scrum@Scale Practitioner Agreement and complete your Scrum@Scale membership Profile.',
            ]
        },
        { type: 'title', text: 'How Agilewaters helps you :' },

        {
            type: 'items',
            link: {
                bool: true,
                link: scrumquizlink,
                elemNo: 0,
            },
            text: ['Free Mock Test'],
        },
        {
            type: 'items',
            text: [, 'Free Consulting'],
        },
        {
            type: 'items',
            link: {
                bool: true,
                link: freecourselink,
                elemNo: 0,
            },
            text: ['Free Certified Courses'],
        },
        {
            type: 'items',
            text: [, 'Free Guidance'],
        },

    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject} />
        </div>
    )
}
