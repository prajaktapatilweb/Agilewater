import { Link } from '@mui/material'
import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import { acsmlink, csmlink, scrumquizlink, smlink } from 'modules/commanmodules/Pagelinks'
import React from 'react'

export default function SMinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Become A Scrum Master ',
        },
        {
            type: 'title',
            text: 'Benefits of Scrum Master Certification:',
        },

        {
            type: 'items',
            text: [
                'Benefits of Scrum Master Certification:',
                'Sets you apart as a leader with proven expertise',
                'Most popular Agile framework in use',
                'Stay relevant in today’s job market',
                'Spearhead increased productivity and deliverables',
                'Improve team management and collaboration',
                'Cultivate a healthier work environment',
            ]
        },
        {
            type: 'title',
            text: 'Why Should Employees Become Scrum Certified?'
        },
        {
            type: 'title',
            text: <h5 style={{ color: 'black' }}>Scrum Helps Businesses:</h5>
        },
        {
            type: 'items',
            text: [

                'Innovate faster',
                'Move from ideation to delivery more quickly',
                'Increase customer and client satisfaction',
                'Reduce friction in team collaboration',
                'Improve employee morale and productivity',
                'Increase transparency, fast feedback and continual improvement',
            ]
        },
        {
            type: 'title',
            text: 'In an Scrum Master course you’ll learn:'
        },
        {
            type: 'para',
            text: ['The Scrum Master curriculum was developed by the co-creator of Scrum, Dr. Jeff Sutherland. This course goes beyond the basics of Scrum and the Scrum Master role.']
        },


        {
            type: 'items',
            text: [
                'The Scrum Framework with an emphasis on the role of the Scrum Master.',
                'How the Scrum Framework helps deliver products and services faster and with higher quality while cutting cost and improving employee happiness and job satisfaction.',
                'How to leverage lean principles to identify waste in a system, process, or organization.',
                'Techniques and metrics Scrum Masters use to improve team happiness and performance.',
                'The patterns and practices of high-performing Scrum teams.',
                'How the Scrum Master role scales in an organization using Scrum@Scale.',
            ]
        },
        {
            type: 'title',
            text: 'Who should take a Scrum Master course?'
        },
        {
            type: 'items',
            text: [
                'Professionals in any industry wanting to become Scrum Masters or servant-leaders to their tea',
                'Job seekers wishing to work for an agile organization.',
                'Professionals interested in being “agile.”',
                'Traditional Project Managers looking to transform their careers.',
                'SAFe Practitioners wanting to learn Scrum and explore Scrum@Scale.',
                'Product Managers, PMPs, PMI-ACP Team Leaders or professionals wishing to begin their journey toward becoming a Scrum Product Owner or a Scrum@Scale Practitioner.',
                'Managers and leaders wanting to understand the patterns of high-performing teams and how true Scrum delivers twice the value at half the cost.',
            ]
        },
        {
            type: 'title',
            text: 'About the Scrum Master Exam & Credential'
        },
        {
            type: 'para',
            text: [
                "Students who complete a Scrum Master training comprised of at least 14 hours of live instruction time covering all Learning Objectives with a Scrum Trainer (LST) are eligible to take the Scrum master exam. Students who pass the exam will earn their Scrum Master credential.",

                "The Scrum Master credential formally recognizes your knowledge of lean principles, Scrum Master techniques, patterns of high-performing teams, and how the Scrum Master role scales in an organization.",

                "The Scrum Master credential is the only Scrum Master credential endorsed by Jeff Sutherland, co-creator of Scrum and inventor of Scrum@Scale. The Scrum Master will make you stand out to employers, stakeholders, and peers.",
            ]
        },
        {
            type: 'title',
            text: 'This training is for all levels of Scrum experience.'
        },
        {
            type: 'para',
            text: [<span>Check out our other <Link href={acsmlink}> Online Advanced Certified Scrum Master Certification </Link>, <Link href={csmlink}>Scrum Master Certification Online Course</Link> & <Link href={scrumquizlink}>Scrum Quiz</Link>.</span>]
        }

    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject} />
        </div>
    )
}
