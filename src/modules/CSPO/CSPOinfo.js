import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function CSPOinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Certified Scrum Product Owner Certification Course:',
        },
        {
            type: 'para',
            text: [
                'If you find yourself sharp and precise at providing business solutions with scaled projects, then the Certified Scrum Product Owner is one such Training Course for you. CSPO Certification focuses on nurturing the business side of Product by delivering skills that are must for ongoing and upcoming time. It makes sure you take the best Agile Path for the better attainment of Business Agility.',
            ],
        },
        {
            type: 'title',
            text: 'Benefits of Getting Certified with the CSPO Certification:',
        },
        {
            type: 'items',
            text: [
                'Configure a collaborative approach with the team to stay ahead of the market competition.',
                'Explore wide Career Opportunities across Various Sections of the Software & IT industry.',
                'Embrace methods for the attainment of core Scrum knowledge.',
                'Enrich your Agile Techniques with continuous improvement.',
                'Create incremental growth values for stakeholders and end-users.',
                'Learn best industry techniques and methods to do product owners roles effectively.',
            ]
        },
        {
            type: 'title',
            text: 'Requirements:',
        },
        {
            type: 'items',
            text: [
                'Attend Scrum Product Owner Training Course by our expert and handson Trainer.',
                'After completion of the Course, clear the Certification Exam.',
                'Upon passing the Certification Exam, accept your Scrum Product Owner License Agreement and complete your CSPO membership Profile.',
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
