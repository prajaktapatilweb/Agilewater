import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function Accinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Certified Agile Coach: ICP-ACC Certification',
        },
        {
            type: 'para',
            text: [
                'If you have vast experience on the fundamentals of Agile Methods and expertise in its techniques with a promising work history as an Agile Practitioner, then ICP-ACC is the next certification you should go for. ICP-ACC Certification can be your key to embrace further responsibilities as an Agile Coach for more engaging growth and vast career opportunities.',
            ],
        },
        {
            type: 'title',
            text: 'What you will get by the ICP-ACC Certification',
        },
        {
            type: 'para',
            text: [
                'Are you a Scrum Master or an aspiring Agile coach looking to develop the skills of Agile Coaching and promote yourself to the coveted Agile Coach role? Are you tired of expensive certification courses that drain your resources and provide little real-world value? Look no further than our experiential learning program.',
            ],
        },
        {
            type: 'title',
            text: 'How AgileWaters will help you?',
        },
        {
            type: 'items',
            text: [
                'Our program is designed to help you develop the skills of Agile Coaching and advance your career without breaking the bank. Our approach combines online classes, team activities, role-play, and immersive learning, allowing you to learn by doing and master the skills needed to become an exceptional Agile Coach.',
                'With our program, you\'ll learn how to facilitate team collaboration, coach individuals and teams, and enable agile transformations in organizations. You\'ll also learn how to communicate effectively with stakeholders, manage conflicts, and build high- performing teams.',
            ]
        },
        {
            type: 'title',
            text: 'How our team will support you?',
        },
        {
            type: 'items',
            text: [
                'Our experiential learning approach is based on real-world scenarios, allowing you to apply what you learn in a safe and supportive environment. Our team of experienced Agile Coaches will guide you through the process and provide personalized feedback and support to help you achieve your goals.',
                'Don\'t wait any longer to take your career to the next level. Sign up for our experiential learning program today and start your journey towards becoming a successful Agile Coach!',
            ]
        },
        {
            type: 'title',
            text: 'Benefits of Getting Certified with the ICP-ACC Certification:',
        },

        {
            type: 'items',
            text: [
                'Learn best industry techniques and methods to do the role of Agile Coach effectively.',
                'Develop a collaborative approach to stay ahead of the market competition.',
                'Explore best Agile Methods to mentor the teams on Agile Path.',
                'Gain ethics for the attainment of core Agile knowledge.',
                'Enhance your Agile Techniques with continuous improvement.',
                'Expand incremental growth values for the Agile Team as Mentor.',
                'Get LifeTime Validated Agile Coaching Certification.',
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
