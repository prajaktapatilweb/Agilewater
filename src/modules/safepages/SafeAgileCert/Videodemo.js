import React, { useState } from 'react';
import AppCard from '@crema/core/AppCard';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player';
import { Container } from '@mui/material';

export default function Videodemo() {
    return (
        <div>

            <AppCard sxStyle={{ height: 10 }} sx={{}}>
                <Box
                    sx={{
                        m: -1,

                        '& .react-player': {
                            width: '100% !important',
                        },
                    }}
                >
                    <ReactPlayer
                        className='react-player'
                        controls={true}
                        url='https://www.youtube.com/watch?v=-M-R3Lc-V74'
                    />
                </Box>
            </AppCard>

        </div>
    );
}
