import React from 'react';
import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy';
import { freecourselink, safequizlink } from 'modules/commanmodules/Pagelinks';

export default function Safeinfo() {

    var DetailObject = [

        {
            type: 'title',
            text: 'SAFe Agilist Certification Training Overview  : ',
        },
        {
            type: 'para',
            text: ['If you have the talent to implement Agile Methods effectively and you also have the ability within yourself to become Agile, then SAFe Agilist Certification is the one you should go for. SAFe Agilist Certification gives you authentication to Practice the Fundamentals of SAFe and its principles, to attain Business Agility for the organisation while making the workflow process Agile.',]
        },
        {
            type: 'title',
            text: 'Benefits of Getting Certified with the SAFe Agilist Certification :',
        },


        {
            type: 'para',
            text: ['Configure a collaborative approach to stay ahead of the market competition. Expand wide Career Opportunities across Various Sections of the Software & IT industry. Optimise methods for Product & Portfolio success. Explore Agile Techniques for continuous improvement. Engage incremental growth values for stakeholders and end-users. Learn best industry techniques and methods to do SAFe Agilist roles efficiently.']

        },
        {
            type: 'title',
            text: 'Requirements',
        },


        {
            type: 'para',
            text: ['Attend SAFe Training Course by our expert and hands-on SAFe Trainer. After completion of the Course, clear the Certification Exam. Upon passing the Certification Exam, accept your SAFe License Agreement and complete your SAFe membership Profile.']

        },


        { type: 'title', text: 'How Agilewaters helps you :' },

        {
            type: 'items',
            link: {
                bool: true,
                link: safequizlink,
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
                link: freecourselink,
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
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>

        </div>
    );
}
