import { Link } from '@mui/material';
import { acspolink, agilebootcamplink, careerlink, csmlink, cspolink, freecourselink, icpacclink, icpapmlink, icpcatlink, icpentlink, icplealink, polink, psm1link, smclink, smcoachlink, writebloglink } from 'modules/commanmodules/Pagelinks';
const otherCard = {
    course: {
        img: '/assets/images/courselogo/CSM.png',
        title: 'Certified Scrum Master (CSM)',
        subtitle: 'Gain a high degree of proficiency in executing Scrum',
        onlink: csmlink,
        links: 'Enroll @ ₹239996 Only',
        strip: 'INSTRUCTOR-LED',
    },
    course1: {
        img: '/assets/images/courselogo/PSM1.jpg',
        title: 'Professional Scrum Master (PSM)',
        subtitle:
            'Deep understanding of core Scrum principles and its implementation.',
        onlink: psm1link,
        links: 'Enroll @ ₹25999 Only',
        strip: 'INSTRUCTOR-LED',
    },
    course2: {
        img: '/assets/images/courselogo/smc.webp',
        title: 'Scrum Master Certified (SMC)',
        subtitle: 'Self-paced video recordings and material ',
        onlink: smclink,
        links: 'Enroll @ ₹14999 Only',
        strip: 'SELF-PACED',
    },
    course3: {
        img: '/assets/images/courselogo/CSPO.jpg',
        title: 'Certified Scrum Product Owner®',
        subtitle: ' ',
        onlink: cspolink,
        links: 'Click For Details',
        strip: 'INSTRUCTOR-LED',
    },
    course4: {
        img: '/assets/images/courselogo/ACSPO1.jpg',
        title: 'Advanced Certified Scrum Product Owner®',
        subtitle: ' ',
        onlink: acspolink,
        links: 'Click For Details',
        strip: 'INSTRUCTOR-LED',
    },
    course5: {
        img: '/assets/images/courselogo/ProductOwner.jpg',
        title: 'Scrum Product Owner Certification',
        subtitle: ' ',
        onlink: polink,
        links: 'Click For Details',
        strip: 'INSTRUCTOR-LED',
    },
    course6: {
        img: '/assets/images/courselogo/ICP-CAT.jpg',
        title: 'Coaching Agile Transitions',
        subtitle: ' ',
        onlink: icpcatlink,
        links: 'Click For Details',
        strip: 'INSTRUCTOR-LED',
    },
    course7: {
        img: '/assets/images/courselogo/ICP-ACC.jpg',
        title: 'Agile Coaching Certification',
        subtitle: ' ',
        onlink: icpacclink,
        links: 'Click For Details',
        strip: 'INSTRUCTOR-LED',
    },
    course8: {
        img: '/assets/images/courselogo/ICP-ENT.jpg',
        title: 'Enterprise Coaching Certification',
        subtitle: ' ',
        onlink: icpentlink,
        links: 'Click For Details',
        strip: 'INSTRUCTOR-LED',
    },
    course9: {
        img: '/assets/images/courselogo/ICP-ACC-ENT2.png',
        title: ' Enterprise Agile Coaching MasterClass',
        subtitle: ' ',
        onlink: agilebootcamplink,
        links: 'Click For Details',
        strip: 'INSTRUCTOR-LED',
    },
    course10: {
        img: '/assets/images/courselogo/ICP-LEA.png',
        title: 'Leading with Agility Certification',
        subtitle: ' ',
        onlink: icplealink,
        links: 'Click For Details',
        strip: 'INSTRUCTOR-LED',
    },
    course11: {
        img: '/assets/images/courselogo/ICP-APM.jpg',
        title: 'Agile Project & Delivery Management',
        subtitle: ' ',
        onlink: icpapmlink,
        links: 'Click For Details',
        strip: 'INSTRUCTOR-LED',
    },
};

const otherCardMain = {
    main1: {
        heading: 'Scrum Master Certification Training',
        subheading: (
            <span>
                We bring you Online Agile Scrum Master certifications at the best cost
                by best trainers. We also give you various Agile Coach & Scrum Master{' '}
                <Link href={careerlink} sx={{ textDecoration: 'none', fontWeight: 'bold' }}>
                    job opportunities
                </Link>{' '}
                in various global companies. Get certified Scrum Master after 2 days
                training.
            </span>
        ),
    },
    main2: {
        heading: 'Product Owner Certifications Training',
        subheading: (
            <span>
                We bring you all Agile Scrum Product Owner certification trainings under
                one roof with best cost, best trainers &{' '}
                <Link href={careerlink} sx={{ textDecoration: 'none', fontWeight: 'bold' }}>
                    job opportunities.
                </Link>{' '}
                Get certified after 2 days of expert online training.
            </span>
        ),
    },
    main3: {
        heading: 'Agile Coaching Certifications Training',
        subheading: (
            <span>
                {' '}
                Our Agile Coaching certifications are best in the world with 20 years +
                experienced coaches providing training in all time zones for your
                comfort . We promise to make you the best coaches with our expert help
                and guidance. Courses are in 2,3,4,5 days options. Please check
                schedule. 100% Assured result valid for Lifetime.
            </span>
        ),
    },
};

