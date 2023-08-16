import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function SixSigmainfo() {
    var DetailObject = [

        {
            type: 'title',
            text: 'Six Sigma Yellow Belt Overview',
        },
        {
            type: 'para',
            text: ['The Six Sigma Yellow Belt course is tailored to help anyone interested to know what Six Sigma is; learn key concepts in Six Sigma; and to get a basic understanding of how Six Sigma framework works in delivering successful projects. This course is included as a part of Free Lifetime Primary Membership. Once the course is completed, the student need to take an assessment to get the certificate. The purpose of the exam is to confirm you have basic understanding of Six Sigma.']
        },
        {
            type: 'title',
            text: 'Exam Format',
        },
        {
            type: 'items',
            text: [
                'Multiple Choice',
                '40 questions for the exam',
                'One mark awarded for every right answer',
                'No negative marks for wrong answers',
                '60 minutes duration',
                '28 questions need to be answered correctly to pass',
                'Online un-proctored exam',
            ]
        },
        {
            type: 'title',
            text: 'Audience Profile',
        },
        {
            type: 'para',
            text: ['Anyone interested in knowing more about Six Sigma can take up this course and exam for free.']
        },

        {
            type: 'title',
            text: 'Prerequisites',
        },
        {
            type: 'para',
            text: ['There is no formal prerequisite for this course.']
        },
        {
            type: 'title',
            text: 'How to Apply',
        },

        {
            type: 'para',
            text: ['1. Register and get 6sigmastudy Lifetime Primary Membership. Primary members get free access to this course.']
        },
        {
            type: 'para',
            text: ['2. Login and access the course online.']
        },
        {
            type: 'para',
            text: ['3. The online course includes:']
        },
        {
            type: 'items',
            text: [
                'Study notes on important concepts',
                'Conceptual videos',
                'Glossary of important terms',
            ]
        },

        {
            type: 'para',
            text: ['Take an un-proctored 40 question exam at the end of the course.']
        },

        {
            type: 'para',
            text: ['Once you successfully complete the exam, you will get a Six Sigma Yellow Belt online certificate from 6sigmastudy. Your name will be added to the 6sigmastudy certification Registry.']
        }
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
