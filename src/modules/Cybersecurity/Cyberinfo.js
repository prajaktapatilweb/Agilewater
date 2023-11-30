import { Link } from '@mui/material'
import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import contactUs from 'pages/contact-us'
import React from 'react'

export default function Cyberinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: '  Cybersecurity Services',
        },
        {
            type: 'para',
            text: [
                <span><Link href='/contactUs'> For More Details Please Contact Us +91 9421809846/9405045060 / info@agilewaters.com  About</Link></span>
            ],
        },

        {
            type: 'para',
            text: [
                'We are a fastest emerging advisory company rendering comprehensive professional services which includes Cyber Security, IT Resource Augmentation, Web & Mobile Application Security, Audit and Risk Management Services. Our IT and Business Solutions are offered across BFSI Automobiles , Manufacturing, E-Commerce, Government/Semi-Government, Healthcare, Insurance, IT and Consulting etc.',
                'We believe in simplifying the complexity of the business using our deep knowledge and expertise in the corporate sector. We take pride in our ability to provide quality services whether they are an owner-managed business or a large multinational corporation. We are a multi-skilled, multi-disciplined firm, offering clients a wide range of industry-focused business solutions. Investing in our people means our clients get world-class expertise to solve their complex business problems.​'
            ],
        },
        {
            type: 'title',
            text: ' Cybersecurity Services Portfolio:',
        },
        {
            type: 'title',
            text: 'RISK ADVISORY AND ASSURANCE'
        },
        {
            type: 'title',
            text: 'ISO Consulting and Certifications',
        },
        {
            type: 'items',
            text: [
                'Provide end to end support for various ISO standards',
                'ISO 27001 (ISMS), ISO 20000 (ITSM), ISO 9000 (QMS), ISO 22301 (BCMS), ISO 21001 (EOMS)',
                'Assist in certification and maintenance of ISO standard.',]
        },
        {
            type: 'title',
            text: 'PCI-DSS'
        },
        {
            type: 'items',
            text: ['Scope validation, Gap analysis, Implementation, VA/PT, Audit and Compliance reporting']
        },
        {
            type: 'title',
            text: 'GDPR Compliance Testing Services'
        },
        {
            type: 'items',
            text: [
                'Identify necessary changes to IT',
                'Application assessment for GDPR',
                'GDPR readiness assessment',
            ]
        },
        {
            type: 'title',
            text: 'CYBER DEFENCE'
        },
        {
            type: 'title',
            text: 'Application Security Advisory Services',
        },
        {
            type: 'items',
            text: ['Protect and monitor applications through data security and privacy, API security, IoT Security, enterprise application security and secure application development. (VA/PT, AppSec, Code Review)']
        },
        {
            type: 'title',
            text: 'Cloud and Infra Security Services'
        },
        {
            type: 'items',
            text: ['Cloud Configuration Review, Product and Infra Secure Architecture review']
        },
        {
            type: 'title',
            text: 'Cyber Investigation, Forensics and Response Services'
        },
        {
            type: 'items',
            text: ['Detect, respond and recover from threats and breaches that could impact business operations.']
        },
        {
            type: 'title',
            text: 'MANAGED SECURITY SERVICES'
        },

        {
            type: 'title',
            text: 'Managed Cloud Security'
        },
        {
            type: 'items',
            text: [
                'Establish a Strong Cloud Security Foundation',
                'Oversee Cloud Security Risks',
                'Engineer Cloud Security (DevSecOps)',
            ]
        },

        {
            type: 'title',
            text: 'Managed Security and Threat Operations (SOC and SOAR)',
        },
        {
            type: 'items',
            text: [
                'Dedicated SOC, Virtual SOC, Outsourced SOC, Hybrid SOC',
                '24/7 Threat and Security Event Monitoring and Log Management',
                'and Automated Threat Response',
            ]
        },

        {
            type: 'title',
            text: 'Vulnerability Management',
        },
        {
            type: 'items',
            text: [
                'On-demand Vulnerability Scanning',
                'End-to-End Program Management',
                'Customized To Your Requirements',
            ]
        },
        {
            type: 'title',
            text: 'SPECIALIZE CONSULTING'
        },
        {
            type: 'title',
            text: 'Secure Product Lifecycle Management'
        },
        {
            type: 'items',
            text: [
                'Addressing security in SDLC from requirement gathering till delivery of the product',
                'Security Requirements Review, Secure Design Review, Threat Profiling, Secure Code Review, Penetration Testing',
            ]
        },
        {
            type: 'title',
            text: 'Cyber Threat Advisory'
        },
        {
            type: 'items',
            text: [
                'Provide a clear understanding of an organisation’s exposure to cyber attack, and the impact it would have on their business.',
                'Assist to make informed investment decisions and to put pragmatic, cost effective cyber defences in place.',
            ]
        },
        {
            type: 'title',
            text: 'Security Product Selection Decision-Making'
        },
        {
            type: 'items',
            text: [
                'Provide niche consulting and guidance to select tool required to address organizational security requirements.'
            ]
        },
        {
            type: 'title',
            text: 'VIRTUAL EXECUTIVES',
        },
        {
            type: 'title',
            text: 'vCISO offerings'
        },

        {
            type: 'items',
            text: [
                'Information Security Leadership and Guidance',
                'Steering Committee Leadership or Participation',
                'Security Compliance Management',
                'Board and Executive Leadership Presentations',
                'Security Program Design',

            ]
        },
        {
            type: 'title',
            text: 'vDPO offerings',
        },
        {
            type: 'items',
            text: [
                'Informing and advising the controller or processor and its employees of their obligations to comply with the GDPR and other data protection laws.',
                'Advising with regards to data protection impact assessments when required',
            ]
        }




    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
