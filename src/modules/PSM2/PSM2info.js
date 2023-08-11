import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function PSM2info() {
    var DetailObject = [



        {
            type: 'title',
            text: 'PROFESSIONAL SCRUM MASTER™ II TRAINING OVERVIEW',
        },
        {
            type: 'para',
            text: ['Professional Scrum MasterTM II (PSM II) course is a 2-day advanced Scrum Master class designed to support Scrum Masters in their professional development. The PSM II course is intended for Scrum Masters with at least one year of experience who are looking to grow their knowledge and abilities as a Scrum Master. This course is one step in that journey. The course also includes a free attempt at the globally recognized Professional Scrum Master II (PSM II) certification exam.',
                ' Unlike the Professional Scrum Master (PSM) course which focuses on how to use Scrum, the Scrum framework and the role of the Scrum Master, PSM II is an advanced course helping students to understand the stances that characterize an effective Scrum Master and servant-leader while diving deep into how they serve the Development Team, Product Owner and organization. The course then teaches students about related practices and skills to enable them to have the right types of conversations and how to apply them to become better Scrum Masters.'],
        },
        {
            type: 'title',
            text: 'What Will You Learn:',
        },
        {
            type: 'para',
            text: ['Over the 2 days, students will learn about areas critical to growing as a successful Scrum Master such as how the principles and values of Scrum help guide Scrum Masters in the decisions they make and how the Scrum Master can help change the environment of Scrum Teams, creating an environment for agility to thrive. The Scrum Master role is complex and often, a Scrum Master must be able to apply different stances in order to be effective, such as:'],
        },
        {
            type: 'items',
            text: [


                'The Scrum Master as a Teacher',
                'The Scrum Master as a Coach & Mentor',
                'The Scrum Master as a Facilitator',
                'The Scrum Master as a Change Agent',
            ]
        },

        {
            type: 'title',
            text: 'Who Should Attend?',
        },
        {

            type: 'para',
            text: ['The Professional Scrum Master II course is an advanced course specifically designed for experienced Scrum Masters who have a thorough understanding of the Scrum framework. It is particularly beneficial for those people with at least one year of Scrum Master experience.']
        },
        {
            type: 'title',
            text: 'Course Objectives',
        },
        {
            type: 'items',
            text: [
                'What practices, tools, skills and stances make an effective Scrum Master',
                'How the Scrum principles and values help guide Scrum Masters in the decisions they make',
                'How the Scrum Master acts as a servant-leader and improve their ability in this role',
                'What the Scrum Master can do to support Development Teams and Product Owners to become more effective',
            ]
        },
        {
            type: 'title',
            text: 'Certification Assessments',
        },
        {

            type: 'para',
            text: ['All participants completing the Professional Scrum Master II course will receive a password to attempt the Professional Scrum Master II (PSM II) assessment. PSM II class participants who attempt the PSM II assessment within 14 days of receiving their free password and do not score at least 85% will be granted a 2nd attempt at no additional cost. You are also entitled to a 40% discount on the PSM III assessment. These industry-recognized PSM certifications require a minimum passing score.']
        },


    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
