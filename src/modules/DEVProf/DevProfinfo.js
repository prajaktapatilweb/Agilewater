import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function DevProfinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: ' SUMMARY',
        },
        {
            type: 'para',
            text: [
                'This EXIN DevOps Professional certification has been designed to give IT professionals background knowledge and understanding of essential DevOps practices. Created as a stepping-stone to the EXIN DevOps Master certification, this certification looks at the Three Ways, the good habits of change control and maintaining security compliance.',
            ],
        },



        {
            type: 'title',
            text: 'The topics covered are :',
        },
        {
            type: 'para',
            text: [
                'DevOps Adoption, The First Way: Flow, The Second Way: Feedback and The Third Way: Continual Learning and Experimentation, Information Security and Change Management.',
            ],
        },


        {
            type: 'title',
            text: 'TARGET GROUP',
        },
        {
            type: 'para',
            text: [
                'DevOps Professional is ideal for professionals who are working in a DevOps environment. This includes DevOps engineers, Agile scrum practitioners, Lean IT professionals, software or website developers and project managers.',
            ],
        },


        {
            type: 'title',
            text: 'Certification Exam :',
        },
        {
            type: 'items',
            text: [
                'Duration :1 hour and 30 minutes.',
                'Number of questions : 40 (Multiple Choice).',
                'Pass mark: 65%.',
                'Open book: No.',
                'Electronic equipment allowed: No.',
                'Level: Advanced.',
                'Available Languages: English.',
            ]
        }
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
