import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function POinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Scrum Product Owner Certification Training Class Overview:',
        },
        {
            type: 'para',
            text: ['If you find your skills and ability best at providing business solutions with scaled projects, then the Scrum Product Owner is one such Training Course for you. SPO Certification focuses on nurturing the business side of Product by delivering skills that are must for ongoing and upcoming time. It makes sure you take the best Agile Path for the better attainment of Business Agility.']
        },
        {
            type: 'title',
            text: 'Benefits of Getting Certified with the SPO Certification:',
        },
        {

            type: 'items',
            text: [
                'Develop an approach that collaborates the team to stay ahead of the market competition.',
                'Outreach vast Career Opportunities across Various Sections of the Software & IT industry.',
                'Cultivate methods for the attainment of core Scrum knowledge.',
                'Diversify your Agile Techniques with continuous improvement.',
                'Authenticate incremental growth values for the stakeholders and end-users.',
                'Access to best industry techniques and methods for product owner roles.',
            ]
        },
        {
            type: 'title',
            text: 'Requirements:',
        },
        {

            type: 'items',
            text: [
                'Attend SPO Training Course by our expert and handson Product Owner Experts.',
                'After completion of the Course, clear the Certification Exam.',
                'Upon passing the Certification Exam, accept your SPO License Agreement and complete your Scrum Product Owner membership Profile.',
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
