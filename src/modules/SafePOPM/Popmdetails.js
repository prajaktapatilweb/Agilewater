
import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function Popmdetails() {
    var DetailObject = [


        {
            type: 'title',
            text: 'SAFe POPM Certification Training Overview:',
        },
        {
            type: 'para',
            text: [
                'SAFe POPM Certification - Delivering value through effective Program Increment execution with Certified SAFe® Product Owner/Product Manager. Product Owner and Product Manager is someone who stands right on the need of Prioritising the Product Feature and refine the Product Backlog. The SAFe POPM Certification is one such Training Course which focuses on nurturing your business side of Product by delivering skills to create the Product Vision, refine the Product Backlog and make sure to take the best Agile Path for the better attainment of Business Agility.',
            ],
        },
        {
            type: 'title',
            text: 'Benefits of Getting Certified with the SAFe POPM Certification:',
        },
        {
            type: 'items',
            text: [
                'Optimise a collaborative approach with the team to stay ahead of the market competition.',
                'Explore wide Career Opportunities across Various Sections of the Software & IT industry',
                'Authenticate methods for the attainment of core Scrum and SAFe knowledge.',
                'Expand your Agile Techniques with continuous improvement.',
                'Engage incremental growth values for stakeholders and end-users.',
                'Learn best industry techniques and methods to do product owners/managers roles efficiently.',

            ],
        },
        {
            type: 'title',
            text: 'Requirements:',
        },
        {
            type: 'items',
            text: [
                'Attend SAFe Training Course by our expert and handson SAFe Trainer.',
                'Upon passing the Certification Exam, accept your SAFe License Agreement and complete your SAFe membership Profile.',
            ],
        },
        {
            type: 'title',
            text: ' How Agilewaters helps you:',
        },

        {
            type: 'items',
            link: { bool: true, link: 'https://scaledagile.com/training/safe-scrum-master/', elemNo: 0 },
            text: ['FREE Mock Test :', 'We help you with the FREE Mock Test with consulting and guidance by our expert.']
        },


    ]

    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject} />
        </div>
    )
}
