import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import { freecourselink, safequizlink } from 'modules/commanmodules/Pagelinks'
import React from 'react'

export default function ICPAPOinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Value-Driven Product Ownership:',
        },
        {
            type: 'para',
            text: ['Agile, value-driven, iterative, and adaptive thinking are required to respond to a corporate environment that is rapidly changing. Value-Driven Product Ownership is the art of promoting and improving the flow of value delivery utilising such an approach.',

                'This ICAgile-accredited course goes beyond the constraints of a single agile framework by laying a solid foundation in the mindset, abilities, and capabilities of product ownership. It is then reinforced with efficient agile practises created for customer-centric and collaborative value-driven software delivery.']
        },
        {
            type: 'title',
            text: 'Benefits of Getting Certified with the Value-Driven Product Ownership:',
        },
        {
            type: 'items',
            text: [
                'Recognise the role of the product owner as a value champion and their mentality.',
                'Recognise and use the qualities of outstanding product ownership.',
                'By telling the vision, context, and delivery method for value clearly and persuasively, you may achieve alignment.',
                'Hold the value context while promoting ongoing learning and mutual understanding.',
                'Utilise epics and user stories to capture vertical slices of the value of the client.',
            ]
        },
        {
            type: 'title',
            text: 'Learning Objective:',
        },
        {
            type: 'items',
            text: [
                'Essential Competencies and Conduct for Effective Agile Product Management',
                'Collaborating with Clients and Stakeholders',
                'Planning and Development of Products',
                'Evaluating Delivered Value',
            ]
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


    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
