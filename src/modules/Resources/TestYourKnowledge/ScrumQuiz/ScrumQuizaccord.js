import { Link } from '@mui/material'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'

export default function ScrumQuizaccord() {
    var DetailObject = [

        {
            heading: " Frequently asked questions",
            para: <span>
                <b>What is test your knowledge Scrum tool?</b><br></br>
                The test your knowledge tool gives an analysis of how prepared you are for the <Link href=''> CSM Certification Exam </Link>. The test your knowledge tool contains multiple-choice questions which are very similar and relatable to the same which are asked in the actual certification exam.
                <br></br>
                The test your knowledge tool takes you a step closer for clearing the CSM as well as LSM certification exam and makes sure that you are familiar with every section of Scrum and Agile.
                <br></br><br></br>
                <b>What is included in this Scrum test tool?</b><br></br>
                This Agile and Scrum test tool helps makes you know about how well you are prepared with principles and methods of Agile and Scrum. This test your knowledge tool is designed so as it takes you through an in-depth approach of Scrum and Agile working.
                <br></br>
                This includes taking you through an advanced route which includes making the candidate familiar with both simple concepts as well as an advanced concept. This overall assessment of Agile and Scrum test tool helps you get an idea of what level of approach you are having for the certification exam and what approach you do need.
                <br></br><br></br>
                <b>What will I learn from this Scrum Test tool?</b><br></br>
                This process gives you an insight into every section from where questions come, in <Link href=''>LSM and CSM Certification Exam </Link>. This process leads you to draw a chart of which topics to focus more on and which sections are good for in-depth knowledge point of view.
                <br></br>
                As this Scrum Test tool is mostly derived from the frequently asked question in the LSM and CSM certification exam, this helps you to know much and more about the exam pattern and the way to opt your answers for an impressive score in CSM certification exam.
                <br></br><br></br>
                <b>Who can take up this Scrum test your knowledge tool?</b><br></br>
                The Scrum Test is for all those Candidates who want to opt for the CSM certification exam and many other exams too which includes SAFe Certification and Agile Certification. This Scrum test is for all those aspiring candidates who want to shift their domain with various roles in the software industry. These roles include Consultant, Agile Trainee, Scrum Master, Developer, Business Analyst, Program Manager, Product Manager and many other roles.
                <br></br><br></br>
                <b>Will this test your knowledge tool help in clearing the actual CSM certification exam?</b><br></br>
                This Certification tool is of great use when it comes to clearing the actual LSM and CSM certification exam. Not only it helps you to assess your preparation but also gives you an overall analysis of how to make a smart approach to clear the LSM and CSM certification exam.
                <br></br>
                The underlying values of this tool take you closer takes you much closer to clear the LSM and CSM certification exam with ease.
                <br></br><br></br>
                <b>Are these the same questions to be asked in the CSM certification exam?</b><br></br>
                The questions to be asked in the LSM and CSM certification exam will not be exactly the same, but up to the maximum extent, the questions in the exam will be relevant to the one asked in scrum test your knowledge tool.
                <br></br><br></br>
                <b>Will this Practice test tool be updated frequently and how many times can I take it?</b><br></br>
                This Practice test tool will be updated frequently and candidates can take this test tool innumerable times according to need to have the configured and optimised approach. This update on the test tool will be based on all the latest information and test tool which will help the candidates be focused with every essential need.
                <br></br><br></br>
                <b>What are the requirements to take this Scrum test tool?</b><br></br>
                There are no specific requirements to take this Scrum test tool. Candidates opting for the LSM and CSM certification exam can take this and can evaluate their preparation scenario.
                <br></br><br></br>
                <b>I didn't do well in this Scrum test tool. What should I do now?</b><br></br>
                If you didn't do well in this Scrum test tool, indications are you need to get trained at first with all the principles and working methods of Scrum Framework. This training needs to be under an experienced hand who will guide you with the actual values and methods of the Scrum. Our expert trainer <Link href=''>Vijay Wade at AgileWaters </Link> is one such best-experienced hand who provide training with excellent results and quality performance.
                <br></br><br></br>
                And while having the right guidance for in-depth knowledge of Scrum Master, you should take this test frequently so as to assess your level of preparation.
            </span>
        }
    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
