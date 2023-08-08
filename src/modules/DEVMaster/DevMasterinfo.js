import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function DevMasterinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: ' SUMMARY',
        },
        {
            type: 'para',
            text: [
                'EXIN DevOps Master Certification Training Course is an advanced - level course that teaches candidates a combination of principles, knowledge and practical skills.This enables them to introduce and promote DevOps in their organization in order to better manage application and service lifecycles whilst facilitating collaborative teamwork.',
            ],
        },
        {
            type: 'title',
            text: ' The certification covers:',
        },
        {
            type: 'para',
            text: [
                '1. DevOps adoption.  2. Planning, requirements, and design.  3. Development and deployment.  4. Operation and Scaling.  5. End - of - life.',
            ],
        },
        {
            type: 'title',
            text: 'TARGET GROUP',
        },
        {
            type: 'para',
            text: [
                'DevOps is primarily associated with software development but its principles are increasingly applied to other projects and processes.This makes the DevOps Master certification interesting to IT professionals who wish to extend their knowledge to cover the latest developments in IT management.Application developers, product owners, Agile Scrum masters, project managers, test managers and IT service managers would all benefit from this exam.',
            ],
        },

    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
