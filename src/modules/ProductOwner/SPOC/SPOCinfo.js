import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function SPOCinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Scrum Product Owner Certified (SPOC®) Overview:',
        },
        {
            type: 'para',
            text: ['The Product Owner represents the interests of the stakeholder community to the Scrum Team. The Product Owner is responsible for ensuring clear communication of product or service functionality requirements to the Scrum Team, defining Acceptance Criteria, and ensuring those criteria are met. The Product Owner must always maintain a dual view. He or she must understand and support the needs and interests of all stakeholders, while also understanding the needs and workings of the Scrum Team. Applicants will be awarded the Scrum Product Owner Certified (SPOC®) certificate by SCRUMstudy™ upon successfully passing the certification exam.']
        },
        {
            type: 'title',
            text: 'Benefits of Getting Certified with the SPOC® Certification:',
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
            text: 'What is Included?',
        },
        {

            type: 'items',
            text: [
                'Both certification exam and online prep course',
                'Online course includes Videos of all concepts, Terms and Concepts, Interactive Case Study,',
                'Reference Material and more.',
                'Proctored Online Scrum Product Owner Certified(SPOC) Certification Exam(180 minutes, 140 Questions)',
            ]
        },
        {
            type: 'title',
            text: ' Exam Format',
        },
        {

            type: 'items',
            text: [

                'Multiple choice',
                '140 questions per exam',
                'No negative marks for wrong answers',
                '180 minutes duration',
                'Proctored online exam.',
                'Current pass rate: 93%',
            ]
        },

        {
            type: 'title',
            text: 'Audience Profile',
        },
        {
            type: 'para',
            text: ['This certification is for anyone who interfaces with stakeholders or works as a Product Owner in a Scrum Team.']
        },

        {
            type: 'title',
            text: 'Prerequisites',
        },
        {
            type: 'para',
            text: ['There is no formal prerequisite for this certification. However, SDC® or SMC® Certified professionals will be able to better understand the concepts required for this certification exam. It is also highly recommended to attend a 2-day SPOC® classroom training provided by a SCRUMstudy™ approved Authorized Training Partner (A.T.P.)']
        }
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
