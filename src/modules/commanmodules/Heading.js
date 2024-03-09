import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Heading({ data }) {
    return (
        <div>
            <Box>
                {data.map((item, index) => (
                    <Box>


                        <Typography
                            variant="h1"
                            sx={{

                                fontSize: { xs: 30, md: 40 },
                                ml: { xs: 0, md: 4 },
                                mt: 0,
                                mb: 1,
                                lineHeight: 1.3,
                                fontWeight: 500,
                                color: 'black',
                                textAlign: 'center'
                            }}

                        >
                            {item.subtitle}

                        </Typography>
                        <Typography
                            variant='h3'
                            sx={{

                                // fontSize: { xs: 40, md: 45 },
                                ml: { xs: 0, md: 4 },
                                mt: 0,
                                mb: 7,
                                // lineHeight: 1.3,
                                fontWeight: "500",
                                color: "#20509e",
                                // color: '#0157b8',
                                textAlign: 'center'
                            }}
                        >
                            {item.title}


                        </Typography>
                    </Box>
                ))}
            </Box>
        </div>
    )
}
