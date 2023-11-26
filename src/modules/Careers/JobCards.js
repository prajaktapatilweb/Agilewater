import { Box, Button, Card, Grid, List, ListItem, Typography } from '@mui/material'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import React from 'react'
import { PlayArrow } from '@mui/icons-material';

export default function JobCards() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    var Details = {

        job1: [{
            head1: 'Information Security Specialist',
            head2: 'Country : India',
            head3: 'Experience : 5-10 years',
            head4: 'Company :',
            parahead: 'Job Summary:',
            parahead2: 'Responsibilities:',
            parahead3: 'Skill Requirements:'

        }

        ],

        job2: [{
            head1: 'IT Governance',
            head2: 'Country : India',
            head3: ' Experience : 10+ yrs',
            head4: 'Company :',
            parahead: 'Industry Type: ',
            parahead2: ' Job Responsibilities:',
            parahead3: 'Skills Required:'
        }
        ],
        job3: [{

            head1: 'Product Owner',
            head2: 'Country : India',
            head3: ' Experience : 10+ yrs',
            head4: 'Company :',
            parahead: 'Job Role Product Owner: ',
            parahead2: 'Key Responsibilities:',
            parahead3: 'Qualifications, Experience & Skills:'
        }
        ],
        job4: [{

            head1: 'Scrum Master',
            head2: 'Country : India',
            head3: ' Experience : 10+ yrs',
            head4: 'Company :',
            parahead: 'Job Role Scrum Master: ',
            parahead2: 'Key Responsibilities:',
            parahead3: 'Qualifications, Experience & Skills Mandatory skills, competencies & certifications:'
        }
        ],
        job5: [{

            head1: 'Customer Relationship Manager',
            head2: 'Country : India',
            head3: ' Experience : 0-5 yrs',
            head4: 'Company :Agilewaters Consulting',
            parahead: 'Day-to-Day responsibilities include: ',
            parahead2: 'Who can apply:',
            parahead3: 'Job Types: '
        }
        ],
        job6: [{

            head1: 'RTE @Pune (Release Train Engineer)',
            head2: 'Country : India',
            head3: ' Experience : 15+ yrs',
            head4: 'Company :',
            parahead: 'Must-Have : ',
            parahead2: 'Good to have :',
            parahead3: ''
        }
        ],

    }

    var DetailObject = [
        {
            heading: <span>
                <Box>
                    {Details.job1.map((item, i) => (
                        <Box>
                            <Typography variant='h1' sx={{ color: '#0572ab' }} gutterBottom>{item.head1}</Typography>
                            <Typography variant='h3' gutterBottom>{item.head2}</Typography>
                            <Typography variant='h5' gutterBottom>{item.head3}</Typography>
                            <Typography variant='h5' gutterBottom>{item.head4}</Typography>


                            <Button variant='contained' startIcon={<PlayArrow />} onClick={() => openInNewTab('https://www.youtube.com/@drakshaysdentavenuegeneral8556')}>Apply Now</Button>
                        </Box>
                    ))}
                </Box>
            </span>
            ,
            para: <span>
                <Box>
                    {Details.job1.map((item, i) => (
                        <Box>
                            <Typography variant='h4'>{item.parahead}</Typography>

                            The Information Security Specialist will be responsible for maintaining the security of the organization’s information systems and data, identifying and addressing vulnerabilities, and implementing effective security measures to protect against cyber threats.
                            <br></br><br></br>
                            <Typography variant='h4'>{item.parahead2}</Typography>
                            <List>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>Conduct regular security audits and vulnerability assessments to identify weaknesses and potential threats to the organization’s information systems.</ListItem>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>Develop and implement security policies and procedures to protect against cyber- attacks and unauthorized access to information.</ListItem>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>Manage security incidents and conduct forensic analysis when necessary to determine the source and scope of any security breaches.</ListItem>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>Oversee the implementation and maintenance of security technologies such as firewalls, intrusion detection/prevention systems, and data encryption tools.</ListItem>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>Collaborate with cross-functional teams to implement security best practices and ensure compliance with regulatory requirements.</ListItem>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>Provide security awareness training to employees and help develop a culture of security throughout the organization.</ListItem>
                            </List>
                            <Typography variant='h4'>{item.parahead3}</Typography>
                            <List>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>Bachelor’s degree in computer science, Information Technology, or related field</ListItem>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>5-10 years of experience in Information Security, with a proven record of accomplishment of implementing effective security measures and protecting against cyber threats</ListItem>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>Strong knowledge of security technologies and tools, including firewalls, intrusion detection/prevention systems, and data encryption tools.</ListItem>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>Strong technical knowledge of all aspects of the HIPAA regulation</ListItem>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>Experience operating or advising programs that effectively rightsized risk management controls across the relevant contexts of a distributed architecture.</ListItem>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>Experience supporting an organization through a SOC 2 + HIPAA audit.</ListItem>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>Familiarity with industry standards such as NIST, ISO, and PCI-DSS</ListItem>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>Excellent communication and collaboration skills, with the ability to work effectively with cross-functional teams.</ListItem>
                                <ListItem><ArrowRightIcon></ArrowRightIcon>Relevant certifications such as CISSP, CISM, or CISA are highly preferred.</ListItem>
                                <ListItem><ArrowRightIcon></ArrowRightIcon><b>Work experience:</b> 5- 10 years  <b> Employment Type:</b> Full Time, Permanent</ListItem>
                            </List>
                        </Box>
                    ))}
                </Box>
            </span>
        },
        {
            heading: <span>
                <Box>
                    {Details.job2.map((item, i) => (
                        <Box>
                            <Typography variant='h1' sx={{ color: '#0572ab' }} gutterBottom>{item.head1}</Typography>
                            <Typography variant='h3' gutterBottom>{item.head2}</Typography>
                            <Typography variant='h5' gutterBottom>{item.head3}</Typography>
                            <Typography variant='h5' gutterBottom>{item.head4}</Typography>
                            <Button variant='contained'>Apply Now</Button>
                        </Box>
                    ))}
                </Box>
            </span>,
            para:
                <span>
                    <Box>
                        {Details.job2.map((item, i) => (
                            <Box>
                                <Typography variant='h4' gutterBottom>{item.parahead}</Typography>
                                IT-Software, Software Services
                                <Typography variant='h4' gutterBottom>{item.parahead2}</Typography>
                                An IT Governance job typically involves overseeing and managing the policies, procedures, and processes that ensure the effective and efficient use of technology within an organization. This includes ensuring that the organization’s IT strategy aligns with its business goals and that the IT infrastructure is secure and compliant with relevant regulations and standards.

                                <List>
                                    <ListItem><ArrowRightIcon></ArrowRightIcon>Developing and implementing IT policies, procedures, and guidelines that adhere to industry standards and best practices.</ListItem>
                                    <ListItem><ArrowRightIcon></ArrowRightIcon>Ensuring compliance with legal and regulatory requirements related to IT operations.</ListItem>
                                    <ListItem><ArrowRightIcon></ArrowRightIcon>Identifying and mitigating IT-related risks to protect the organization’s assets and reputation.</ListItem>
                                    <ListItem><ArrowRightIcon></ArrowRightIcon>Coordinating and communicating with other departments to ensure that IT initiatives support the organization’s overall strategy.</ListItem>
                                    <ListItem><ArrowRightIcon></ArrowRightIcon>Monitoring and evaluating the effectiveness of IT policies and procedures and making recommendations for improvement</ListItem>
                                    <ListItem><ArrowRightIcon></ArrowRightIcon>Managing IT budgets and resources to ensure that they are aligned with organizational  priorities.</ListItem>
                                </List>
                                <Typography variant='h4' gutterBottom>{item.parahead3}</Typography>
                                <List>
                                    <ListItem><ArrowRightIcon></ArrowRightIcon>Qualifications for an IT Governance professional include a bachelor’s or master’s degree in information technology, computer science, or a related field, as well as experience in IT governance, risk management, and compliance.</ListItem>
                                    <ListItem><ArrowRightIcon></ArrowRightIcon>Additionally, certifications such as Certified in the Governance of Enterprise IT (CGEIT) or Certified Information Systems Auditor (CISA) may be preferred or required by some organizations.</ListItem>
                                    <ListItem><ArrowRightIcon></ArrowRightIcon>Work experience: 5- 10 years Employment Type: Full Time</ListItem>
                                </List>
                            </Box>


                        ))}
                    </Box>
                </span>
        },
        {
            heading: <span>
                <Box>
                    {Details.job3.map((item, i) => (
                        <Box>
                            <Typography variant='h1' sx={{ color: '#0572ab' }} gutterBottom>{item.head1}</Typography>
                            <Typography variant='h3' gutterBottom>{item.head2}</Typography>
                            <Typography variant='h5' gutterBottom>{item.head3}</Typography>
                            <Typography variant='h5' gutterBottom>{item.head4}</Typography>

                            <Button variant='contained'>Apply Now</Button>
                        </Box>
                    ))}
                </Box>
            </span>
            ,
            para: <span>
                <Box>
                    {Details.job3.map((item, i) => (
                        <Box>
                            <Typography variant='h4' gutterBottom>{item.parahead}</Typography>
                            Fill the role of a Product Owner for Process Automation with life.<br></br>
                            Orchestrate the development of process automation, robots & microservices.<br></br>
                            Work closely with Product Managers in our Sales and digital IT organizations.<br></br>
                            Define and refine functional features and acceptance criteria to meet the Product Roadmap.<br></br>
                            Create, Design, and Construct an entire Product Cycle within the Agile Process.<br></br>
                            Develop and maintain the product roadmap (features, epics, and stories).<br></br>
                            Plan Releases and Sprint goals while maintaining both technical and business functions.<br></br>
                            Manage project conflicts, challenges, and dynamic business requirements.<br></br>
                            Collaborate closely with the development, test, and integration team for the smooth delivery of the product.<br></br>
                            Provide continuous business and domain guidance to teams and developers.<br></br>
                            Communicate with management and stakeholders about sprint and project milestones, KPIs, etc.<br></br>
                            <Typography variant='h4' gutterBottom>{item.parahead2}</Typography>
                            Drives continuous exploration process and definition of product backlog items satisfying DoR<br></br>
                            Knows his/her products and underlying business processes.<br></br>
                            Defines and refines stories with the team.<br></br>
                            Prioritizes and owns the backlog for his Businesses.<br></br>
                            Proxies the Product Managers and other core stakeholders.<br></br>
                            Drives UAT, deployment, and integration of products.<br></br>
                            Ensures deliverables meet the user’s needs.<br></br>
                            Accountable for the delivery of the product as requested by the Product Manager<br></br>
                            <Typography variant='h4' gutterBottom>{item.parahead3}</Typography>
                            Bachelor’s or master’s degree in computer science, engineering, or another relevant field<br></br>
                            Total experience of 10+ years, Minimum 4+ years of experience as a Product Owner.<br></br>
                            Experience as a Product Owner in Process Automation and/or Software Product Development<br></br>
                            Excellent communication, presentation, and influencing skills.<br></br>
                            A product owner mindset with great attention to minute details<br></br>
                            Good experience in Agile Methodology and Practices (SAFe)<br></br>
                            Experience in rolling out large changes across multiple business areas and dealing with business<br></br>
                            colleagues.<br></br>
                            Experience working in a cross-functional Agile team<br></br>
                            Experience in common process automation platforms, e.g. Power Platform or uiPath, is a benefit<br></br>
                            Knowledge of Business Process Automation is desirable.<br></br>
                        </Box>
                    ))}
                </Box>
            </span>
        },
        {
            heading: <span>
                <Box>
                    {Details.job4.map((item, i) => (
                        <Box>
                            <Typography variant='h1' sx={{ color: '#0572ab' }} gutterBottom>{item.head1}</Typography>
                            <Typography variant='h3' gutterBottom>{item.head2}</Typography>
                            <Typography variant='h5' gutterBottom>{item.head3}</Typography>
                            <Typography variant='h5' gutterBottom>{item.head4}</Typography>

                            <Button variant='contained'>Apply Now</Button>
                        </Box>
                    ))}
                </Box>
            </span>
            ,
            para: <span>
                <Box>
                    {Details.job4.map((item, i) => (
                        <Box>
                            <Typography variant='h4' gutterBottom>{item.parahead}</Typography>
                            Facilitate Scrum events, including Sprint Planning, Daily Stand-up, Sprint Review, and Sprint Retrospective<br></br>
                            Help the Development Team and Product Owner understand and adhere to Scrum principles and values<br></br>
                            Protect the team from external distractions and ensure they have the necessary resources to complete their work<br></br>
                            Coach the team on self-organization, continuous improvement, and delivering high-quality products.<br></br>
                            Identify and remove impediments that are preventing the team from achieving their goals.<br></br>
                            Ensure transparency and visibility into the team’s progress and work with stakeholders to manage expectations.<br></br>
                            Collaborate with other Scrum masters to ensure alignment and consistency across the organization.<br></br>
                            <Typography variant='h4' gutterBottom>{item.parahead2}</Typography>
                            Enables the team to perform at its best<br></br>
                            Drives continuous improvement by providing valuable metrics and deriving actions together with the team.<br></br>
                            Educates and enables the delivery team and its stakeholders in Agile and the Digital Centre Operating Model.<br></br>
                            <Typography variant='h4' gutterBottom>{item.parahead3}</Typography>
                            Bachelor’s or master’s degree in computer science, engineering, or another relevant field<br></br>
                            Total experience of 10+ years, Minimum 4+ years of experience as a Scrum Master.<br></br>
                            Proven experience as a Scrum Master or similar role, with a track record of successful Agile team delivery<br></br>
                            Strong understanding of Agile and Scrum principles and practices<br></br>
                            Excellent communication, collaboration, and leadership skills<br></br>
                            Ability to manage conflict and facilitate difficult conversations.<br></br>
                            Strong problem-solving and analytical skills<br></br>
                            Knowledge of Agile tools and software, such as JIRA, Confluence, and Trello<br></br>
                            Preferred skills, competencies & certifications:<br></br>
                            Experience in a technical or software development environment<br></br>
                            Knowledge of DevOps and Continuous Delivery principles and practices<br></br>
                            Familiarity with Lean and Kanban methodologies.<br></br>
                        </Box>
                    ))}
                </Box>
            </span>
        },
        {
            heading: <span>
                <Box>
                    {Details.job5.map((item, i) => (
                        <Box>
                            <Typography variant='h1' sx={{ color: '#0572ab' }} gutterBottom>{item.head1}</Typography>
                            <Typography variant='h3' gutterBottom>{item.head2}</Typography>
                            <Typography variant='h5' gutterBottom>{item.head3}</Typography>
                            <Typography variant='h5' gutterBottom>{item.head4}</Typography>

                            <Button variant='contained'>Apply Now</Button>
                        </Box>
                    ))}
                </Box>
            </span>
            ,
            para: <span>
                <Box>
                    {Details.job5.map((item, i) => (
                        <Box>
                            <Typography variant='h4' gutterBottom>{item.parahead}</Typography>
                            1. Do Sales related activities<br></br>
                            2. Update our social media pages<br></br>
                            3. Chat online and talk with people to create leads and sales<br></br>
                            4. Create and run goal-oriented campaigns<br></br>
                            5. Also can take care of recruitment (Resume processing, Scheduling interviews and other formalities)<br></br>
                            <Typography variant='h4' gutterBottom>{item.parahead2}</Typography>
                            – Must be good in spoken and written English<br></br>

                            1. are available for the work from office job/internship<br></br>

                            2. can start the work from office job<br></br>

                            3. have relevant skills and interests<br></br>

                            – Women wanting to start/restart their career can also apply.<br></br>
                            <Typography variant='h4' gutterBottom>{item.parahead3}</Typography>
                            Full-time, Regular / Permanent, Fresher
                            <Typography variant='h4' gutterBottom>Schedule:</Typography>
                            Day shift
                            <Typography variant='h4' gutterBottom>Language:</Typography>
                            English (Preferred)

                        </Box>
                    ))}
                </Box>
            </span>
        },
        {

            heading: <span>
                <Box>
                    {Details.job6.map((item, i) => (
                        <Box>
                            <Typography variant='h1' sx={{ color: '#0572ab' }} gutterBottom>{item.head1}</Typography>
                            <Typography variant='h3' gutterBottom>{item.head2}</Typography>
                            <Typography variant='h5' gutterBottom>{item.head3}</Typography>
                            <Typography variant='h5' gutterBottom>{item.head4}</Typography>

                            <Button variant='contained'>Apply Now</Button>
                        </Box>
                    ))}
                </Box>
            </span>
            ,
            para: <span>
                <Box>
                    {Details.job6.map((item, i) => (
                        <Box>
                            <Typography variant='h4' gutterBottom>{item.parahead}</Typography>
                            1. 15+ Years Total Experience<br></br>
                            2. 3+ years Experience as RTE<br></br>
                            3. Have worked with 5 or more Teams setup as RTE<br></br>
                            <Typography variant='h4' gutterBottom>{item.parahead2}</Typography>
                            1. Exposure to the healthcare domain<br></br>
                            2. Engineering Background<br></br>
                            3. Exposure to Cloud-based solutions<br></br>
                        </Box>
                    ))}
                </Box>
            </span>
        }

    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>

    )
}
