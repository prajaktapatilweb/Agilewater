import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
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
                    background: "linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)",


                    '&:not(:last-of-type)': {
                        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
                    },
                }}
                className='item-hover'
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
                        }}
                    >
                        <Box
                            sx={{
                                mr: { xs: 3, md: 4 },
                                '& .logo': {
                                    height: 60,
                                    width: 60,
                                    //borderRadius: theme.overrides.MuiCard.root.borderRadius,
                                    overflow: 'hidden',
                                    display: 'block',
                                },
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
                    {/* 
                    <Box
                        sx={{
                            ml: { sm: 'auto' },
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >



                        <Box
                            sx={{
                                ml: 1,
                                mr: -2,
                            }}
                        >
                            <IconButton
                                aria-controls='alpha-menu'
                                aria-haspopup='true'
                                onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id='alpha-menu'
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >
                                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                                <MenuItem onClick={handleClose}>Option 3</MenuItem>
                            </Menu>
                        </Box>
                    </Box> */}
                </Box>
            </Card>

        </>


    );
};
export default CourseCardItem;
