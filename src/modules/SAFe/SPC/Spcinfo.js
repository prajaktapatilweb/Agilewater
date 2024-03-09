import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import { freecourselink, safequizlink } from 'modules/commanmodules/Pagelinks'
import React from 'react'

export default function Spcinfo() {
    var DetailObject = [


        {
            type: 'title',
            text: ' SAFe Program Consultant Certification Training Overview:',
        },
        {
            type: 'para',
            text: [
                'Your journey to becoming a Certified SAFe® Practise Consultant (SPC) has begun if you have successfully completed the Implementing SAFe® course. Agile trainers and coaches are in greater demand, particularly from Global 2000 companies. In light of this, an SPC certification is more valuable than ever.'
            ]
        },
        {
            type: 'title',
            text: 'What are the benefits of SAFe Certification?',
        },
        {
            type: 'para',
            text: [
                'Lead SAFe classes after validation',
                'Connect with other SPCs in a private community of practise to exchange knowledge.',
                'Learn more about SAFe and earn professional development units (PDUs) by attending regular webinars.',
                'Gain access to the necessary toolkits and resources to become a successful Agile coach and SAFe transformation leader.',
            ]
        },

        {
            type: 'title',
            text: 'The Future of SAFe SPC Certification and Its Benefits:',
        },
        {
            type: 'items',
            text: [
                'Through the Network, Motivated Learning.',
                'The Impact of Brilliant Trainers.',
                'Training for SPC Certification.',
            ]
        },
        { type: 'title', text: 'How Agilewaters helps you :' },

        {
            type: 'items',
            link: {
                bool: true,
                link: safequizlink,
                elemNo: 0,
            },
            text: ['Free Mock Test'],
        },
        {
            type: 'items',
            text: [, 'Free Consulting'],
        },
        {
            type: 'items',
            link: {
                bool: true,
                link: freecourselink,
                elemNo: 0,
            },
            text: ['Free Certified Courses'],
        },
        {
            type: 'items',
            text: [, 'Free Guidance'],
        },

    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
