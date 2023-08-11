import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function SafeArchinfo() {
    var DetailObject = [


        {
            type: 'title',
            text: 'SAFe for Architects (ARCH) Certification Training Overview:',
        },
        {
            type: 'para',
            text: ['Architects are an important part of the SAFe® leadership team, which also comprises product managers and the Release Train Engineer. These individuals collaborate to execute programmes and guide Agile Release Trains (ARTs) in order to ensure continuous value flow. You\'ll acquire the context you need to match architecture with business value in the SAFe® for Architects course. You\'ll learn how architectural solutions are delivered collaboratively by system, solution, and enterprise architects.You\'ll also learn the advice and tools you need to work effectively with distributed teams in remote locations.',]
        },
        {
            type: 'title',
            text: 'Benefits of Getting Certified with the SAFe ARCH Certification:',
        },
        {
            type: 'items',
            text: [

                'Attendees can improve collaboration and alignment in a SAFe® Lean-Agile enterprise when they become a SAFe 6 Architect.',
                'The SAFe® for Architects course prepares System, Solution, and Enterprise Architects to engage across the organization as effective leaders and change agents who collaboratively deliver architectural solutions.',
            ]
        },
        {
            type: 'title',
            text: ' Requirements:',
        },
        {
            type: 'items',
            text: [
                'Attend SAFe Training Course by our expert and handson SAFe Trainer.',
                'Upon passing the Certification Exam, accept your SAFe License Agreement and complete your SAFe membership Profile.',
            ]
        },
        {
            type: 'title',
            text: ' How Agilewaters helps you:',
        },
        {
            type: 'items',
            link: { bool: true, link: 'https://scaledagile.com/training/safe-scrum-master/', elemNo: 0 },
            text: ['FREE Mock Test :', 'We help you with the FREE Mock Test with consulting and guidance by our expert.']
        },
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject} />
        </div>
    )
}
