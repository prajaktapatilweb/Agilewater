import { Details } from '@mui/icons-material'
import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function CloudTechinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Cloud Technology Associate'
        },

        {
            type: 'para',
            text: [
                'CCC Cloud Technology Associate is a foundation-level certification that teaches candidates the background, concepts, and terminology of Cloud Computing. Professionals benefit from learning about technical challenges, mitigation measures and the steps needed for successful cloud adoption.'
            ],
        },

        {
            type: 'title',
            text: 'Who is this certification for?'
        },

        {
            type: 'para',
            text: [
                'The Cloud Technology Associate certification aims to build fundamental knowledge of Cloud Computing concepts. It is aimed at IT specialists, managers, and solution consultants. Other professionals who would benefit include IT administrators or those involved with provisioning and maintenance. It is recommended that you attain the Cloud Technology Associate Certification (or its equivalent) and/or that you are conversant with cloud concepts and vocabulary.'
            ],
        },
        {
            type: 'title',
            text: 'Main subjects'
        },
        {
            type: 'items',
            text: [
                'Introduction to Cloud Services Model',
                'Introduction to Virtualization: The Backbone Technology of Cloud Computing',
                'Overview of Cloud Technologies and Applications',
                'Cloud Security, Risk, Compliance, and Governance',
                'Preparing for Cloud Adoption',
                'Cloud Service Management',
            ]
        },
        {
            type: 'title',
            text: 'SUMMARY'
        },

        {
            type: 'para',
            text: [
                'Cloud Technology Associate is a foundation-level certification that teaches candidates the background, concepts, and terminology of Cloud Computing. Professionals benefit from learning about technical challenges, mitigation measures and the steps needed for successful cloud adoption.'
            ],
        },

        {
            type: 'title',
            text: 'TARGET GROUP'
        },

        {
            type: 'para',
            text: [
                'The Cloud Technology Associate certification aims to build fundamental knowledge of Cloud Computing concepts. It is aimed at IT specialists, managers, and solution consultants. Other professionals who would benefit include IT administrators or those involved with provisioning and maintenance. It is recommended that you attain the Cloud Technology Associate Certification (or its equivalent) and/or that you are conversant with cloud concepts and vocabulary.'
            ],
        },
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
