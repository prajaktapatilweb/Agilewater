import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function Prince2info() {
    var DetailObject = [
        {
            type: 'title',
            text: 'PRINCE2®'
        },

        {
            type: 'para',
            text: [
                'Prince2® (Projects IN a Controlled Environment) is a Project Management methodology developed by Axelos, UK, one of the most acclaimed Project Management institutes in the world. Prince2 was specially developed to propound best practices in the field of Project Management. The PRINCE2® project management certification scheme has two main levels, Foundation and Practitioner.',
                'PRINCE2® Foundation & practitioner are the world-recognized credentials used in both the private and public sectors. It is a globally recognized, tailorable, methodology that teaches you the fundamental skills needed to be a successful project manager.'

            ],
        },
        {
            type: 'title',
            text: 'Prerequisites for PRINCE2® Certification'
        },
        {
            type: 'items',
            text: [

                'PRINCE2 Foundation Certification - There are no prerequisites.',
                'PRINCE2 Practitioner - To enroll for the Prince2 Practitioner Exam, the candidate must have any of the following certifications:',
                'Prince2 Foundation Certificate',
                'PMP',
                'CAMP',
                'IPMA Levels A, B, C & D.',
            ]
        },


        {
            type: 'title',
            text: 'PRINCE2® Foundation Exam'
        },
        {
            type: 'items',
            text: [
                'Closed Book Exam',
                '60 min exam duration',
                '50 MCQ’s',
                '55% Passing Percentage',
            ]
        },
        {
            type: 'title',
            text: 'PRINCE2 Practitioner Exam'
        },

        {
            type: 'items',
            text: [

                'Open Book Exam',
                '150 min exam duration',
                '68 MCQ’s',
                '55% Passing Percentage',
            ]
        },

        {
            type: 'title',
            text: 'Who can take PRINCE2 Certification'
        },
        {
            type: 'para',
            text: [

                'The globally recognized certification, Prince2 Foundation & Practitioner Certification course is ideal for :'
            ]
        },
        {
            type: 'items',
            text: [
                'Project / Product Managers',
                'Associate Project Managers / Assistant Project Managers',
                'Team Leads / Team Managers',
                'Project Board Members',
                'Software Developers',
                'Project Executives / Project Engineers',
                'Business Analysts',
                'Professionals',
                'Teams and organizations',
                'Any professional aspiring to be a Project Manager',
            ]
        },


        {
            type: 'title',
            text: 'Benefits Of Having PRINCE2 Certification Course'
        },
        {
            type: 'items',
            text: [
                'PRINCE2 Practitioner and Foundation is a world-recognized credential used in both the private and public sectors.',
                'PRINCE2 training increases your ability to execute projects in a business environment, validating your skills as a senior project manager.',
                'It is globally known for its practice-driven approach to Project Management.',
                'The average salary of a Prince2 Certified professional is £60K in the UK and $117K in the US.',
                'It can be tailored for all types of projects, including Agile.',
            ]
        }

    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
