import { AppCard } from '@crema'
import { Container, Grid, Typography } from '@mui/material'
import { maindata1, referdata1 } from 'modules/Constant/OtherCardsConst'
import HeroforOther from 'modules/commanmodules/HeroforOther'
import Image from 'next/image'
import React from 'react'

export default function Referinfo() {
    var details = [
        {
            img: '/assets/images/cards/refer1.png',
            heading: 'Refer Your Friends',
            subheading: 'Fill the below form and generate an invitation link. Share the link with your friends and family'
        },
        {
            img: '/assets/images/cards/enrol.png',
            heading: 'Your Friends Enroll',
            subheading: 'They use the link to get a coupon code to join the course & get a 10% discount.'
        },
        {
            img: '/assets/images/cards/gift-card.png',
            heading: 'Receive a gift card',
            subheading: 'You receive a gift card of up to Rs.1000/- or equivalent in Amazon Cards for each friend who enrolls'
        },
    ]


    return (
        <div>
            <Container sx={{ maxWidth: { xl: 1450 }, textAlign: 'center' }}>
                <HeroforOther data={referdata1} />
            </Container>
            <Grid container spacing={3} textAlign='center'>
                {details.map((item, i) => (
                    <Grid item xs={12} md={4} key={i}>

                        <AppCard>
                            <Image src={item.img} width={90} height={80}></Image>
                            <Typography variant='h1'>{item.heading}</Typography>
                            <Typography variant='h4'>{item.subheading}</Typography>
                        </AppCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
