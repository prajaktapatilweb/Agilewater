import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function Heading1({ data }) {
    return (
        <div>
            <Box>
                {data.map((item, i) => (
                    <Box key={i}>


                        <Typography
                            variant="h1"
                            sx={{
                                fontFamily: "Lato, sans-serif",
                                fontSize: '20px',
                                // textTransform: "uppercase",
                                ml: { xs: 0, md: 4 },
                                mt: 0,
                                mb: 3,
                                lineHeight: 1.3,
                                fontWeight: 500,
                                color: 'black',
                                textAlign: 'center'
                            }}

                        >
                            {item.subtitle}

                        </Typography>
                        <Typography

                            sx={{

                                fontFamily: "Futura, sans-serif",

                                // fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: { xs: 30, md: 38 },
                                ml: { xs: 0, md: 4 },
                                mt: 0,
                                mb: 7,
                                lineHeight: 1.4,
                                fontWeight: 500,
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
    );
}
Heading1.propTypes = {
    data: PropTypes.Object,

};