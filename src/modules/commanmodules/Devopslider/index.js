import React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import { useTheme, styled } from "@mui/material/styles";
import { IconButton, useMediaQuery } from "@mui/material";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import CourseCardItem from "./CourseCardItem";
import { agiledata, devopsdata, podata, safedata } from "modules/Constant/CourseSliderdata";

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

        left: 0,

        bottom: -50,


        // paddingLeft: theme.spacing(3),
        // textAlign:'left',
        textAlign: "center",
        "& li": {
            marginRight: theme.spacing(1),


            "&.slick-active>div": {

                backgroundColor: theme.palette.primary.main,
            },
        },
    },
}));
const Devopslider = () => {
    const { breakpoints } = useTheme();
    const matchMobileView = useMediaQuery(breakpoints.down("sm"));
    const matchMobileView1 = useMediaQuery(breakpoints.down("md"));
    const sliderConfig = {
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: matchMobileView ? 1 : matchMobileView1 ? 2 : 2,
        slidesToScroll: 1,
        // prevArrow: <SliderArrow type="prev" />,
        // nextArrow: <SliderArrow type="next" />,
        dots: true,
        appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
        customPaging: () => (
            <Box
                sx={{
                    height: 15,
                    width: 15,
                    backgroundColor: "divider",
                    display: "inline-block",
                    borderRadius: '50%',
                }}
            />
        ),
    };
    return (
        <Box>

            <Slider {...sliderConfig}>
                {devopsdata.map((item) => (
                    <CourseCardItem key={String(item.id)} item={item} />
                ))}
            </Slider>

        </Box>
    );
};
export default Devopslider;
