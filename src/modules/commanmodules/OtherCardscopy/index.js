import React from 'react';
import { Card, Grid } from '@mui/material';
import Image from 'next/image';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Fonts } from '../../../shared/constants/AppEnums';
import { AppCard } from '@crema';

const OtherCardscopy = ({ data }) => {
    return (
        <Grid container spacing={3}>
            {data.map((item, index) => (
                <Grid item xs={12} sm={12} md={3} lg={3} key={index}>
                    <AppCard sx={{ textAlign: 'center', width: '100%', mb: 5, xs: { m: 2 } }}>
                        <Box sx={{ my: 4 }}>
                            <Image src={item.img} width={140} height={140}></Image>
                        </Box>

                        <Box
                            component='h2'
                            sx={{
                                mb: 4,
                                fontWeight: Fonts.BOLD,
                                fontSize: 16,
                            }}
                        >
                            {item.title}
                        </Box>
                    </AppCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default OtherCardscopy;

OtherCardscopy.propTypes = {
    data: PropTypes.object.isRequired,
};
