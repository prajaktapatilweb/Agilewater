import { AppCard } from '@crema'
import { Grid, Typography } from '@mui/material'
import Image from 'next/dist/client/image'
import React from 'react'

export default function ContactValues() {
    var Details = [
        {
            image: '/assets/images/cards/values-1.png',
            para: 'Thrive Competency Analysis and Development With Standard and Customized Training and workshops',
        },
        {
            image: '/assets/images/cards/values-2.png',
            para: 'Possess Engaging manner and bring Wealth of Experience by honesty and integrity.',
        },
        {
            image: '/assets/images/cards/values-3.png',
            para: 'Do more with less investment and care for long-term association.',
        },
    ]
    return (
        <div>
            <Grid container spacing={3} className='section' alignItems='center' sx={{ textAlign: 'center' }}>
                {Details.map((item, i) => (
                    <Grid item xs={12} md={4} key={i}>
                        <AppCard>
                            <Image src={item.image} width={100} height={100} layout='responsive' objectFit='contain'></Image>
                            <Typography variant='subtilte1'>{item.para}</Typography>
                        </AppCard>
                    </Grid>
                ))}</Grid>
        </div>
    )
}
