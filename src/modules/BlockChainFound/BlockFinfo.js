import { Details } from '@mui/icons-material'
import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function BlockFinfo() {

    var DetailObject = [
        {
            type: 'title',
            text: 'Blockchain Foundation'
        },

        {
            type: 'para',
            text: [
                'The EXIN Blockchain Foundation certification validates a professional’s knowledge about blockchain as a ledger with potential as a worldwide decentralized record for the registration, inventory, and transfer of assets. The certification covers the basic concepts of blockchain, the potential fields of application, the potential value for the organization and the technology driving the blockchain.'
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
                'Identify the role of a node in a network',
                'Differentiate between public, private and hybrid blockchains',
                'Explain how cryptography, private and public keys, and hashes are used in a blockchain',
                'Identify advantages and disadvantages of different consensus algorithms',
                'Describe possible applications for a blockchain with regard to identity.',
                'Describe the role a blockchain can play in the supply chain.',
                'Differentiate between blockchain networks',
                'Identify the possibilities of combining a blockchain with internet of things (IoT) or artificial intelligence (AI)',
                'Explain the use of blockchain technology for the protection of intellectual property rights (IP) and providence.',
            ]
        },
        {
            type: 'title',
            text: 'Who is this certification for?'
        },
        {
            type: 'para',
            text: ['This certification is tailored to professionals in both business and IT who have, or aim to have, a professional role in blockchain as a cryptographic and smart contract solution.']
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
            text: ['Introduction to Blockchain Technology – The many faces of blockchain technology in the 21st century']
        },
        {
            type: 'title',
            text: 'SUMMARY'
        },
        {
            type: 'para',
            text: ['The EXIN Blockchain Essentials certification has been designed to create a basic understanding of blockchain and the business value of a cryptographic and smart contract solution. The certification covers the basic concepts of blockchain, the potential fields of application, the potential value for the organization and the technology driving the blockchain.']
        },
        {
            type: 'title',
            text: 'TARGET GROUP'
        },
        {
            type: 'para',
            text: ['This certification is tailored to professionals involved in business operations in any domain, who are interested in blockchain as a cryptographic and smart contract solution.']
        },
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
