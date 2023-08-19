import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Fonts } from 'shared/constants/AppEnums'

export default function Careersidecard() {
    return (
        <div>
            <Box sx={{ mb: 5 }}>

                <Card sx={{ textAlign: 'center', backgroundColor: '#e6f4fb', py: 5, border: '1px solid #E0E0E0' }}
                >
                    <Typography gutterBottom variant='h2' component='div'>
                        AGILE COACHING MASTERCLASS
                    </Typography>
                    <CardMedia
                        // component='img'
                        // height='200'
                        // image=''
                        alt='green iguana'
                        sx={{ textAlign: 'center' }}
                    >
                        <Image src='/assets/images/courselogo/ICP-ACC-ENT2.png' width={250} height={120}></Image>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            Instructor-Led Live Online Sessions
                        </Typography>
                        <Typography gutterBottom variant='h2' component='div'>
                            4 Live Sessions
                        </Typography>
                        <Typography gutterBottom variant='h5' component='div'>
                            weekends / weekdays
                            {/* Lizard */}
                        </Typography>
                    </CardContent>
                    <Box sx={{ mb: 2 }}>
                        <Button
                            variant='contained'
                            sx={{
                                fontWeight: Fonts.MEDIUM,
                                fontSize: 14,
                                backgroundColor: '#07649a',
                                color: 'white',
                            }}
                        >
                            Click For Details
                        </Button>

                    </Box>
                    <Typography variant='subtitle1'>Register today and get 10% off on early bird pricing.</Typography>
                </Card>

            </Box>
        </div>
    )
}
