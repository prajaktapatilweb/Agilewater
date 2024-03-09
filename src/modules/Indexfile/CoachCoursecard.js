import * as React from 'react';
import MainpageCard from 'modules/commanmodules/MainpageCard';

export default function CoachCoursecard() {
    var DetailObject = [
        {
            img: "/assets/images/slick-slider/carousel-1.jpg",
            title: 'Agile Coaching',
            para: <span>It's Time For You To Manage It As A CEO Career coaching with us is not just providing you with a fresh job. Its about bringing light to what you require in a job to be truthfully joyful and come up with ....</span>
        },
        {
            img: "/assets/images/slick-slider/carousel-2.jpg",
            title: 'Life Coaching',
            para: <span>It's Time For You To Manage It As A CEO Career coaching with us is not just providing you with a fresh job. Its about bringing light to what you require in a job to be truthfully joyful and come up with ....</span>
        },
        {
            img: "/assets/images/slick-slider/carousel-3.jpg",
            title: 'Scrum Master Coaching',
            para: <span>It's Time For You To Manage It As A CEO Career coaching with us is not just providing you with a fresh job. Its about bringing light to what you require in a job to be truthfully joyful and come up with ....</span>
        },
        {
            img: "/assets/images/slick-slider/carousel-5.jpg",
            title: 'Scrum Master Coaching',
            para: <span>It's Time For You To Manage It As A CEO Career coaching with us is not just providing you with a fresh job. Its about bringing light to what you require in a job to be truthfully joyful and come up with ....</span>
        }
    ]
    return (
        <MainpageCard DetailObject={DetailObject} />

    );
}