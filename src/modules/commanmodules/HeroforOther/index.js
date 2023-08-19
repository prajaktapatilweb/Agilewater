import { Box } from '@mui/material';
import React from 'react';
import { Fonts } from 'shared/constants/AppEnums';

export default function HeroforOther({ data }) {
    return (
        <div>
            <Box>
                {data.map((item, index) => (
                    <Box key={index}>
                        <Box component='h1'
                            sx={{
                                fontWeight: Fonts.BOLD,
                                color: '#20509e',
                                position: 'relative',
                                zIndex: 1,
                            }}
                            mt={{ xs: 5, md: 5 }}
                            mb={{ xs: 2, md: 2 }}
                        >
                            {item.heading}
                        </Box>
                        <Box component='h3'
                            sx={{
                                color: 'black',
                                position: 'relative',
                                zIndex: 1,
                                fontWeight: 300,
                            }}
                            mb={{ xs: 3, md: 5 }}
                        >
                            {item.subheading}
                        </Box>
                    </Box>
                ))}
            </Box>
        </div>
    );
}
