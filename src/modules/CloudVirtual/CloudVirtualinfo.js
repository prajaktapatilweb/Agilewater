import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function CloudVirtualinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Cloud Virtualization Essentials'
        },

        {
            type: 'para',
            text: [
                'The CCC Cloud Virtualization Essentials certification enables professionals to comprehend the business perspectives and technical capabilities of virtualization technologies. This foundation-level course looks at the background, adoption, implementation and potential risks of virtualization within the context of Cloud Computing.'
            ],
        },
        {
            type: 'title',
            text: 'Who is this certification for?'
        },
        {
            type: 'para',
            text: [
                'Cloud Virtualization Essentials is designed to give candidates a fundamental understanding of the principles behind operating and governing virtualization. It is aimed at IT specialists, managers and solution consultants. Other professionals who would benefit include IT administrators or those involved with provisioning and maintenance.'
            ],
        },
        {
            type: 'title',
            text: 'Main subjects'
        },
        {
            type: 'items',
            text: [
                'Introduction to Virtualization',
                'Business Perspective',
                'Server Virtualization for the Data Center',
                'The Virtual Data Center: Storage, Networks and Applications',
                'Workplace Virtualization Technologies',
                'Adopting Virtualization',
                'Operating Virtualization',
                'Governing Virtualization',
            ]
        },
        {
            type: 'title',
            text: 'SUMMARY'
        },
        {
            type: 'para',
            text: [
                'The CCC Cloud Virtualization Essentials certification enables professionals to comprehend the business perspectives and technical capabilities of virtualization technologies. This foundation-level course looks at the background, adoption, implementation and potential risks of virtualization within the context of Cloud Computing.'
            ],
        },

        {
            type: 'title',
            text: 'TARGET GROUP'
        },
        {
            type: 'para',
            text: [
                'Cloud Virtualization Essentials is designed to give candidates a fundamental understanding of the principles behind operating and governing virtualization. It is aimed at IT specialists, managers and solution consultants. Other professionals who would benefit include IT administrators or those involved with provisioning and maintenance.'
            ],
        },

    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
