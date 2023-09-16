import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import { freecourselink, scrumquizlink } from 'modules/commanmodules/Pagelinks'
import React from 'react'

export default function AdvScruminfo() {
    var DetailObject = [


        {
            type: 'title',
            text: ' A-CSM Certification Training Course:',
        },
        {
            type: 'para',
            text: [
                'If you are someone, who has vast experience on the fundamentals of Scrum Framework and has a promising work history as an expert Scrum Master, then A-CSM Certification is the next certification you should go for. A-CSM Certification refers to the advanced certified scrum master certification which is the next step to embrace further responsibilities with opportunities as a Scrum Master for more more engaging growth.',
            ],
        },
        {
            type: 'title',
            text: 'Benefits of Getting Certified with the A-CSM Certification:'

        },
        {
            type: 'items',
            text: [
                'Become a top notch team coach & good facilitator.',
                'Implement a collaborative approach with the team to stay ahead of the market competition.',
                'Explore wide Career Opportunities across Various Sections of the Software & IT industry.',
                'Expand methods for the attainment of core and advance Scrum knowledge.',
                'Authenticate your Agile Techniques with continuous improvement.',
                'Learn best industry techniques and methods to do Advanced Scrum Master roles effectively.',
            ]

        },
        {
            type: 'title',
            text: 'Requirements:'

        },

        {
            type: 'items',
            text: [
                'Attend A-CSM Training Course by our expert and handson Experienced Trainer.',
                'After completion of the Course, clear the Certification Exam.',
                'Upon passing the Certification Exam, accept your A-CSM License Agreement and complete your Advanced Scrum Master membership Profile.',
            ]
        },
        {
            type: 'title',
            text: 'How Agilewaters helps you for Free:',
        },
        {
            type: 'items',
            link: { bool: true, link: scrumquizlink, elemNo: 0 },
            text: ['FREE Scrum Master certification mock tests']
        },
        {
            type: 'items',
            link: { bool: true, link: freecourselink, elemNo: 0 },
            text: ['Free Certified Courses']
        },
        {
            type: 'items',
            text: [
                'Consulting & Guidance',
                'Support for post-work implementation',
                'Real-life case studies to know the in-depth and thorough approach of Scrum Framework',
                'Many free scrum master certification mock papers',

            ]
        }

    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject} />
        </div>
    )
}
