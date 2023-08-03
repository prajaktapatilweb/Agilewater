import { Link } from '@mui/material';
const otherCard = {
    course: {
        img: '/assets/images/courselogo/CSM.png',
        title: 'Certified Scrum Master (CSM)',
        subtitle: 'Gain a high degree of proficiency in executing Scrum',
        links: 'Enroll @ ₹23999 Only',
        strip: 'INSTRUCTOR-LED',
    },
    course1: {
        img: '/assets/images/courselogo/PSM1.jpg',
        title: 'Professional Scrum Master (PSM)',
        subtitle:
            'Deep understanding of core Scrum principles and its implementation.',
        links: 'Enroll @ ₹25999 Only',
        strip: 'INSTRUCTOR-LED',
    },
    course2: {
        img: '/assets/images/courselogo/smc.webp',
        title: 'Scrum Master Certified (SMC)',
        subtitle: 'Self-paced video recordings and material ',
        links: 'Enroll @ ₹14999 Only',
        strip: 'SELF-PACED',
    },
    course3: {
        img: '/assets/images/courselogo/CSPO.jpg',
        title: 'Certified Scrum Product Owner®',
        subtitle: ' ',
        links: 'Click For Details',
        strip: 'INSTRUCTOR-LED',
    },
    course4: {
        img: '/assets/images/courselogo/wt1.jpg',
        title: 'Advanced Certified Scrum Product Owner®',
        subtitle: ' ',
        links: 'Click For Details',
        strip: 'INSTRUCTOR-LED',
    },
    course5: {
        img: '/assets/images/courselogo/ProductOwner.jpg',
        title: 'Scrum Product Owner Certification',
        subtitle: ' ',
        links: 'Click For Details',
        strip: 'INSTRUCTOR-LED',
    },
    course6: {
        img: '/assets/images/courselogo/ICP-CAT.jpg',
        title: 'Coaching Agile Transitions',
        subtitle: ' ',
        links: 'Click For Details',
        strip: 'INSTRUCTOR-LED',
    },
    course7: {
        img: '/assets/images/courselogo/ICP-ACC.jpg',
        title: 'Agile Coaching Certification',
        subtitle: ' ',
        links: 'Click For Details',
        strip: 'INSTRUCTOR-LED',
    },
    course8: {
        img: '/assets/images/courselogo/ICP-ENT.jpg',
        title: 'Enterprise Coaching Certification',
        subtitle: ' ',
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
                <Link href='' sx={{ textDecoration: 'none', fontWeight: 'bold' }}>
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
                <Link href='' sx={{ textDecoration: 'none', fontWeight: 'bold' }}>
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
        buttons: ' Scrum Master Coaching',
    },
    sideMain2: {
        img: '/assets/images/cards/interview-prepration.png',
        title:
            'Apply for Scrum Master, Product Owner, Agile Coach Job openings in MNC’s across the world.',
        buttons: 'Find Job Opportunities',
    },
    sideMain3: {
        img: '/assets/images/cards/career-path.png',
        title:
            'Hire Life Coach, Agile Coach and Scrum Master coach to help you and your organization',
        buttons: 'Hire Life/Agile/Career Coach',
    },
    sideMain4: {
        img: '/assets/images/cards/daily-tasks.png',
        title:
            'We help write, review, publish Advertise your content worldwide. Connect with us to help you write blog and publish.',
        buttons: 'Write Your Best Blogs',
    },
    sideMain5: {
        img: '/assets/images/cards/certificate.png',
        title:
            'Enroll in any paid course and get access to 30+ free Courses and Certifications.',
        buttons: 'Explore Free Courses',
    },


};

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
export const maindata1 = [otherCardMain.main1];
export const maindata2 = [otherCardMain.main2];
export const maindata3 = [otherCardMain.main3];

export const sideList1 = [otherSideMain.sideMain1];
export const sideList2 = [otherSideMain.sideMain2];
export const sideList3 = [otherSideMain.sideMain3];
export const sideList4 = [otherSideMain.sideMain4];
export const sideList5 = [otherSideMain.sideMain5];
