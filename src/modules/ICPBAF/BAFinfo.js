import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function BAFinfo() {


    var DetailObject = [
        {
            type: 'title',
            text: 'Business Agility Foundations ICP-BAF',
        },
        {
            type: 'para',
            text: [
                'In today\'s firms, people at all levels and in virtually every job are expected to focus on customer happiness while also bringing innovation and continual improvement to their work. This is a difficult undertaking that necessitates either the development of new muscles or the limbering up of muscles that aren\'t used frequently.Participants will leave with new information, tools, and techniques to use right away as a result of this highly experiential set of learning outcomes.The ICP- BAF(ICAgile Certified Professional in Business Agility Foundations) is designed to help organizations and individuals transition to a more responsive, value - driven reality.',
            ],
        },
        {
            type: 'title',
            text: 'What Will You Learn?',
        },
        {
            type: 'items',
            text: [<span><b>Creating A Platform FOR BUSINESS AGILITY</b></span>]
        },
        {
            type: 'items',
            text: [

                'Business Agility: Drivers and Criticality',
                'Business Agility: Values, Principles and Dimensions',
                'Case for Change: Empowering Teams',
                'Case for Change: Customer Value and Continuous Learning',
            ]
        },
        {
            type: 'items',
            text: [<span><b>Compelling Vision, Focus, and Clarity of Purpose</b></span>]
        },

        {
            type: 'items',
            text: [
                'Compelling Vision and Clarity of Purpose',
                'Focusing on the Big Picture and Emerging Future as an Agile Business',
                'Understanding Customers, Stakeholders, Business and Emerging Markets',
            ]
        },
        {
            type: 'items',
            text: [<span><b>ENABLING BUSINESS AGILITY</b></span>]
        },
        {
            type: 'items',
            text: [
                'New Ways of Thinking',
                'Developing a Growth Mindset',
                'Blind Spots, Mental Models, Patterns and Sense Making',
                'Relationship between complexity and Business Agility',
                'Recognizing and Managing Dilemmas, Paradoxes and Polarities',
            ]
        },

        {
            type: 'items',
            text: [<span><b>New and Differentiating Behaviors</b></span>]
        },
        {
            type: 'items',
            text: [
                'Ask vs. Tell: High-Performance Questions',
                'Making Value Visible',
                'Experimenting and Hypothesis Testing',
                'Complex Dynamics of Change, Polarities, Systemic Problems and Disruptive Threats',

            ]
        },
        {
            type: 'items',
            text: [<span><b> IMPLEMENTING AND SUSTAINING BUSINESS AGILITY</b></span>]
        },
        {
            type: 'items',
            text: [
                'Frameworks, Tools, and Techniques',
                'Lean Systems Thinking',
                'Lean Startup and Canvases',
                'Design Thinking Approaches',
                'Flow-based Values and Systems',
                'Iterative Framework and Sampling of Practices',
            ]
        },
        {
            type: 'items',
            text: [<span><b>Business Agility as the New Normal</b></span>]
        },
        {
            type: 'items',
            text: [
                'Creating Space for Optimal Engagement and Value Creation',
                'Action Plans and Tools to Accelerate Business Agility',
                'Continually reinventing',
                'Measures of Success',
            ]
        },
        {
            type: 'title',
            text: 'Target Audience',
        },
        {
            type: 'para',
            text: [

                'Anyone interested in the paradigm shifts necessary to enable organizational agility in today\'s innovative business climate will find the Business Agility Foundations course compelling. Although this is a generalist certification and an entry point to several of ICAgile\'s tracks, it is not intended to be a direct substitution for the ICAgile Certified Professional credential. Those already holding the ICP are likely to find this course compelling, especially if they are on a journey towards business agility outside of a software development context.'
            ]
        },
        {
            type: 'title',
            text: 'Certification',
        },
        {
            type: 'para',
            text: [
                'The International Consortium for Agile (ICAgile) is a certification and accrediting organisation, not a training provider. We work with agile thought leaders from around the world to create learning program that help people become agile masters. ICAgile has certified the Business Agility Foundations course as meeting all of the Learning Objectives in the new Business Agility Roadmap.',

                'The cost of certification is included in the overall course cost. You will receive an email from ICAgile with your Certification once you have completed the course.',

                'This continuing education certification is a prerequisite for the ICAgile Expert- Enterprise Agile Coaching certification (ICE-EC).'
            ]
        },
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
