import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function PSPO2info() {
    var DetailObject = [
        {
            type: 'title',
            text: 'PROFESSIONAL SCRUM PRODUCT OWNER™ II Certification Course:',
        },
        {
            type: 'para',
            text: ['Professional Scrum Product OwnerTM - Advanced (PSPO-A) is a hands-on, activity-based course that aims to help seasoned Product Owners and Product Managers improve their capacity to create a vision, test their hypotheses, and ultimately provide more value to their stakeholders. The course goes beyond the topics covered in the Professional Scrum Product Owner (PSPO) class by broadening the participant\'s grasp of the role through the investigation of the several stances of a professional Product Owner.']
        },
        {
            type: 'title',
            text: 'Benefits of Getting Certified with the PSPO™ II Certification:',
        },
        {
            type: 'items',
            text: [
                'Stay ahead of the market competition.',
                'Explore wide Career Opportunities across Various Sections of the Software & IT industry.',
                'The PSPO™ II certification is a good validation of your dedication to professional development',
                'Get a best grip of all product management aspects to get value from your products.',
                'Learn best industry techniques and methods to do product owners roles effectively.',
            ]
        },
        {
            type: 'title',
            text: 'Requirements:'
        },
        {
            type: 'items',
            text: [
                'Attend PSPO II Training Course by our expert Trainer.',
                'After completion of the Course, clear the Certification Exam.',
                'Upon passing the Certification Exam you will get certificate.',
            ]
        },
        {
            type: 'title',
            text: 'How Agilewaters helps you:'
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
