import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function Packinfo() {
    var DetailObject = [


        {
            type: 'title',
            text: 'Agile Coach - Shu - Ha- Ri Package overview',
        },
        {
            type: 'para',
            text: [
                'Agile Coach - Shu - Ha- Ri is a response to competitive pressure, to adapt fast to changes in market demands and seize opportunities while reducing costs. An Enterprise Agile Coach is a Catalyst to enable organizations to achieve business agility. A well defined roadmap is available to strengthen skills and competencies towards Enterprise Coaching. To discover this further please join our \'Agile Coach - Shu - Ha- Ri package\'!',
            ],
        },
        {
            type: 'title',
            text: 'Shu - Ha- Ri Package Training helps to',
        },
        {
            type: 'items',
            text: [
                'Master the basics of facilitation and its key tools and methods',
                'Identify the potential pitfalls of the workflow, and learn how to avoid them',
                'Learn to plan and conduct team activities',
                'Learn how to create exciting and effective team activities',
                'Teach each team member to contribute to the effectiveness of shared work',
            ]
        },
        {
            type: 'title',
            text: 'Who Should Attend?',
        },
        {
            type: 'items',
            text: [
                'Scrum Masters',
                'Agile Team and Program level coaches',
                'Enterprise Agile Coaches',
                'Organization Development consultants',
                'Leadership team',
                'Senior Managers',
                'Anyone who is driving change initiatives to take organisation towards agility',
                'Anyone aspiring for any of roles mentioned above',
            ]
        },
        {
            type: 'title',
            text: 'What you will learn & Get',
        },
        {
            type: 'items',
            text: [
                'Gain proficiency in Enterprise Agile Coaching, and skilfully apply professional coaching, mentoring, and facilitating',
                'Apply business agility thinking and models to solve business problems',
                'Support leadership team via executive coaching',
                'Develop a customized approach that engages the whole system and instils Agile values and mind-set throughout',
                'Enable business process improvement with Agile approaches and supporting tools',
                'Recognise and address organisational impediments effectively across strategic, structural, cultural and educational dimensions',
                'ICAgile ICP-CAT & ICP-ENT & ICP-ACC Certificates with lifetime validity',
                'The workshop will be facilitated by certified seasoned experts. Post workshop support and mentoring',
            ]
        },

        {
            type: 'title',
            text: '(RECOMMENDED) Course Pre-requisites',
        },
        {
            type: 'para',
            text: ['All Candidates welcome to attend the course, however, the following Pre - requisites are highly recommended']
        },
        {
            type: 'items',
            text: [
                '5 + year\'s of experience in software development,testing, business analysis, product or project management.',
                '3 + year\'s of experience in Scrum Mastery',
                '3 + year\'s of experience in Agile Coaching',
            ]
        }
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
