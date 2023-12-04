import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { Button, Card, ListItem, ListItemText } from '@mui/material';
import { teal } from '@mui/material/colors';
import { Fonts } from 'shared/constants/AppEnums';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const CourseCardItem = ({ item }) => {
    return (
        <>
            <Card
                sx={{
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    left: 0,
                    top: 0,
                    position: 'relative',
                    p: 1,
                    background: "linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)",
                    // backgroundImage: 'linear-gradient(to right, rgba(61,51,204,0.9), rgba(154,219,206,0.9)',
                    // background: '#009688',
                    borderRadius: 1,
                    // border: '2px #009688 solid',
                    mx: { xs: 0, sm: 3 },
                    // backgroundColor
                    // mx: 3,
                    mb: 15
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: 'auto',
                        p: 0,

                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',

                        background: 'white',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,

                        border: '1px #EDEDEE solid',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            src={item.cover}

                            alt={'Course ' + item.id}
                            height={80}
                            width={80}
                            // layout='responsive'
                            objectFit='contain'
                            className='pngback'
                        />

                        <Typography
                            variant='h1'
                            mx={{ xs: 1, md: 1, lg: 1, xl: 3 }}
                            fontSize={{ md: 16, lg: 18, xl: 18 }}
                            sx={{
                                fontWeight: Fonts.BOLD,
                                color: 'black',
                            }}
                        >
                            {item.title}
                        </Typography>
                    </Box>
                    {/* <Box
                        sx={{
                            // px: 4,
                            display: 'flex',
                            // justifyContent: 'space-between',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            src={item.cover}
                            height={150}
                            width={150}
                            alt={'Course ' + item.id}
                        />
                        {/* <Image src={props.img} height={180} width={180}></Image> *
                    </Box> */}
                </Box>
                <Box
                    sx={{
                        py: 4,
                        px: 4,
                        color: 'primary.contrastText',
                        flex: 1,
                        // backgroundImage: "linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)",
                        borderBottomRightRadius: 30,
                        borderBottomLeftRadius: 30,
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* <Box
                        component='h2'
                        sx={{
                            fontWeight: Fonts.SMALL,
                        }}
                    >
                        <Typography
                            component='h2'
                            variant='h5'
                            sx={{ color: '#0b1341', overflow: 'hidden', fontSize: '1.2rem' }}
                        >
                            {item.title}
                        </Typography>
                    </Box> */}

                    <Box
                        variant='subtitle'
                        sx={{
                            // fontWeight: Fonts.BOLD,
                            fontSize: 15,
                            textAlign: 'center',
                            color: 'black'
                        }}
                    >
                        {/* {props.testpara} */}
                        {item.text.map((text, i) => (
                            <ListItem alignItems='flex-start'> <KeyboardDoubleArrowRightIcon />
                                <ListItemText>
                                    {item.text[i]}
                                </ListItemText>
                            </ListItem>
                        ))}

                    </Box>

                    <Box sx={{ pt: 3 }}>
                        <Button
                            variant='contained'
                            size='large'
                            sx={{
                                backgroundImage: "linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)",
                                // backgroundColor: '#fff',
                                color: 'white',
                                textTransform: 'capitalize',
                                '&:hover, &:focus': {
                                    backgroundColor: '#fff',
                                    color: '#000',
                                },
                            }}
                        >
                            Know More
                            {/* {props.testbutton} */}
                        </Button>
                    </Box>
                </Box>
            </Card>
        </>

        // <Box sx={{
        //     px: 3,
        //     pt: 5,
        //     pb: 10,

        // }}>
        //     <Box sx={{
        //         p: 2,

        //         backgroundColor: 'background.paper',
        //         borderRadius: 4,
        //         transition: (theme) => theme.transitions.create(['box-shadow']),
        //         boxShadow: 2,
        //         [`& .${iconButtonClasses.root}`]: {
        //             backgroundColor: 'primary.main',
        //             color: 'primary.contrastText',
        //             boxShadow: 2,
        //         },
        //         // '&:hover': {
        //         //     boxShadow: 2,
        //         //     [`& .${iconButtonClasses.root}`]: {
        //         //         backgroundColor: 'primary.main',
        //         //         color: 'primary.contrastText',
        //         //         boxShadow: 2,
        //         //     },
        //         // },
        //     }}>
        //         <Box sx={{
        //             lineHeight: 0,
        //             overflow: 'hidden',
        //             border: '1px solid grey',
        //             borderRadius: 3,
        //             textAlign: 'center',
        //             mb: 2,
        //             alignItems: "center",
        //             justifyContent: 'center',
        //         }}>
        //             <Image src={item.cover} height={200}
        //                 width={200}
        //                 alt={'Course ' + item.id} />
        //         </Box>
        //         <Box sx={{ mb: 2 }}>
        //             <Typography component="h2" variant="h5" sx={{ color: "#0b1341", overflow: 'hidden', fontSize: '1.2rem' }}>
        //                 {item.title}
        //             </Typography>
        //             {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
        //       <Rating name="rating-course" value={item.rating} max={5} sx={{ color: '#ffce31', mr: 1 }} readOnly />
        //       <Typography component="span" variant="h5">
        //         ({item.ratingCount})
        //       </Typography>
        //     </Box> */}
        //         </Box>
        //         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        //             <Box sx={{ display: 'flex', alignItems: 'center' }}>
        //                 <Typography component="span" variant="h5">
        //                     {item.price}
        //                 </Typography>
        //                 {/* <Typography variant="h6">/ course</Typography> */}
        //             </Box>
        //             {/* <IconButton color="primary" sx={{ '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' } }}>
        //       <ArrowForward />
        //     </IconButton> */}
        //         </Box>
        //     </Box>
        // </Box>);
    );
};
export default CourseCardItem;
