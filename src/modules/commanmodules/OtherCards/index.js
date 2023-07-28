import React from 'react';
import { Card, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import Image from 'next/image';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Fonts } from '../../../shared/constants/AppEnums';

const OtherCards = ({ data }) => {

    return (
        <Grid container spacing={3} alignItems='stretch'>
            {data.map((item, index) => (
                <Grid item sx={12} sm={6} md={4} lg={4}>
                    <div className="box">

                        <Card
                            sx={{
                                padding: 5,
                                textAlign: 'center',
                            }}

                            key={index}
                        >
                            <div className='ribbon ribbon-top-left'>
                                <span>{item.strip}</span>
                            </div>

                            <Box sx={{ my: 4 }}>
                                <Image src={item.img} width={100} height={100}></Image>
                                {/* <Avatar
                                    sx={{
                                        height: { xs: 60, xl: 80 },
                                        width: { xs: 60, xl: 80 },
                                        backgroundColor: data.avatarColor,
                                        display: 'inline-flex',
                                    }}
                                    src={item.img}
                                > */}
                                {/* {item.img} */}
                                {/* </Avatar> */}
                            </Box>

                            <Box
                                component='h2'
                                sx={{
                                    mb: 4,
                                    fontWeight: Fonts.BOLD,
                                    fontSize: 16,
                                }}
                            >
                                {item.title}
                            </Box>

                            <Box component='p' sx={{ mb: 5 }}>
                                {item.subtitle}
                            </Box>

                            <Button
                                variant='contained'
                                sx={{
                                    fontWeight: Fonts.MEDIUM,
                                    fontSize: 14,
                                    backgroundImage: "linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 80%, #2dd3aa 80%)",
                                    // backgroundColor: '#3e2bce',
                                    color: 'white',
                                }}
                            >
                                {item.links}
                                {/* <IntlMessages id='dashboard.readMore' /> */}
                            </Button>
                        </Card>


                    </div>
                </Grid>
            ))
            }
        </Grid >
    );
};

export default OtherCards;

OtherCards.propTypes = {
    data: PropTypes.object.isRequired,
};
