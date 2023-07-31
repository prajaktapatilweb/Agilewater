import { Link, List, ListItem } from '@mui/material';
import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React from 'react'


export default function AdvSMaccord() {
    var DetailObject = [
        {
            heading: 'Why Scrum and Scrum Master?',
            para: (
                <span>

                    The Framework of Scrum has been widely adopted in the Software and IT industry all across the globe which has led to evolutions in the advancement of Scrum Framework with time. This has led to increasing demand for the role of Scrum Master with an exquisite set of skills to handle the complex problem and provide solutions for scaled problems. As Scrum Master handles various high-scaled projects, the role of an advanced scrum master adds more value as expertise to provide solutions with an expert vision.
                    <br></br><br></br>
                    The A-CSM Certification is the key with which one can commence the role of advanced scrum master within an organisation. So let's dive in and learn more about the Advanced Scrum Master role and how can you become the same.
                </span>
            )
        },
        {
            heading: 'What is an Advanced Certified Scrum Master( A-CSM Certification)?',
            para: (
                <span>

                    An Advanced Scrum Master training is the certification program from Scrum Alliance to advance your skill and knowledge as a Scrum Master. The A-CSM training certification helps to focus more on the new exclusive skill sets and identify solutions which are of great use for the experienced agile professional to deal with various complex and challenging issues in an organisation to build much and more exclusive Agile-Development path.
                    <br></br><br></br>
                    The Advanced Scrum Master training facilitates better communication and dialogue delivery between the team members, executives, product owners, stakeholders and customers. An Advanced Scrum Master is an expert at responding confidently to the resistance of change, lack of motivation, lack of engagement to enable appropriate work ethics.
                </span>)
        },
        {
            heading: ' Why Agile Waters Consulting?',
            para: (
                <span>
                    <List>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                            At AgileWaters, we have a team of experienced trainers where each one of them has more than 20+ years of experience on the working and guiding principles of Scrum, Kanban, DevOps, SAFe etc. They provide the best of what we say as theoretical guidance and then about how to implement the fundamentals of Scrum in the work process.
                        </ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                            At Agile Waters, we provide support for post-work implementation. This helps the learners to exactly know how to implement the function and methods of Scrum into the work-process and deliver a quality solution to the enterprise.

                        </ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                            AgileWaters has combined agile experience of more than 50years, which means our trainers will drive you through every role Scrum has played and how it has evolved with time.
                        </ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                            Our Trainers at AgileWaters provide Real-life case studies to know the in-depth and thorough approach of Scrum Framework and its working process.
                        </ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                            <span> We at Agile Waters provide a <Link href=""> free A-CSM certification mock test</Link> so you can analyse and evaluate your preparation scenario for the Advanced Scrum Master Certification Exam.</span>
                        </ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                            AgileWaters provides a holistic view to Scrum Framework which means we believe in inter-connecting all the things which are related to Scrum Framework to deliver the exact concept and principles of Scrum Framework for the role of an Advanced Scrum Master.
                        </ListItem>
                        <ListItem alignItems='flex-start'>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                            <span><Link href=""> We also provide additional free certified courses.</Link></span>
                        </ListItem>



                    </List>

                    A-CSM Certification Exam is already added in the Course when you take it from AgileWaters. At first, we will provide you with training and workshops. Afterwards, we will take you through both the theoretical and practical approach with the perspective of the exam to clear the A-CSM Certification exam
                    <br></br><br></br>
                    Many mock papers will also be provided so that you have a good preparation scenario to clear the exam with ease.
                    .
                </span>
            ),
        },
    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