const otherSideMain = {
    sideMain1: {
        img: '/assets/images/cards/growth.png',
        title: 'Get Scrum Master Coaching from our professional, certified coaches',
        onlink: smcoachlink,
        buttons: ' Scrum Master Coaching',

    },
    sideMain2: {
        img: '/assets/images/cards/interview-prepration.png',
        title:
            'Apply for Scrum Master, Product Owner, Agile Coach Job openings in MNC’s across the world.',
        onlink: careerlink,
        buttons: 'Find Job Opportunities',
    },
    sideMain3: {
        img: '/assets/images/cards/career-path.png',
        title:
            'Hire Life Coach, Agile Coach and Scrum Master coach to help you and your organization',
        onlink: smcoachlink,
        buttons: 'Hire Life/Agile/Career Coach',
    },
    sideMain4: {
        img: '/assets/images/cards/daily-tasks.png',
        title:
            'We help write, review, publish Advertise your content worldwide. Connect with us to help you write blog and publish.',
        onlink: writebloglink,
        buttons: 'Write Your Best Blogs',
    },
    sideMain5: {
        img: '/assets/images/cards/certificate.png',
        title:
            'Enroll in any paid course and get access to 30+ free Courses and Certifications.',
        onlink: freecourselink,
        buttons: 'Explore Free Courses',
    },
    sideMain6: {
        img: '/assets/images/cards/interview-prepration.png',
        title:
            'Prepare for your next interview with experts. Book session to talk one to one with our industry experts and get your all doubts/queries cleared.',
        onlink: smcoachlink,
        buttons: 'Register Now',
    },
    sideMain11: {
        img: '/assets/images/cards/video-conference.png',
        title: 'Schedule a personal meeting with trainer. Book One-on-One Coaching Sessions',
        onlink: smcoachlink,
        buttons: ' Book Session',

    },


};
const otherHeroMain = {
    heromain1: {
        heading: <span style={{ color: 'white' }}>Schedule personal Meetings with mentor</span>,
        subheading: (
            <span style={{ color: 'wheat' }}>
                <b>We Are Ready To Help You. Let us know What Help Are You Looking For?</b>
            </span>
        )
    }
}
const otherHeroMain1 = {
    herocareermain1: {
        heading: <span style={{ color: 'white' }}>Opportunities don't happen We create it for you.</span>,
        subheading: ''
    }
}
const otherReferMain1 = {
    herorefermain1: {
        heading: <span style={{ color: 'white' }}>Refer a Friend and Earn</span>,
        subheading: ''
    }
}
const otherReferMain = {
    main1: {
        heading: 'How the Refer and Earn program Works',
        subheading: (
            <span>
                Start earning rewards in 3 easy steps
            </span>
        ),
    },
}
const otherContactMain = {
    contactuscareermain1: {
        heading: <span style={{ color: 'white' }}>About Us</span>,
        subheading: (
            <span style={{ color: 'wheat' }}>
                <b>We Build Your Career And Team</b>
            </span>
        )
    }
}

const otherCardCopy = {
    card1: {
        img: '/assets/images/cards/agile1.png',
        title: 'Scrum',


    },
    card2: {
        img: '/assets/images/cards/agile2.png',
        title: 'Agility',


    },
    card3: {
        img: '/assets/images/cards/career-path.png',
        title: 'Career',


    },
    card4: {
        img: '/assets/images/cards/certificate.png',
        title: 'Certificates',


    },
    card5: {
        img: '/assets/images/cards/growth.png',
        title: 'Growth',


    },
    card6: {
        img: '/assets/images/cards/goal.png',
        title: 'Life Goals',


    },
    card7: {
        img: '/assets/images/cards/meditation.png',
        title: 'Self Care',


    },
    card8: {
        img: '/assets/images/cards/daily-tasks.png',
        title: 'Other',


    },
}


export const otherCardList = [
    otherCard.course,
    otherCard.course1,
    otherCard.course2,
];
export const otherCardList2 = [
    otherCard.course3,
    otherCard.course4,
    otherCard.course5,
];
export const otherCardList3 = [
    otherCard.course6,
    otherCard.course7,
    otherCard.course8,
];
export const otherCardList4 = [
    otherCard.course6,
    otherCard.course7,
    otherCard.course8,
    otherCard.course9,
    otherCard.course10,
    otherCard.course11
];


export const maindata1 = [otherCardMain.main1];
export const maindata2 = [otherCardMain.main2];
export const maindata3 = [otherCardMain.main3];

export const referdata1 = [otherReferMain.main1];


export const sideList1 = [otherSideMain.sideMain1];
export const sideList2 = [otherSideMain.sideMain2];
export const sideList3 = [otherSideMain.sideMain3];
export const sideList4 = [otherSideMain.sideMain4];
export const sideList5 = [otherSideMain.sideMain5];
export const sideList6 = [otherSideMain.sideMain6];
export const sideList11 = [otherSideMain.sideMain11];

export const otherHeroList = [
    otherHeroMain.heromain1,
]
export const otherHeroList1 = [
    otherHeroMain1.herocareermain1
]
export const otherReferList1 = [
    otherReferMain1.herorefermain1
]
export const othercontactusList = [
    otherContactMain.contactuscareermain1
]

export const otherCardCopyList = [
    otherCardCopy.card1,
    otherCardCopy.card2,
    otherCardCopy.card3,
    otherCardCopy.card4,
    otherCardCopy.card5,
    otherCardCopy.card6,
    otherCardCopy.card7,
    otherCardCopy.card8
]

