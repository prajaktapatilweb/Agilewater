import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy';
import React from 'react';

export default function APMinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Agile Project and Delivery Management (ICP-APM)',
        },
        {
            type: 'para',
            text: [
                'The Agile Project and Delivery Management certification verifies that the bearer possesses the necessary knowledge and skills to deliver efficient Lean and Agile products using a variety of approaches such as projects and value streams. Designees will be able to identify dependencies and barriers, provide immediate feedback and learning, and contribute to incremental value creation.',
            ],
        },
        {
            type: 'title',
            text: 'Featured Learning Outcomes :',
        },
        {
            type: 'items',
            text: [
                'Agility in Delivery',
                'Manage the system while also empowering the team.',
                'Provide Benefits Continuously',
                'Monitoring and planning',
            ],
        },
        {
            type: 'title',
            text: 'Who benefits from this certification?',
        },
        {
            type: 'para',
            text: [
                "Effective delivery management skills and approaches can benefit people in a number of professions in today's businesses. If you are in any way responsible for ensuring the effective delivery of working things into the hands of real customers, this certification is for you. This programme will provide you the tools and approaches you need to obtain the best results for your organisation if you are in charge of managing competing demands across a portfolio of items or projects.",
            ],
        },

        {
            type: 'items',
            text: [
                'People who are transitioning into these professions, such as delivery leads / delivery managers',
                'Project or programme managers, or those transitioning into these positions',
                'Portfolio managers or those transitioning into these positions',
                'Business Architects Release Train Engineers',
                'Managers at all levels of the company, including enterprise architects',
            ],
        },
        {
            type: 'title',
            text: 'Certification:',
        },
        {
            type: 'para',
            text: [
                'Hands-on learning is included in every ICAgile-accredited course. To achieve this certification, you must actively engage in a live class.',
            ],
        },

        {
            type: 'items',
            text: [
                'You must participate in a live class to earn this certification.',
                "After successfully completing the programme and completing the post-class survey, you'll receive a certificate that you may share with employers and your professional network. Certificates are downloadable PDFs that may be posted and shared on LinkedIn.",
                "Once you've finished the course, you'll be given a certificate.",
                'From anywhere in the world, you can join a class.',
                'Beyond the confines of a single agile framework, broaden your horizons.',
                'To complete the knowledge-based level, a minimum of 14 hours are required.',
            ],
        },
        {
            type: 'title',
            text: 'You will also get:',
        },
        {
            type: 'items',
            text: [
                'ICAgile ICP-APM Certification',
                'Hard copy of comprehensive courseware',
                'Workshop will be facilitated by certified experts',
            ],
        },

        {
            type: 'title',
            text: 'MANDATORY) Course Pre-requisites:',
        },
        {
            type: 'para',
            text: [
                'All Candidates welcome to attend the course, however, the following Pre - requisites are highly recommended',
            ],
        },

        {
            type: 'items',
            text: [
                "5 + year's of experience in software development,testing, business analysis, product or project management.",
            ],
        },
    ];
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    );
}
