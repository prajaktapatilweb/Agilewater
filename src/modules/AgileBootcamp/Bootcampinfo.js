import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function Bootcampinfo() {
    var DetailObject = [


        {
            type: 'title',
            text: 'Enterprise Agile Coach Masterclass overview',
        },
        {
            type: 'para',
            text: [
                'Enterprise Agility is a response to competitive pressure, to adapt fast to changes in market demands and seize opportunities while reducing costs. An Enterprise Agile Coach is a Catalyst to enable organizations to achieve business agility. A well defined roadmap is available to strengthen skills and competencies towards Enterprise Coaching. Join our Enterprise Agile Coach Master Class to discover this further!',
            ],
        },
        {
            type: 'title',
            text: ' About the Masterclass',
        },
        {
            type: 'para',
            text: [
                'During this, a week-long / weekends(32 Hours ) highly interactive Enterprise Agile Coach Masterclass you would learn Art + Science of Enterprise Agile Coaching. At the end of this workshop you would be eligible to receive two advanced ICAgile Certificates, Agility in Enterprise (ICP-ENT) and Coaching Agile Transitions (ICP- CAT) By attending this advanced interactive Masterclass you will learn and practice the advanced skills needed to coach at the enterprise level within an organizational change context.',
            ],
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
                'ICAgile ICP-CAT & ICP-ENT Certificates with lifetime validity',
                'The workshop will be facilitated by two certified seasoned experts. Post workshop support and mentoring',
            ]
        },
        {
            type: 'title',
            text: '(MANDATORY) Course Pre-requisites',
        },
        {
            type: 'title',
            text: ['All Candidates welcome to attend the course, however, the following Pre-requisites are highly recommended'],
        },


        {
            type: 'items',
            text: [
                '5+ year\'s of experience in software development,testing, business analysis, product or project management.',
                '3+ year\'s of experience in Scrum Mastery',
                '3+ year\'s of experience in Agile Coaching',
            ]
        },

        {
            type: 'title',
            text: '(OPTIONAL) Course Pre-requisites',
        },
        {
            type: 'items',
            text: [
                'Certified ICP-ACC',
                'Certified ICP-ATF',
            ]
        }
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
