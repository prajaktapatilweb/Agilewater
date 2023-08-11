import React from 'react';
import AppCard from '@crema/core/AppCard';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Fonts } from 'shared/constants/AppEnums';
import { Container } from '@mui/material';
import Image from 'next/image';

const Testcard = ({ data }) => {
    return (
        <Box>
            {data.map((item, index) => (
                <AppCard sxStyle={{ backgroundColor: '#0A8FDC', mt: 5 }} key={index}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 1,
                        }}
                    >
                        <Box
                            sx={{
                                mb: 2,
                            }}
                        >
                            <Image
                                src={'/assets/images/dashboard/academy/promo.png'}
                                width={130}
                                height={130}
                            ></Image>
                            {/* {props.img} */}
                            {/* <img src={'/assets/images/dashboard/academy/promo.png'} alt='promo' /> */}
                        </Box>
                        <Box
                            component='h2'
                            sx={{
                                mb: 2,

                                fontWeight: Fonts.BOLD,
                                color: '#fff',
                            }}
                        >
                            {item.title}
                        </Box>
                        <Box
                            component='p'
                            sx={{
                                mb: 3,
                                fontSize: 14,
                                textAlign: 'center',
                                // fontWeight: Fonts.MEDIUM,
                                color: '#fff',
                            }}
                        >
                            {item.testpara}
                        </Box>
                        {/* <Box
                        component='p'
                        sx={{
                            mb: 3,
                            color: '#fff',
                        }}
                    >

                    </Box> */}
                        <Box>
                            <Button
                                variant='contained'
                                size='small'
                                sx={{
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    textTransform: 'capitalize',
                                    '&:hover, &:focus': {
                                        backgroundColor: '#fff',
                                        color: '#000',
                                    },
                                }}
                            >
                                {item.testbutton}
                            </Button>
                        </Box>
                    </Box>
                </AppCard>
            ))}
        </Box>
    );
};

export default Testcard;
