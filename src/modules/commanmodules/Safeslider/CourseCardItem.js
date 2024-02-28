import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Card, Link, Typography } from '@mui/material';
import { Fonts } from 'shared/constants/AppEnums';

const CourseCardItem = ({ item }) => {
    return (
        <>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { sm: 'center' },
                    p: 0.5,
                    mr: 2,
                    borderRadius: 0,
                    border: '1px solid lightgrey',
                    background:
                        'linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: 'auto',
                        py: 2,
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { sm: 'center' },
                        background: 'white',
                        border: '1px #EDEDEE solid',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            // mr: { xs: 3, md: 4 },
                        }}
                    >

                        <Link href={item.links}>
                            <Image
                                src={item.cover}
                                alt={'Course ' + item.id}
                                height={100}
                                width={100}
                                objectFit='contain'


                            />
                        </Link>
                        {/* <img className='logo' alt='' src={item.cover} /> */}

                        <Box

                            sx={{
                                flex: 1,
                                display: 'inline-block',
                                fontWeight: 500
                            }}

                        >

                            <Typography component='h4'> <Link href={item.links} style={{ textDecoration: 'none', color: 'black' }}> {item.title}</Link></Typography>

                        </Box>


                    </Box>

                </Box>
            </Card>
        </>
    );
};
export default CourseCardItem;
