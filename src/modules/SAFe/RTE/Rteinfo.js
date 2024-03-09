import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import { freecourselink, safequizlink } from 'modules/commanmodules/Pagelinks'
import React from 'react'

export default function Rteinfo() {
    var DetailObject = [


        {
            type: 'title',
            text: 'SAFe® Release Train Engineer Overview:',
        },
        {
            type: 'para',
            text: [
                'The Release Train Engineer (RTE), a role unique to SAFe®, is one of the three leaders, along with product managers and system architects. Leading Agile Release Trains (ARTs) to deliver value depends on this. To make choices based on the proper data, the RTE must organise the right meetings, conduct the right dialogues, and bring together the appropriate individuals.',
                'You will learn how to implement SAFe and continuously enhance PI Planning and other crucial SAFe events in the SAFe® RTE course. Learn new procedures and mindsets by coaching leaders, teams, and Scrum Masters. Additionally, you\'ll receive the instructions and resources required to collaborate well with distributed teams in remote settings.',

            ]
        },
        {
            type: 'title',
            text: 'Learning Objective:',
        },
        {
            type: 'items',
            text: [
                'How to lead ARTs and big solutions in a SAFe organization.',
                'How to implement Lean-Agile tools and knowledge to release value.',
                'How to promote constant progress.',
                'Becoming a servant leader and coach will help you create a high-performing ART.',
            ]
        },

        {
            type: 'title',
            text: 'What is included:',
        },
        {
            type: 'items',
            text: [
                'You can obtain access to the course workbook, SAFe Studio, and resources to get started in your SAFe position while preparing for the certification exam.',
                'SAFe® Virtual Classrooms for remote learning.',
                'SAFe® Studio subscription for a year after your first class attendance',
                'RTE Essentials Online Learning Series is available.',
                'PI Planning and System Demo are two examples of online collaboration tools for SAFe ART activities.',
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
