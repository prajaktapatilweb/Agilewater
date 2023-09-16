import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function BlockEsseninfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Blockchain Essentials'
        },

        {
            type: 'para',
            text: [
                'The EXIN Blockchain Essentials certification has been designed to create a basic understanding of blockchain and the business value of a cryptographic and smart contract solution. The certification covers the basic concepts of blockchain, the potential fields of application, the potential value for the organization and the technology driving the blockchain.'
            ],
        },
        {
            type: 'title',
            text: 'You will be able to'
        },

        {
            type: 'items',
            text: [

                'Explain how a blockchain works',
                'Explain the purpose ledgers have in a blockchain',
                'Identify blockchain vulnerabilities',
                'Explain the role of the public witness in a blockchain',
                'Explain the role of decentralized autonomous organizations (DOA) and sophisticated smart contracts',
                'Describe possible applications for a blockchain with regard to identity.',
                'Identify the possibilities of combining a blockchain with internet of things (IoT) or artificial intelligence (AI)',
                'Describe the role a blockchain can play in the supply chain',
                'Explain what digital fiat currency and disruption in banking and currency are',
                'Explain the use of blockchain technology for the protection of intellectual property right (IP) and providence',
            ]
        },

        {
            type: 'title',
            text: 'Who is this certification for?'
        },

        {
            type: 'para',
            text: [
                'This certification is tailored to professionals involved in business operations in any domain, who are interested in blockchain as a cryptographic and smart contract solution.'
            ],
        },
        {
            type: 'title',
            text: 'Main subjects'
        },
        {
            type: 'items',
            text: [
                'Blockchain Basics',
                'Blockchain Challenges',
                'Applications of Blockchain',
                'Blockchain Innovations',
            ]
        },
        {
            type: 'title',
            text: 'Required reading'
        },
        {
            type: 'para',
            text: ['Introduction to Blockchain Technology – The many faces of blockchain technology in the 21st century'
            ]
        },
        {
            type: 'title',
            text: 'SUMMARY'
        },
        {
            type: 'para',
            text: ['The EXIN Blockchain Essentials certification has been designed to create a basic understanding of blockchain and the business value of a cryptographic and smart contract solution. The certification covers the basic concepts of blockchain, the potential fields of application, the potential value for the organization and the technology driving the blockchain.'
            ]
        },
        {
            type: 'title',
            text: 'TARGET GROUP'
        },
        {
            type: 'para',
            text: ['This certification is tailored to professionals involved in business operations in any domain, who are interested in blockchain as a cryptographic and smart contract solution.'
            ]
        },

    ]

    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
