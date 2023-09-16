import { Link } from '@mui/material'
import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import { freecourselink, scrumquizlink } from 'modules/commanmodules/Pagelinks'
import React from 'react'

export default function CertScruminfo() {

    var DetailObject = [


        {
            type: 'title',
            text: 'CSM Certification Training Overview',
        },
        {
            type: 'para',
            text: ['If you are familiar with the Scrum Framework, and have vast experience on the fundamentals of Scrum Framework with a promising work history as Scrum Team Member, then CSM Certification is the next certification you should go for. The role and responsibilities with CSM Certification or Scrum Master Certification opens a wide range of opportunities in Multiple MNCs who function on the Framework of Scrum to meet their requirements within time with accurate implementation of Scrum Framework governed by Scrum Master. The CSM Certified Professionals are highly paid for the work ethics and values they deliver to the organization as a Scrum Master.'],
        },
        {
            type: 'title',
            text: 'Resources:',
        },
        {
            type: 'para',
            text: [<span><Link href="https://agilewaters.com/wp-content/uploads/2020/09/learning.pdf" target='blank' sx={{ textDecoration: "none", fontWeight: 'bold' }}> LEARNING OBJECTIVES </Link> &nbsp; &nbsp; <Link href="https://agilewaters.com/wp-content/uploads/2020/09/content-out.pdf" target='blank' sx={{ textDecoration: "none", fontWeight: 'bold' }}>TEST CONTENT</Link> &nbsp; &nbsp; <Link href="https://agilewaters.com/wp-content/uploads/2020/09/E_Scrum-Foundations_LO_2020_rev.pdf" target='blank' sx={{ textDecoration: "none", fontWeight: 'bold' }}>SCRUM FOUNDATIONS LEARNING</Link></span>],
        },

        {
            type: 'title',
            text: 'Benefits of Getting Certified with the CSM Certification:',
        },
        {
            type: 'items',
            text: [
                'Become a top notch team coach & good facilitator.',
                'Implement a collaborative approach with the team to stay ahead of the market competition.',
                'Explore wide Career Opportunities across Various Sections of the Software & IT industry.',
                'Expand methods for the attainment of core and advance Scrum knowledge.',
                'Authenticate your Agile Techniques with continuous improvement.',
                'Learn best industry techniques and methods to do Scrum Master roles effectively.',
            ]
        },


        {
            type: 'title',
            text: 'Requirements:',
        },
        {
            type: 'items',
            text: [

                'Attend CSM Training Course by our expert and handson Experienced Trainer.',
                'After completion of the Course, clear the Certification Exam..',
                'Upon passing the Certification Exam, accept your CSM License Agreement and complete your Advanced Scrum Master membership Profile.',
            ]
        },
        {
            type: 'title',
            text: 'How Agilewaters helps you for Free:',
        },
        {
            type: 'items',
            link: { bool: true, link: scrumquizlink, elemNo: 0 },
            text: ['FREE Scrum Master certification mock tests']
        },
        {
            type: 'items',
            link: { bool: true, link: freecourselink, elemNo: 0 },
            text: ['Free Certified Courses']
        },
        {
            type: 'items',
            text: [
                'Consulting & Guidance',
                'Support for post-work implementation',
                'Real-life case studies to know the in-depth and thorough approach of Scrum Framework',
                'Many free scrum master certification mock papers',

            ]
        }
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject} />
        </div>
    )
}
