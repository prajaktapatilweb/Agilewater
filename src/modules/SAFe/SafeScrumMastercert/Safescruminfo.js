import Courseinfo from 'modules/commanmodules/Courseinfo'
import React from 'react'
import { Link } from '@mui/material'
import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'

export default function Safescruminfo() {
    var DetailObject =
        [
            { type: 'title', text: 'Class Description' },
            {
                type: 'para',
                text: [
                    'Certified SAFe® Scrum Master (SSM) Certification training is a 2 day course that will do teaching to you to get through knowledge of how the role of Scrum Master works in a safe undertaking.',
                    'Unlike old and wise Scrum Master training that gives all attention on the fundamentals of Team - level Scrum, the safe Scrum master course explores the role of Scrum master in the context of the entire enterprise.You will receive information in how to successfully plan and Execute the road-map of work increment which include simple-making of Scrum through all of the undertaking , executing iteration Planning and understanding the different parts of scale development in Agile Environment.',
                    'The SSM certification signifies that you are prepared to perform the role of Scrum Master in a SAFe environment, increasing your value to teams and organizations that are implementing SAFe.'
                ],
            },
            { type: 'title', text: 'Benefits' },
            { type: 'para', text: ['After completing this course, attendees will be able to'], },
            {
                type: 'items',
                text:
                    ['How to execute iteration planning',
                        'Describe Scrum in a SAFe enterprise',
                        'Facilitate Scrum events',
                        'Facilitate team ceremonies',
                        'Facilitate effective Iteration execution',
                        'Support effective Program Increment execution',
                        'Support relentless improvement',
                        'Coaching those teams to deliver the maximum business value that is achievable through SAFe.',
                        'Coach Agile teams for maximum business results',
                        'Support DevOps implementation',
                        'Experiencing Program Increment planning',
                        'Support effective iteration and PI execution.',
                        'Act as a servant leader and coach'
                    ]
            },
            { type: 'title', text: 'Who Will Benefit?' },
            { type: 'para', text: ['The following individuals will benefit from this course:'], },
            {
                type: 'items',
                text: [
                    'Scrum Masters, Project managers who need to perform the role',
                    'Experienced Scrum Masters who would like to understand their role in the context of a SAFe organization',
                    // '< Link href="https://scaledagile.com/training/safe-scrum-master/" > SAFe</Link > Release Train Engineers who want to coach on their role',
                    'Everyone who wants to become an efficient Scrum Master'
                ]
            },
            {
                type: 'items',
                link: { bool: true, link: 'https://scaledagile.com/training/safe-scrum-master/', elemNo: 0 },
                text: ['SAFe', 'Release Train Engineers who want to coach on their role']
            },
            { type: 'title', text: 'What you get after Completion Of Exam?' },
            {
                type: 'items',
                text: [
                    'SAFe® 6.0 Scrum Master certificate',
                    'A digital badge to promote your accomplishment online',
                    'One-year certified membership as a SAFe Scrum Master, which includes access to the SSM Community of Practice',
                    'SAFe® 6.0 Scrum Master certification usage guide with SSM certification marks',
                    'Access to a variety of learning resources to support you during your SAFe journey',
                ],
            },



        ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject} />
        </div>
    )
}
