import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function CSPSMinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Certified Scrum Professional ScrumMaster® Course Overview',
        },
        {
            type: 'para',
            text: [
                ' Certified Scrum Professionals challenge their teams to improve the way Scrum and Agile principles are applied. They have demonstrated experience, documented training, and proven knowledge in Scrum.',
                'Are you ready to take your knowledge and skillset in your role as Scrum Master to the next level? If so, it’s time to elevate your career further by earning the Certified Scrum Professional®-ScrumMaster (CSP®-SM) certification.'
            ],
        },
        {
            type: 'title',
            text: 'Learn to find practical solutions and improve your implementation of Scrum in the workplace.',
        },
        {
            type: 'items',
            text: [
                'Attend exclusive CSP® events with other leaders in Scrum and Agile',
                'Attract more recruiters and command a higher rate of pay',
                'Establish a gateway and milestone toward becoming CST®, CEC, or CTC',
                'Start using Scrum effectively.'
            ]
        },
        {
            type: 'title',
            text: 'What You Learn',
        },

        {
            type: 'para',
            text: ['In this program you will focus deeply on the following learning objectives and will be able to demonstrate advanced knowledge of:']
        },
        {
            type: 'items',
            text: [
                'Lean, Agile, and Scrum',
                'Scrum Master Core Competencies',
                'Service to the Development Team',
                'Service to the Product Owner',
                'Service to the Organization',
                'Scrum Mastery',
            ]
        },
        {
            type: 'title',
            text: 'Path to Certified Scrum Professional (CSP-SM) for ScrumMaster',
        },
        {
            type: 'para',
            text: [
                <span>
                    <b>Step 1: Become a Certified ScrumMaster (CSM) :</b> <br></br>Most are aware of this step since CSM is already a popular certification. Becoming a CSM is the first step to become CSP-SM. This is a 2-day workshop followed by taking an online test. The CSM exam is very easy and pretty much everyone will pass. However, Scrum Alliance expects that the students acquires the essential knowledge in the workshop. The participant gains all the knowledge in the class conducted by Certified Scrum Trainer (CST) who are authorised by Scrum Alliance.<br></br>

                    <b>Benefits :</b><br></br>
                    After one attending this workshop, they would have very good understanding on Scrum Framework and how and why it works. Besides basic tenets of Scrum Framework, few trainers cover topics like User Stories, Estimations, Release planning.<br></br>

                    <b>Step 2: Become an Advanced CSM (A-CSM) :</b><br></br>
                    If you are already a CSM and have 12 months of work experience as ScrumMaster in last 5 years, this is your next step in becoming CSP-SM. The expectation for this course is that one has basic understanding of Scrum and also has seen practical issues implementing it. Advanced CSM course is conducted by Scrum Alliance approved “Path to CSP Educator”. While this course could be taught virtual also, our students felt that class room learning is more effective.<br></br>

                    <b>Benefits:</b><br></br>
                    'This workshop gives in depth knowledge of Scrum Framework, how it relates to Agile Manifesto and Lean concepts. You will learn basics on how to coach Product Owner and Development Team members and how to facilitate Scrum team. The learning Objectives of A-CSM requires the educator to have in-depth knowledge of Scrum as well as good facilitation and coaching skills. To get the most value for this workshop, look for a trainer with rich experience.<br></br>

                    <b>Step 3: Become a Certified Scrum Professional (CSP-SM) :</b><br></br>
                    This is the last step in the process to become a CSP-SM. One should have an active A-CSM certification and 24 months of experience as ScrumMaster in last 5 years (cumulatively) and attend a CSP-SM workshop conducted by Scrum Alliance approved “Path to CSP Educator”.<br></br>

                    <b>Benefits:</b><br></br>
                    The new path to CSP-SM is exciting since this path gives focused learning. I can see a big difference between people who became CSP in the old path versus in the new path as far as the skillset is concerned. This course has learning objectives to cover Lean concepts, Systems thinking, Emotional Intelligence, Coaching, Facilitation, Scaling Scrum to large organisations and much deeper understanding about Scrum Framework itself.<br></br>
                </span>
            ]
        },
        {
            type: 'title',
            text: 'What Will You Get.',
        },
        {
            type: 'para',
            text: ['Upon successful completion of the 2-day course and all educator-designed components, you will receive a CSP-SM certification.']
        },
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
