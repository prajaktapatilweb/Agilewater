import { Box, Typography } from '@mui/material'
import React from 'react'
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import { useTheme, styled } from "@mui/material/styles";
import { IconButton, useMediaQuery } from "@mui/material";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import Image from 'next/image';
const SliderArrow = (props) => {
    const { onClick, type, className } = props;
    return (

        <IconButton
            sx={{
                backgroundColor: "background.paper",
                color: "primary.main",
                "&:hover": {
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                },
                bottom: { xs: "0px !important", md: "10px !important" },
                left: 10,
                // left: "unset !important",
                right: type === "prev" ? "0px !important" : "0 !important",
                zIndex: 10,
                // boxShadow: 1,
            }}
            disableRipple
            color="inherit"
            onClick={onClick}
            className={className}
        >
            {type === "next" ? (
                <IconArrowForward sx={{ fontSize: 30, color: 'blue' }} />
            ) : (
                <IconArrowBack sx={{ fontSize: 22 }} />
            )}
        </IconButton>
    );
};
const StyledDots = styled("ul")(({ theme }) => ({
    "&.slick-dots": {
        position: "absolute",
        textAlign: "center",
        "& li": {
            marginRight: theme.spacing(5),


            "&.slick-active>div": {

                backgroundColor: theme.palette.primary.main,
            },
        },
    },
}));
const Clients = () => {
    const { breakpoints } = useTheme();
    const matchMobileView = useMediaQuery(breakpoints.down("sm"));
    const matchMobileView1 = useMediaQuery(breakpoints.down("md"));
    const sliderConfig = {
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: matchMobileView ? 1 : matchMobileView1 ? 2 : 6,
        slidesToScroll: 1,
        // prevArrow: <SliderArrow type="prev" />,
        // nextArrow: <SliderArrow type="next" />,
        dots: true,
        appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
        customPaging: () => (
            <Box
                sx={{
                    height: 10,
                    width: 10,
                    backgroundColor: "divider",
                    display: "inline-block",
                    borderRadius: 50,
                }}
            />
        ),
    };



    var details = [
        {
            id: 1,
            imgs: '/assets/images/Clients/1.png',

        },
        {
            id: 2,
            imgs: '/assets/images/Clients/2.png',

        },
        {
            id: 3,
            imgs: '/assets/images/Clients/3.png',

        },
        {
            id: 4,
            imgs: '/assets/images/Clients/4.png',

        },
        {
            id: 5,
            imgs: '/assets/images/Clients/5.png',

        },
        {
            id: 6,
            imgs: '/assets/images/Clients/6.png',

        },
        {
            id: 7,
            imgs: '/assets/images/Clients/7.png',

        },
        {
            id: 8,
            imgs: '/assets/images/Clients/8.png',

        },
        {
            id: 9,
            imgs: '/assets/images/Clients/9.png',

        },
        {
            id: 10,
            imgs: '/assets/images/Clients/10.png',

        },
        {
            id: 11,
            imgs: '/assets/images/Clients/11.png',

        },
        {
            id: 12,
            imgs: '/assets/images/Clients/12.png',

        },
        {
            id: 13,
            imgs: '/assets/images/Clients/13.png',

        },
        {
            id: 14,
            imgs: '/assets/images/Clients/14.png',

        },
        {
            id: 15,
            imgs: '/assets/images/Clients/15.png',

        },
        {
            id: 16,
            imgs: '/assets/images/Clients/16.png',

        },
        {
            id: 17,
            imgs: '/assets/images/Clients/17.png',

        },
    ]

    return (
        <Box className='section'>
            {/* <Container maxWidth="lg"> */}
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>

                    <Typography variant="h7">
                        Our Most Valuable Clients
                    </Typography>

                </Grid>

                <Grid item xs={12} md={12}>
                    <Slider {...sliderConfig}>
                        {details.map((item, i) => (
                            <Box>
                                <Image src={item.imgs} alt="" width={200} height={120} key={i}></Image>
                            </Box>
                        ))}
                    </Slider>
                </Grid>
            </Grid>
            {/* </Container> */}
        </Box>
    );
};
export default Clients;
