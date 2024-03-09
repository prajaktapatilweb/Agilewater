import React from 'react';
import AppCard from '@crema/core/AppCard';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Fonts } from 'shared/constants/AppEnums';
import { teal } from '@mui/material/colors';
import Image from 'next/image';
import { Card, Container, Typography } from '@mui/material';

const DownloadCard = (props) => {
    return (
        <Card sx={{ zIndex: 1, display: 'flex', flexDirection: 'column', left: 0, top: 0, position: 'relative', background: '#009688', borderRadius: 10, border: '1px #EDEDEE solid' }} >
            <Box sx={{ width: '100%', height: 'auto', left: 0.09, top: 0, display: 'flex', flexDirection: 'column', position: 'relative', background: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 10, border: '1px #EDEDEE solid' }}>
                <Box
                    sx={{
                        px: 4,
                        display: 'flex',
                        // justifyContent: 'space-between',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <Image src={props.img} height={180} width={180}></Image>
                </Box>
            </Box>
            <Box
                sx={{
                    py: 4,
                    px: 4,
                    color: 'primary.contrastText',
                    flex: 1,
                    backgroundColor: teal[500],
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}
            >

                <Box
                    component='h2'
                    sx={{
                        fontWeight: Fonts.SMALL,
                    }}
                >
                    Download Course Contents
                </Box>


                <Box
                    variant='subtitle'
                    sx={{
                        // fontWeight: Fonts.BOLD,
                        fontSize: 15,
                        textAlign: 'center'
                    }}
                >
                    {props.testpara}
                </Box>

                <Box sx={{ pt: 3 }}>
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
                        {props.testbutton}
                    </Button>
                </Box>
            </Box>
        </Card>
    );
};

export default DownloadCard;
