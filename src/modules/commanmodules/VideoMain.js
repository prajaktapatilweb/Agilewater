import React from 'react';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player';

export default function VideoMain(props) {
    return (
        <div>


            <Box
                sx={{
                    background: "white",
                    borderRadius: "1px",
                    padding: 0,
                    boxShadow: "1px 5px 8px 5px #d4d4d4",



                    // '& .react-player': {
                    //     width: '100% !important',
                    // },
                }}
            >
                <ReactPlayer
                    className='react-player'
                    controls={true}
                    url={props.links}
                    width="100%"




                // url='https://www.youtube.com/watch?v=-M-R3Lc-V74'
                />
            </Box>


        </div>
    );
}
