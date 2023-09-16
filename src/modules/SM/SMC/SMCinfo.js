import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function SMCinfo() {


    var DetailObject = [


        {
            type: 'title',
            text: 'Scrum Master Certified (SMC) Overview',
        },
        {
            type: 'para',
            text: [
                'The scrum master professionals are facilitators who ensure that the agile values, principles and practices are followed by the team. AgileWaters brings to you widely popular Scrum Master Certified (SMC) certification and courses at a very affordable rate. This course is self-paced video recordings and material. Student has to study as per own convenience. The SMC course helps to understand the Scrum methodology from a Scrum Master’s point of view. The course focuses on providing students with an understanding of the various Scrum principles, Scrum aspects, processes, Scrum roles, artifacts, tools and techniques as defined by A Guide to the Scrum Body of Knowledge (SBOK Guide). Successful candidates will be awarded the Scrum Master Certified (SMC®) certification after passing the exam.',
            ],
        },
        {
            type: 'title',
            text: 'Course Objectives',
        },
        {
            type: 'items',
            text: [
                'After completion of the Scrum Master Certified (SMC) training Participants will:',
                'Become familiar with the Scrum methodology.',
                'Understand how Scrum can be used effectively in their company by delivering projects using Scrum.',
                'Be familiarized with the Principles, Aspects and Processes involved in a Scrum Project as defined by the SCRUMstudy SBOK.',
                'Candidates will develop an understanding of all the roles in Scrum.',
                'Get experience by taking out a Scrum project through simulated case studies.',
                'Be prepared to pass the Scrum Master Certified (SMC) exam.',
            ]
        },
        {
            type: 'title',
            text: 'What is Included?',
        },
        {
            type: 'items',
            text: [
                'Both certification exam and online prep course',
                'Online course includes Videos of all concepts, Terms and Concepts, Interactive Case Study,',
                'Reference Material and more.',
                'Proctored Online Scrum Master Certified (SMC) Certification Exam (120 minutes, 100 Questions)',
                '16 PMI PDUs',
            ]
        },

        {
            type: 'title',
            text: 'Prerequisites',
        },
        {
            type: 'para',
            text: [
                'There is no formal prerequisite for this certification. However, it is preferable to complete the Scrum Developer Certified (SDCM) certification before applying for the Scrum Master certification.',
            ],
        },


        {
            type: 'title',
            text: 'Exam Format',
        },
        {
            type: 'items',
            text: [
                'Multiple Choice',
                '100 questions per exam (The passing score would be something around 50-70%,it is not confirmed though)',
                'One mark awarded for every right answer',
                'No negative marks for wrong answers ',
                '120 minutes duration',
                'Proctored online exam (Needs to be scheduled at least 48 hour in advance)',
            ]
        }
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
