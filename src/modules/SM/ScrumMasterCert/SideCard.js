import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    CardActions,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Fonts } from 'shared/constants/AppEnums';
import { useRouter } from 'next/router';

export default function SideCard({ data }) {
    const Router = useRouter()
    return (
        <div>
            <Box sx={{ mb: 5 }}>
                {data.map((item, index) => (
                    <Card
                        key={index}
                        sx={{ textAlign: 'center', backgroundColor: '#e6f4fb', py: 5, border: '1px solid #E0E0E0' }}
                    >
                        <CardMedia
                            // component='img'
                            // height='200'
                            // image=''
                            alt='green iguana'
                            sx={{ textAlign: 'center' }}
                        >
                            <Image src={item.img} width={100} height={100}></Image>
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant='h3' component='div'>
                                {item.title}
                                {/* Lizard */}
                            </Typography>
                        </CardContent>
                        <Box>
                            <Button
                                variant='contained'
                                sx={{
                                    fontWeight: Fonts.MEDIUM,
                                    fontSize: 14,
                                    backgroundColor: '#07649a',
                                    color: 'white',
                                }}
                                onClick={() => Router.push(item.onlink)}
                            >
                                {item.buttons}
                            </Button>

                            {/* <Button size='small'>Share</Button> */}
                        </Box>
                    </Card>
                ))}
            </Box>
        </div>
    );
}
