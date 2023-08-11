import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function ENTinfo() {
    var DetailObject = [
        {
            heading: 'ENTERPRISE AND BUSINESS AGILITY',
            para: (
                <span>
                    <b>BUSINESS AGILITY IS THE GOAL</b><br>
                    </br>
                    -Business Agility<br></br>
                    -Systems and Complexity Theory

                    <br></br><br></br>
                    <b>ENTERPRISE COACHING ENABLES BUSINESS AGILITY</b><br></br>
                    -Enterprise Agile Coaching Skills<br></br>
                    -Ethical Considerations of Enterprise Agile Coaching


                </span>
            )
        },
        {
            heading: 'UNDERSTANDING THE ORGANIZATION',
            para: (
                <span>
                    <b>ORGANIZATION DESIGN AND STRUCTURE</b><br></br>

                    -Organization Systems Entry<br></br>
                    -Scaling Agile Frameworks for the Organization<br></br>
                    -Awareness of Organizational Structure and Design
                    <b>BUSINESS PROCESS AND IMPROVEMENT</b><br></br>
                    -Business Processes and Improvements<br></br>
                    -Business Performance Measurements with Agility in Mind
                </span>
            )
        },
        {
            heading: 'COACHING ACROSS THE ORGANIZATION',
            para: (
                <span>
                    <b>COACHING THE ORGANIZATION</b><br></br>

                    -Systems Coaching complements Enterprise Agile Coaching<br></br>
                    -Consulting vs Professional Coaching
                    <b>FACILITATING THE ORGANIZATION</b><br></br>
                    -Boundary Spanning Facilitation Considerations<br></br>
                    -Boundary Spanning Facilitation Techniques<br></br>

                </span>
            )
        },

    ]

    var DetailObject = [
        {
            type: 'title',
            text: 'It\'s New Reaccredited Course!',
        },
        {
            type: 'para',
            text: [
                'ICP-ENT certification certifies understanding of how to coach leadership and cultural change in support of achieving business agility and is one of ICAgile\'s most advanced knowledge-based certifications',
            ],
        },
        {
            type: 'title',
            text: 'Highlighted Learning Objective:',
        },
        {
            type: 'para',
            text: [
                <span><Accordioninfo DetailObject={DetailObject}></Accordioninfo>  </span>
            ],
        },
        {
            type: 'title',
            text: 'ICP-ENT Training Overview:',
        },

        {
            type: 'para',
            text: [
                'The ICP-ENT Agility In The Enterprise Coaching Certification is the first of two knowledge-based certifications on the Enterprise Coaching for Agility Track. This certification focuses on developing an understanding of agility at the enterprise level from structural, process, leadership, and cultural perspectives.',
                'The Learning Outcomes include topics such as systems and complexity theory, measuring business performance from an agile perspective, agile frameworks for enterprise scaling, awareness of organizational design and structure, understanding leadership development, and engaging leadership in conversations about organizational culture.',
                'As an advanced path, most courses in Enterprise Coaching for Agility involve a combination of classroom learning, and ongoing group discussions around practical experience in the field.',
            ]
        },
        {
            type: 'title',
            text: 'Learning Objectives',
        },
        {

            type: 'items',
            text: [
                'Business Agility',
                'Organizational Processes and Improvement',
                'Working with Leaders',
                'Understanding Leadership Development',
                'Developing an Agile Team Culture',
                'Understanding the Whole Value Stream',
                'Agile Frameworks for Enterprise Scaling',
                'Measuring Business Performance with Agility in Mind',
                'Understanding Executive Coaching vs Advising',
            ]
        },
        {
            type: 'title',
            text: 'Who Should Attend',
        },
        {
            type: 'para',
            text: ['Relevant roles include enterprise, program and team-level Agile Coaches, Agile Team Facilitators, or anyone aspiring to these roles. Also, anyone with a strong background in change management and/or organizational design and a curiosity about agile approaches at the enterprise-level will benefit from this certification.']
        },
        {
            type: 'title',
            text: 'You will also get',
        },
        {

            type: 'items',
            text: [
                'ICP-ENT Agility in the Enterprise Certification',
                'Hard copy of comprehensive courseware',
                'Workshop will be facilitated by certified experts',
            ]
        },

        {
            type: 'title',
            text: '(MANDATORY) Course Pre-requisites',
        },
        {
            type: 'para',
            text: ['All Candidates welcome to attend the course, however, the following Pre-requisites are highly recommended']
        },

        {

            type: 'items',
            text: [
                '5+ year\'s of experience in software development,testing, business analysis, product or project management.',
                '3+ year\'s of experience in Scrum Mastery',
                '3+ year\'s of experience in Agile Coaching',
            ]
        },

        {
            type: 'title',
            text: '(OPTIONAL) Course Pre-requisites',
        },
        {

            type: 'items',
            text: [
                'Certified ICP-ACC',
                'Certified ICP-ATF',
            ]
        }
    ]


    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>

        </div>
    )
}
