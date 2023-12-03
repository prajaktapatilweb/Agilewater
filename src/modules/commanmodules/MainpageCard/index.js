import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Grid, Box } from '@mui/material';
import Heading from '../Heading';
import { headList3 } from 'modules/Constant/titlefile';

export default function MainpageCard(props) {
    return (

        <Grid container spacing={3} sx={{ mb: 7 }} className='section'>
            <Grid item xs={12} sx={{ p: 3, textAlign: 'center' }}>
                <Heading data={headList3}></Heading>
            </Grid>

            {props.DetailObject.map((item, i) => (
                <Grid item xs={12} sm={6} md={3} lg={3} sx={{ justifyContent: 'stretch' }} key={i}>
                    <Card>
                        {/* <CardMedia
                            // component='img'
                            // height='200'
                            // image=''
                            alt='green iguana'
                            sx={{ textAlign: 'center' }}
                        >

                            <Image src={item.img} width={100} height={100}></Image>
                        </CardMedia> */}
                        <CardContent>
                            <Typography gutterBottom variant='h3' component='div'>
                                {item.title}
                                {/* Lizard */}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                {item.para}
                                {/* Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica jfgkji jflghk jhlfk */}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* {props.links} */}
                            {/* <Button size='small'>Share</Button> */}
                            <Button size='small'>Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}


        </Grid>

    );
}