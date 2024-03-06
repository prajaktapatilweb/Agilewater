import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Button, Card, ListItem, ListItemText } from '@mui/material';
import { Fonts } from 'shared/constants/AppEnums';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const CourseCardItem = ({ item }) => {
    return (
        <>
            <Card
                sx={{
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
                        alignItems: { sm: 'center' },
                        background: 'white',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottom: '1px #EDEDEE solid',
                            mx: { xs: 3, md: 2 },
                        }}
                    >
                        <Box
                            sx={{
                                mr: { xs: 3, md: 2 },
                            }}
                        >
                            <Image
                                src={item.cover}
                                alt={'Course ' + item.id}
                                height={100}
                                width={100}
                                objectFit='contain'
                            />
                            {/* <img className='logo' alt='' src={item.cover} /> */}
                        </Box>
                        <Box
                            sx={{
                                flex: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'inline-block',
                                    fontWeight: Fonts.MEDIUM,
                                    mb: 0.5,
                                    fontSize: 14,
                                }}
                                component='h3'
                            >
                                {item.title}
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            sx={{
                                alignItems: 'center',
                                color: 'black',
                            }}
                        >
                            {/* {props.testpara} */}
                            {item.text.map((text, i) => (
                                <ListItem alignItems='flex-start' just>
                                    {' '}
                                    <KeyboardDoubleArrowRightIcon />
                                    <ListItemText sx={{ mt: 0, ml: 1, textAlign: 'justify' }}>
                                        {item.text[i]}
                                    </ListItemText>
                                </ListItem>
                            ))}
                        </Box>

                        <Box sx={{}}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    justifyContent: 'center',
                                    my: 2,
                                }}
                            >
                                <Button variant='contained'>Register</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </>
    );
};
export default CourseCardItem;
