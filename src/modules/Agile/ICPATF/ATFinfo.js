import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function ATFinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Agile Certification: ICP-ATF Certification Overview',
        },
        {
            type: 'para',
            text: [
                'If you have vast experience on the fundamentals of Agile Methods and expertise in its techniques with a promising work history as an Agile Practitioner, then ICP-ATF is the next certification you should go for. ICP-ATF Certification can be your key to embrace further responsibilities as an Agile Facilitator for more engaging growth and vast career opportunities.',
            ],
        },

        {
            type: 'title',
            text: 'Benefits of Getting Certified with the ICP-ATF Certification:',
        },
        {
            type: 'items',
            text: [

                'Learn best industry techniques and methods to do the role of Agile Facilitator effectively.',
                'Explore best Agile Techniques to mentor the teams on Agile Path.',
                'Enhance your Agile Techniques with continuous improvement.',
                'Get LifeTime Valid Agile Facilitation Certification.',
            ]
        },
        {
            type: 'title',
            text: 'Requirements:',
        },
        {
            type: 'items',
            text: [
                'Attend ICP-ATF Training Course by our expert.',
                'After completion of the Course, clear the Certification Exam.',
                'Accept your ICP-ATF License Agreement and complete your Agile Coach membership Profile.',
            ]
        }
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
