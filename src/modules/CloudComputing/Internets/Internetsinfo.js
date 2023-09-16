import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function Internetsinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'CCC Internet of Things Foundation'
        },

        {
            type: 'para',
            text: [
                'This certification offers an understanding of the IoT technology and provides a detailed glimpse of the business potential it currently offers. The qualification has essential components which can enable and support the decision-making process for executives and users alike. This will allow them to analyze the future strategy and align themselves to match or get ahead of the competition.',


            ],
        },
        {
            type: 'title',
            text: 'Who is this certification for?'
        },
        {
            type: 'para',
            text: [
                'This certification has been created for all teams across management and business functions including C-Level Executives, Senior Management, General Managers, IT Project & Program Managers, Entrepreneurs, Investors, Business Analysts, Consultants and Professionals in related IT fields.'
            ]
        },
        {
            type: 'title',

            text: 'Main subjects'
        },
        {
            type: 'items',
            text: [

                'Concepts and Terminologies',
                'Business Orientation',
                'Basic Building Block of IoT - Architecture',
                'IoT Security and Top Governance Issues',
                'Enabling Technologies of IoT',
                'IoT Case Studies and Future Predictions',
            ]
        },

        {
            type: 'title',

            text: 'SUMMARY',
        },
        {
            type: 'para',
            text: ['This certification offers an understanding of the IoT technology and provides a detailed glimpse of the business potential it currently offers. The qualification has essential components which can enable and support the decision-making process for executives and users alike. This will allow them to analyze the future strategy and align themselves to match or get ahead of the competition.',
            ]
        },


        {
            type: 'title',

            text: 'TARGET GROUP'
        },
        {
            type: 'para',
            text: ['This certification has been created for all teams across management and business functions including C-Level Executives, Senior Management, General Managers, IT Project & Program Managers, Entrepreneurs, Investors, Business Analysts, Consultants and Professionals in related IT fields.',
            ]
        }
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
