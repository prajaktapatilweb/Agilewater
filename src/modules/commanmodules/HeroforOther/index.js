import { Details } from '@mui/icons-material'
import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { Fonts } from 'shared/constants/AppEnums'

export default function HeroforOther({ data }) {
    return (
        <div>
            <Box>
                {data.map((item, index) => (
                    <Box>

                        <Box
                            component='h1'
                            sx={{
                                fontWeight: Fonts.BOLD,
                                color: '#20509e',
                                position: 'relative',
                                zIndex: 1,

                                // fontSize: 16,
                            }}
                            mt={{ xs: 5, md: 5 }}
                            mb={{ xs: 5, md: 5 }}
                            gutterBottom>
                            {item.heading}
                        </Box>
                        <Box
                            component='h3'
                            sx={{
                                // fontWeight: Fonts.BOLD,
                                color: 'black',
                                position: 'relative',
                                zIndex: 1,
                                fontWeight: 300

                                // fontSize: 16,
                            }}
                            mt={{ xs: 9, md: 0 }}
                            mb={{ xs: 3, md: 5 }}
                        >
                            {item.subheading}
                        </Box>

                    </Box>

                ))}
            </Box>

        </div>
    )
}
