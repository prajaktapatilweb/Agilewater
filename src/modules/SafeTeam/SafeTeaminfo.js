import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function SafeTeaminfo() {
    var DetailObject = [


        {
            type: 'title',
            text: ' Establishing Team Agility for Agile Release Trains:',
        },
        {
            type: 'para',
            text: [
                'What does it mean to work on an Agile Release Train (ART) that provides value to clients as a member of an Agile team? The tactical expertise needed to be a high-performing ART member is covered by SAFe® for Teams. The training also provides you with the direction and resources you need to collaborate effectively with distributed teams in remote settings. Utilize the context of your learning experience with your team and other teams on your ART to get the most out of it.',

                'Your team\'s collaboration with other teams as part of an ART will be thoroughly covered in SAFe for Teams as well as your role on an Agile team. You\'ll discover how to organize and carry out tasks, how to use the Scaled Agile Framework® and Agile principles, and how to constantly improve. By using the Scaled Agile Framework® for Teams, you and your team will be better equipped to work together productively, produce the highest quality work, and get things done quickly before the next planning event.'
            ]
        },
        {
            type: 'title',
            text: 'What participants will learn:',
        },
        {
            type: 'items',
            text: [
                'Your position on the team and that of your team within the ART',
                'Scaling up SAFe concepts Delivery that is lean and agile',
                'How to organize and carry out iterations and PIs',
            ]
        },

        {
            type: 'title',
            text: 'What is included:',
        },
        {
            type: 'items',
            text: [
                'To help you get ready for the certification exam, obtain their digital badge, and access to SAFe Studio, use the course workbook.',
                'SAFe Virtual Classrooms for distance learning',
                'with the completion of your first course, receive a one-year membership to SAFe® Studio.',
                'Access to a platform with e-learning modules and curated members-only content to support your SAFe transition',
            ]
        },
        {
            type: 'title',
            text: 'How Agilewaters helps you:',
        },
        {
            type: 'items',
            text: [
                'Free Mock Test',
                'Free Consulting',
                'Free Certified Courses',
                'Free Guidance',
            ]

        }
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
