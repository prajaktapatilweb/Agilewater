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
import { AppCard } from '@crema';
import ItemMenu from '@crema/core/New/AppActionGridCard/ItemMenu';
import { teal } from '@mui/material/colors';
import { Fonts } from 'shared/constants/AppEnums';
import { motion } from 'framer-motion';

export default function MainpageCard(props) {
    return (

        <Box className='section'>
            <Grid item xs={12} sx={{ p: 3, textAlign: 'center' }}>
                <Heading data={headList3}></Heading>
            </Grid>
            <motion.div
                // className="box"
                // initial={{ opacity: 0 }}
                // a nimate={{ opacity: 1 }}

                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}

                transition={{
                    delay: 0.4,
                    y: { type: 'spring', stiffness: 100 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1
                }}
            >
                <Grid container spacing={3} sx={{ mb: 7 }}>
                    {props.DetailObject.map((item, i) => (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={i}>
                            <Card sx={{ height: 'auto', flexShrink: 0, mx: { xs: 5, sm: 0 } }}>
                                <Box sx={{ height: 'auto', flexShrink: 0, }}>

                                    <Image src={item.img} width={100} height={70} layout='responsive'  ></Image>


                                </Box>
                                <Box sx={{ p: 5 }}>
                                    <Typography gutterBottom variant='h2' className='paras' sx={{ textAlign: 'center' }}>
                                        {item.title}
                                        {/* Lizard */}
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary' sx={{ textAlign: 'justify' }}>
                                        {item.para}
                                        {/* Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica jfgkji jflghk jhlfk */}
                                    </Typography>

                                    <Button size='large' sx={{ color: '#20509e' }}>Learn More</Button>

                                </Box>

                            </Card>




                        </Grid>
                    ))}
                </Grid>
            </motion.div>


        </Box>

    );
}