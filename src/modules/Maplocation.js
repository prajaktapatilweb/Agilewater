import { Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function Maplocation() {
    return (
        <div>
            <div className='world-map' style={{ padding: 0 }}>

                <Image src='/assets/images/test6.png' width={100} height={100} objectFit='contain' priority='true' layout='responsive' alt='worldmap'></Image>
                {/* <img src="assets/images/test8.png" alt=''></img> */}
                <div className='pin usa'>

                    <span>San Francisco<br></br>
                        California -USA</span>

                </div>
                <div className='pin abc'>
                    <span></span>

                </div>
                <div className='pin france'>
                    <span></span>

                </div>
                <div className='pin sweden'>
                    <span></span>

                </div>
                <div className='pin pqr'>
                    <span></span>

                </div>
                <div className='pin india'>
                    <span>Pune <br></br> India</span>

                </div>
                <div className='pin south-africa'>
                    <span></span>

                </div>
                <div className='pin australia'>
                    <span></span>

                </div>

            </div>

        </div >
    )
}
