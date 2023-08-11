import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function PMPCertinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: <span><b>Project Management Workshop</b></span>
        },
        {
            type: 'title',
            text: 'Objectives'
        },
        {
            type: 'para',
            text: [
                'The objective of the workshop is to enable participants to get a basic understanding of project management methodology & processes. The workshop covers intermediate to advanced concepts of project management with a special focus on the project related critical tasks, activities and challenges faced by a project manager in day to day work life. This program also offers practical insights into the real world project management challenges, industry best tools, processes and best practices followed. The workshop will enable and empower individuals to work as a project manager / leader in projects.',
            ],
        },

    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
