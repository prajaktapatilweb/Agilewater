import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function CATinfo() {
    var DetailObject = [
        {
            heading: 'EXPLORING LEADERSHIP AND CULTURE',
            para: (
                <span>
                    <b>LEADERSHIP STYLES AND ORGANIZATIONAL CULTURE</b><br>
                    </br>
                    -Enterprise Agile Coaching Skills<br></br>
                    - Leadership Styles and Development

                    <br></br><br></br>
                    <b>ORGANIZATIONAL CULTURE AND ALIGNMENT</b><br></br>
                    -Organizational Culture Models<br></br>
                    - Approaches to Culture Assessment


                </span>
            )
        },
        {
            heading: 'CHANGE PROCESSES AND STRATEGIES',
            para: (
                <span>
                    <b>ORGANIZATION AND HUMAN CHANGE PROCESSES</b><br></br>

                    - Business Case for Change<br></br>
                    - Human Change Process<br></br>
                    - Organizational Change Process<br></br>
                    - Bringing an Agile Mindset to Change<br></br>
                    <b>AGILE TRANSITION AND TRANSFORMATION CHANGE STRATEGIES</b><br></br>
                    - Organizational Assessments<br></br>
                    - Strategy and Contract for Change<br></br>
                    - Organizational Impediments to Change<br></br>
                    - Communicating at an Organizational Level
                </span>
            )
        },
        {
            heading: 'COACHING THROUGH CHANGE',
            para: (
                <span>
                    <b>AGILE TRANSITION AND TRANSFORMATION CHANGE STRATEGIES</b><br></br>

                    -COACHING AND ADVISING LEADERS<br></br>
                    -Enterprise Agile Coaching "Contract"<br></br>
                    -Professional Coaching<br></br>
                    -Trusted Advisor<br></br>
                    -Engaging Leadership in Conversation about Culture<br></br>
                    <b>SELF-MASTERY, PROFESSIONAL DEVELOPMENT AND ETHICS</b><br></br>
                    -Learning Journeys and Professional Development<br></br>
                    -Personal and Professional Mastery<br></br>
                    -Ethical Considerations of Enterprise Agile Coaching<br></br>
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
                'ICP-CAT certification certifies understanding of how to coach leadership and cultural change in support of achieving business agility and is one of ICAgile\'s most advanced knowledge-based certifications',
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
            text: 'ICP-CAT Training Overview',
        },
        {
            type: 'para',
            text: [
                'The ICP-CAT is the second of two knowledge-based certifications on the Enterprise Coaching for Agility Track. ICAgile-Coaching Agile Transitions (ICP-CAT)certification focuses on the field of Enterprise Coaching for Agility, explores the core elements of an agile transformation, and links the core enterprise coaching competencies in a way that empowers coaches to act as agents of change in organizations.',

                'The Learning Outcomes also delve in to the pursuit of professional mastery and the ethical considerations of Enterprise Coaching for Agility. They then look at elements central to agile transitions such as organizational and human change processes, transformation strategies, addressing organizational impediments, and communicating, educating, and facilitating at an organizational level.',

                'As an advanced path, most courses in Enterprise Coaching for Agility involve a combination of classroom learning, and ongoing group discussions around practical experience in the field.'
            ]

        },
        {
            type: 'title',
            text: 'Key Features',
        },
        {

            type: 'items',
            text: [
                '2 day’s workshop that empowers an individual with Enterprise Agile Transformation Skills',
                'Experiential course with hands-on activities based on real-world scenarios',
                'Explore the core objectives and processes of an Enterprise Agile Transformation',
                'Gain the ICP-CAT credential with lifetime validity',
                'Gain the skills needed to coach and sustain an Enterprise Agile Transformation',
            ]

        },
        {
            type: 'title',
            text: 'Who Should Attend',
        },
        {

            type: 'items',
            text: [
                'Relevant roles include enterprise, program and team-level Agile Coaches',
                'Agile Team Facilitators, or anyone aspiring to these roles',
                'anyone with a strong background in change management',
                'anyone with organizational design and a curiosity about agile approaches at the enterprise level will benefit from this certification',
            ]
        },
        {
            type: 'para',
            text: ['Relevant roles include enterprise, program and team-level Agile Coaches, Agile Team Facilitators, or anyone aspiring to these roles. Also, anyone with a strong background in change management and/or organizational design and a curiosity about agile approaches at the enterprise level will benefit from this certification.']
        },
        {
            type: 'title',
            text: 'You will also get',
        },
        {

            type: 'items',
            text: [
                'ICAgile ICP-CAT Certification',
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
            text: ['All Candidates welcome to attend the course, however, the following Pre-requisites are highly recommended'
            ]
        },
        {

            type: 'items',
            text: [
                '5+ year\'s of experience in software development,testing, business analysis, product or project management.',
                '3+ year\'s of experience in Scrum Mastery',
                '3+ year\'s of experience in Agile Coaching'
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
