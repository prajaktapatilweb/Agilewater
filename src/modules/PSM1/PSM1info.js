import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function PSM1info() {
    var DetailObject = [


        {
            type: 'title',
            text: 'Professional Scrum Master 1 Course Overview',
        },
        {
            type: 'para',
            text: ['If fundamentals of the Scrum Framework make you Agile and believe with the principles of Scrum you can mentor the Scrum Team on Agile Path, then PSM is the best Certification you should go for. The PSM Certified Professionals are highly recognised in the work industry for the work ethics and values they deliver to the organisation as a Scrum Master.']
        },
        {
            type: 'title',
            text: 'Benefits of Getting Certified with the PSM Certification:',
        },
        {
            type: 'items',
            text: [
                'Become a top-notch team Mentor & good facilitator.',
                'Learn the best industry techniques and methods to do Scrum Master roles effectively.',
                'Implement a collaborative approach with the team to stay ahead of the market competition.',
                'Explore wide Career Opportunities across Various Sections of the Software & IT industry.',
                'Expand methods for the attainment of core and advance Scrum knowledge.',
                'Authenticate your Agile Techniques with continuous improvement.',
            ]
        },
        {
            type: 'title',
            text: 'Requirements:',
        },
        {
            type: 'items',
            text: [
                'Attend PSM Training Course by our expert and hands-on Experienced Trainer.',
                'After completion of the Course, clear the Certification Exam.',
            ]
        },
        {
            type: 'title',
            text: 'How Agilewaters helps you :',
        },
        {
            type: 'items',
            link: { bool: true, link: ' ', elemNo: 0 },
            text: ['FREE Scrum Master certification mock tests']
        },
        {
            type: 'items',
            link: { bool: true, link: ' ', elemNo: 0 },
            text: ['Free Certified Courses']
        },
        {
            type: 'items',
            text: [
                'Consulting & Guidance',
                'support for post-work implementation',
                'Real-life case studies to know the in-depth and thorough approach of Scrum Framework',
                'Many free scrum master certification mock papers',
            ]
        }

    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
