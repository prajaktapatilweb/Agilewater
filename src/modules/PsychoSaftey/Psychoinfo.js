import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import Image from 'next/image'
import React from 'react'

export default function Psychoinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Psychological Safety - The Foundation for Team Performance Training Overview',
        },
        {
            type: 'para',
            text: [
                'This workshop unpacks Psychological Safety, based on the world renown researchers Timothy Clark, Brené Brown, Amy Edmonson, Adam Grant, and David Rock.The research shows that the number one thing that sets successful teams apart is having psychological safety.',
                'The workshop walks leaders through the 4 stages humans must take to move from inclusion to innovation. The 5-module course is held online in 90-minute sessions with the summary session lasting 60 minutes for a total of 8.5 hours (total of 6 sessions). This workshop jumps out of the theory and into actionable and tangible steps leaders can take to successfully incorporate Psychological Safety into their own leadership and their work environment.',
                'This highly interactive workshop begins with a comprehensive review of psychological safety. Then we dig into each of the 4 stages to help leaders develop and practice their own approach to building psychological safety.',
            ],
        },
        {
            type: 'title',
            text: 'Each participant will gain detailed, hands-on knowledge of psychological safety, including:',
        },
        {

            type: 'items',
            text: [
                'Understanding psychological safety as a concept',
                'Learning how to use the 4 stages of psychological safety framework',
                'Aligning their team with common language, understanding, and conceptual framework',
                'Developing an action plan and next steps for each stage',
            ]
        },

        {
            type: 'title',
            text: 'Who Should Attend',
        },
        {
            type: 'para',
            text: [
                'Relevant roles include enterprise, program and team-level Agile Coaches, Agile Team Facilitators, or anyone aspiring to these roles. Also, anyone with a strong background in change management and/or organizational design and a curiosity about agile approaches at the enterprise level will benefit from this certification.',

                'Participants can expect to dig into their personal leadership values, assumptions, norms, and biases. When this course has been completed, attendees will see the current state clearly and will know the steps to take to transform their own leadership and incorporate psychological safety into their team(s).'
            ]
        },
        {
            type: 'title',
            text: 'Workshop Sessions and Learning objectives',
        },
        {
            type: 'para',
            text: [<span>
                <Image src="/assets/images/Safe/workshopDetails.webp" width={850} height={550} ></Image>
            </span>
            ]
        }
    ]


    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
