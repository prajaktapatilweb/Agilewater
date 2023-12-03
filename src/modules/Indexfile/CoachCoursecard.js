import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Grid } from '@mui/material';
import MainpageCard from 'modules/commanmodules/MainpageCard';

export default function CoachCoursecard() {
    var DetailObject = [
        {
            // img: "/assets/images/courselogo/CSM.jpg",
            title: 'Agile Coaching',
            para: <span>It's Time For You To Manage It As A CEO Career coaching with us is not just providing you with a fresh job. Its about bringing light to what you require in a job to be truthfully joyful and come up with ....</span>
        },
        {
            // img: "/assets/images/courselogo/ACSM1.png",
            title: 'Life Coaching',
            para: <span>It's Time For You To Manage It As A CEO Career coaching with us is not just providing you with a fresh job. Its about bringing light to what you require in a job to be truthfully joyful and come up with ....</span>
        },
        {
            // img: "/assets/images/courselogo/CSM.jpg",
            title: 'Scrum Master Coaching',
            para: <span>It's Time For You To Manage It As A CEO Career coaching with us is not just providing you with a fresh job. Its about bringing light to what you require in a job to be truthfully joyful and come up with ....</span>
        },
        {
            // img: "/assets/images/courselogo/CSPO.jpg",
            title: 'Scrum Master Coaching',
            para: <span>It's Time For You To Manage It As A CEO Career coaching with us is not just providing you with a fresh job. Its about bringing light to what you require in a job to be truthfully joyful and come up with ....</span>
        }
    ]
    return (
        <MainpageCard DetailObject={DetailObject} />

    );
}