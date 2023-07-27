import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy';
import React from 'react';

export default function Safeadvinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: ' SAFe Advanced Scrum Master Training Course(SASM) Overview',
        },
        {
            type: 'para',
            text: [
                'If you are someone, who has vast experience on the fundamentals of Scrum and SAFe Framework and has a promising work history as an expert Scrum Master, then ASM Certification is the next certification you should go for. SASM Certification can be your key to embrace further responsibilities with opportunities as a Scrum Master for more more engaging growth.',
            ],
        },
        {
            type: 'title',
            text: '  Benefits of Getting Certified with the SAFe Advanced Scrum Master Certification:',
        },
        {
            type: 'items',
            text: [

                'Develop a collaborative approach with the team to stay ahead of the market competition.',
                'Explore wide Career Opportunities across Various Sections of the Software & IT industry.',
                'Optimise methods for the attainment of core Scrum and SAFe knowledge.',
                'Enhance your Agile Techniques with continuous improvement.',
                'Expand incremental growth values for stakeholders and end-users.',
                'Learn best industry techniques and methods to do Advanced Scrum Master roles effectively.',
            ],
        },
        { type: 'title', text: 'Requirements :' },
        {
            type: 'items',
            text: [
                ,
                'Attend SAFe Training Course by our expert and hands-on SAFe Trainer.',
                'After completion of the Course, clear the Certification Exam.',
                'Upon passing the Certification Exam, accept your SAFe License Agreement and complete your SAFe membership Profile.',
            ],
        },
        { type: 'title', text: 'How Agilewaters helps you :' },

        {
            type: 'items',
            link: {
                bool: true,
                link: 'https://scaledagile.com/training/safe-scrum-master/',
                elemNo: 0,
            },
            text: ['Free Mock Test'],
        },
        {
            type: 'items',
            text: [, 'Free Consulting'],
        },
        {
            type: 'items',
            link: {
                bool: true,
                link: 'https://scaledagile.com/training/safe-scrum-master/',
                elemNo: 0,
            },
            text: ['Free Certified Courses'],
        },
        {
            type: 'items',
            text: [, 'Free Guidance'],
        },
    ];

    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject} />
        </div>
    );
}
