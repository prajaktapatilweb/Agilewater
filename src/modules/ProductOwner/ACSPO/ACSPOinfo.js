import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function ACSPOinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Advanced Certified Scrum Product Owner Overview',
        },
        {
            type: 'para',
            text: ['You’re a Certified Scrum Product Owner® (CSPO®) who is focused on maximizing business value and Product Backlog optimization to understand how to do the best possible job to satisfy key stakeholders.The next step in your Agile journey is to achieve your Advanced Certified Scrum Product Owner (A-CSPO℠) certification.']
        },
        {
            type: 'title',
            text: 'Through the A-CSPO, you’ll learn to:',
        },
        {

            type: 'items',
            text: [
                'Manage multiple business initiatives from competing stakeholders',
                'Clearly order and express Product Backlog items',
                'Define a clear product vision that ensures your product remains focused on the features your customers and end users will actually use',
                'Communicate effectively with various stakeholder groups to achieve alignment.',
                'Identify the crucial opportunities and avoid wasting time',
                'Define and validate business value',
                'Increase your credibility as a product expert and become recognized as a person who delivers real business results',
            ]
        },

        {
            type: 'title',
            text: 'Benefits:',
        },
        {

            type: 'items',
            text: [
                'Build on your foundational knowledge with enhanced implementation skills',
                'Distinguish yourself in the global marketplace',
                'Stand out in your industry as a member of the Scrum Alliance globally-recognized community',
                'Show advanced value to your employer (or potential employer) as a highly trained Agile professional',
            ]
        },
        {
            type: 'title',
            text: 'Requirements:'
        },
        {
            type: 'items',
            text: [
                'Hold a Certified Scrum Product Owner (CSPO) certification with the Scrum Alliance.',
                'Attend a certified A-CSPO educational offering to gain techniques that expand into managing stakeholders, product discovery, and advanced Product Backlog management.',
                'Successfully complete all educator-designed components of an approved educational offering. This may include pre- or post-course work as deemed necessary by your approved educator to complete the learning objectives',
                'You will be asked to accept the A-CSPO License Agreement and complete your Scrum Alliance membership profile.',
                'Validate at least 12 months of work experience specific to the role of Product Owner (within the past five years).',

            ]
        },
        {
            type: 'title',
            text: 'What Will You Get:'
        },
        {
            type: 'para',
            text: ['Maintain your A-CSPO by earning Scrum Education Units® (SEUs) and renewing your certification every two years.']
        }
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
