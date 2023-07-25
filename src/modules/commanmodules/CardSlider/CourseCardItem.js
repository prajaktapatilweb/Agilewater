import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
const CourseCardItem = ({ item }) => {
    return (<Box sx={{
        px: 3,
        pt: 5,
        pb: 10,

    }}>
        <Box sx={{
            p: 2,

            backgroundColor: 'background.paper',
            borderRadius: 4,
            transition: (theme) => theme.transitions.create(['box-shadow']),
            boxShadow: 2,
            [`& .${iconButtonClasses.root}`]: {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                boxShadow: 2,
            },
            // '&:hover': {
            //     boxShadow: 2,
            //     [`& .${iconButtonClasses.root}`]: {
            //         backgroundColor: 'primary.main',
            //         color: 'primary.contrastText',
            //         boxShadow: 2,
            //     },
            // },
        }}>
            <Box sx={{
                lineHeight: 0,
                overflow: 'hidden',
                border: '1px solid grey',
                borderRadius: 3,
                textAlign: 'center',
                mb: 2,
                alignItems: "center",
                justifyContent: 'center',
            }}>
                <Image src={item.cover} height={200}
                    width={200}
                    alt={'Course ' + item.id} />
            </Box>
            <Box sx={{ mb: 2 }}>
                <Typography component="h2" variant="h5" sx={{ color: "#0b1341", overflow: 'hidden', fontSize: '1.2rem' }}>
                    {item.title}
                </Typography>
                {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Rating name="rating-course" value={item.rating} max={5} sx={{ color: '#ffce31', mr: 1 }} readOnly />
          <Typography component="span" variant="h5">
            ({item.ratingCount})
          </Typography>
        </Box> */}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography component="span" variant="h5">
                        {item.price}
                    </Typography>
                    {/* <Typography variant="h6">/ course</Typography> */}
                </Box>
                {/* <IconButton color="primary" sx={{ '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' } }}>
          <ArrowForward />
        </IconButton> */}
            </Box>
        </Box>
    </Box>);
};
export default CourseCardItem;
