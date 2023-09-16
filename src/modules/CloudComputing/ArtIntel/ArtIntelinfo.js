import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function ArtIntelinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Artificial Intelligence Essentials'
        },

        {
            type: 'para',
            text: [
                'Artificial Intelligence (AI) is a methodology for using a non-human system to learn from experience and imitate human intelligent behavior. The EXIN BCS Artificial Intelligence Essentials exam tests a candidate’s knowledge and understanding of the terminology and the general principles. This syllabus covers the potential benefits; types of Artificial Intelligence; the basic process of Machine Learning (ML); the challenges and risks associated with an AI project, and the future of AI and Humans in work.'
            ],
        },
        {
            type: 'title',
            text: 'You will be able to'
        },

        {
            type: 'items',
            text: [

                'Explain how a blockchain worksRecall the general definition of human and Artificial Intelligence (AI).',
                'Describe ‘learning from experience’ and how it relates to Machine Learning (ML) (Tom Mitchell’s explicit definition).',
                'Differentiate between public, private and hybrid blockchains',
                'Understand that ML is a significant contribution to the growth of Artificial Intelligence.',
                'Describe how AI is part of ‘Universal Design,’ and ‘The Fourth Industrial Revolution’.',
                'Describe the challenges of Artificial Intelligence, and give general examples of the limitations of AI compared to human systems, general ethical challenges AI raises.',
                'Demonstrate understanding of the risks of Artificial Intelligence, identify a typical funding source for AI projects and list opportunities for AI.',
                'Demonstrate an understanding that Artificial Intelligence (in particular, Machine Learning) will drive humans and machines to work together;',
                'List future directions of humans and machines working together.',
            ]
        },

        {
            type: 'para',
            text: ['The Artificial Intelligence Essentials certificate is focused on individuals with an interest in, (or need to implement) AI in an organization, especially those working in areas such as science, engineering, knowledge engineering, finance, or IT services.']
        },
        {
            type: 'title',
            text: 'Main subjects'
        },
        {
            type: 'items',
            text: [
                'Artificial and Human Intelligence: An Introduction and History',
                'Examples of AI: Benefits, Challenges and Risks',
                'An introduction to Machine Learning',
                'The Future of Artificial Intelligence – Human and Machine Together',
            ]
        },
        {
            type: 'title',
            text: 'Required reading'
        },
        {
            type: 'para',
            text: ['For the required reading, please see the list of books in the Exam Literature section of the preparation guide which can be found under the Downloads tab below.'
            ]
        },

        {
            type: 'title',
            text: 'SUMMARY'
        },
        {
            type: 'para',
            text: ['Artificial Intelligence (AI) is a methodology for using a non-human system to learn from experience and imitate human intelligent behavior. The EXIN BCS Artificial Intelligence Essentials exam tests a candidate’s knowledge and understanding of the terminology and the general principles. This syllabus covers the potential benefits; types of Artificial Intelligence; the basic process of Machine Learning (ML); the challenges and risks associated with an AI project, and the future of AI and Humans in work.'
            ]
        },

        {
            type: 'title',
            text: 'TARGET GROUP'
        },
        {
            type: 'para',
            text: ['The Artificial Intelligence Essentials certificate is focused on individuals with an interest in, (or need to implement) AI in an organization, especially those working in areas such as science, engineering, knowledge engineering, finance, or IT services.']
        },


    ]


    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
