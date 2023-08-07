import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function Leadershipinfo() {

    var DetailObject = [
        {
            type: 'title',
            text: ' Agile Leadership Awareness Workshop Benefits:',
        },
        {

            type: 'items',
            text: [
                'Total 4 certificates can be achived with one workshop',
                '2 certificates: Agility in Leadership and Agility in Organizations',
                '2 CAL certificates: CAL-E and CAL-O certificate',
                'Develop Adaptive Leadership to build an effective Agile Organization',
            ]
        },
        {
            type: 'title',
            text: 'Why Does Agile Leadership Matter?',
        },


        {
            type: 'para',
            text: [
                'Globalization, automation, regulation, 24x7 mobility, and disruptive change have dramatically impacted our work and life. Leaders can no longer depend on past patterns of success to operate effectively in this landscape. Agile leadership is more creative, adaptive, empowering, impactful, and effective in highly complex, uncertain, and rapidly changing times. The Agile Leadership Journey™ workshops and programs develop more creative, adaptive, innovative, and resilient leaders and organizations.',
            ],
        },
        {
            type: 'title',
            text: 'What\'s Your Next Step?',
        },

        {
            type: 'para',
            text: [

                <span>
                    <b>Agility in Leadership</b><br></br>
                    Introduces the Leadership Agility Framework and core catalyst practices to improve self-awareness, situational adaptiveness, and effective behaviors.<br></br>

                    <b>Agility in Organizations</b><br></br>
                    Introduces the context of business agility and culture, the Competing Values Framework, and key levers and leadership focus to develop increased business agility<br></br>

                    <b>Applied Agility in Leadership</b><br></br>
                    Developing a Growth Mindset: Vertically develops leaders at every level for increased awareness, balance, adaptivity, engagement, and empowerment. Developing Catalyst Habits: Improves abilities to operate across the organization and leadership levels through improved presence, power, and conversational capability.
                </span>
            ],
        },
        {
            type: 'title',
            text: 'How Agilewaters helps you:',
        },
        {
            type: 'para',
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
