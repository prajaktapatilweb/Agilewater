import { Box, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function Maplocation() {
    return (
        <div>
            <Box className='world-map' sx={{ my: { xs: 0, sm: -15 }, mx: { xs: 0, sm: -8 } }}>

                <Image src='/assets/images/test6-min.png' width={100} height={100} objectFit='contain' priority='true' layout='responsive' alt='worldmap'></Image>
                {/* <img src="assets/images/test8.png" alt=''></img> */}
                <Box className='pin usa'>

                    <span>San Francisco<br></br>
                        California -USA</span>

                </Box>
                <Box className='pin abc'>
                    <span></span>

                </Box>
                <Box className='pin france'>
                    <span></span>

                </Box>
                <Box className='pin sweden'>
                    <span></span>

                </Box>
                <Box className='pin pqr'>
                    <span></span>

                </Box>
                <Box className='pin india'>
                    <span>Pune <br></br> India</span>

                </Box>
                <Box className='pin south-africa'>
                    <span></span>

                </Box>
                <Box className='pin australia'>
                    <span></span>

                </Box>

            </Box>

        </div >
    )
}
