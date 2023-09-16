import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function PSPOinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'PROFESSIONAL SCRUM PRODUCT OWNER™ I Certification Course:',
        },
        {
            type: 'para',
            text: ['With PSPO I training you equip yourself to maximize the value of systems and products. And definitely grow your product owner skills. The PROFESSIONAL SCRUM PRODUCT OWNER™-I assessment is grounded in subject areas of Professional Scrum Product Owner. The assessment is to ensure thst you fully understand the Product Owner role. Become the best Product Owner who takes true ownership of the product. Once PSPO™ course is over, take an exam successfuly and get Professional Scrum Product Owner™ Level I certification.']
        },
        {
            type: 'title',
            text: 'Benefits of Getting Certified with the PSPO™ I Certification:',
        },
        {
            type: 'items',
            text: [
                'Stay ahead of the market competition.',
                'Explore wide Career Opportunities across Various Sections of the Software & IT industry.',
                'The PSPO™ I certification is a good validation of your dedication to professional development',
                'Get a best grip of all product management aspects to get value from your products.',
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
                'Attend PSPO I Training Course by our expert Trainer.',
                'After completion of the Course, clear the Certification Exam.',
                'Upon passing the Certification Exam you will get certificate.',
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
