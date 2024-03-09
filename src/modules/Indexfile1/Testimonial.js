import React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import Testi from "modules/commanmodules/Testi";
import { data } from "modules/Constant/mentors.data";
import Heading from "modules/commanmodules/Heading";
import { headList6, headList61 } from "modules/Constant/titlefile";
import Heading1 from "modules/commanmodules/Heading1";
import { motion } from "framer-motion";
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
                bottom: "-28px !important",
                left: "unset !important",
                right: type === "prev" ? "60px !important" : "0 !important",
                zIndex: 10,
                boxShadow: 1,
            }}
            disableRipple
            color="inherit"
            onClick={onClick}
            className={className}
        >
            {/* {type === "next" ? (
                <IconArrowForward sx={{ fontSize: 22 }} />
            ) : (
                <IconArrowBack sx={{ fontSize: 22 }} />
            )} */}
        </IconButton>
    );
};
const StyledDots = styled("ul")(({ theme }) => ({
    "&.slick-dots": {
        position: "absolute",
        left: 0,
        bottom: -20,
        paddingLeft: theme.spacing(1),
        textAlign: "center",
        "& li": {
            marginRight: theme.spacing(2),
            "&.slick-active>div": {
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
}));
const Testimonial = () => {
    const { breakpoints } = useTheme();
    const matchMobileView = useMediaQuery(breakpoints.down("sm"));
    const sliderConfig = {
        infinite: true,
        // autoplay: true,
        speed: 300,
        slidesToShow: matchMobileView ? 1 : 3,
        slidesToScroll: 1,
        prevArrow: <SliderArrow type="prev" />,
        nextArrow: <SliderArrow type="next" />,
        dots: true,
        appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
        customPaging: () => (
            <Box
                sx={{
                    height: 15,
                    width: 15,
                    backgroundColor: "divider",
                    display: "inline-block",
                    borderRadius: 50,
                }}
            />
        ),
    };
    return (
        <Box
            className="section"
            sx={{
                // py: { xs: 7, md: 7 },
                backgroundColor: "#f3f7f9",
            }}
        >
            <Container maxWidth="lg">
                <motion.div

                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}

                    viewport={{ once: true }}

                    transition={{
                        delay: 0.2,
                        x: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        duration: 1
                    }}
                >

                    <Heading1 data={headList61}></Heading1>
                </motion.div>
                {/* <Typography variant="h1" sx={{ fontSize: { xs: 30, md: 35 } }}>
                    What Our Clients Say
                </Typography> */}

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.6,
                        x: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 0.6 },
                        ease: "easeIn",
                        duration: 1
                    }}
                >
                    <Slider {...sliderConfig}>
                        {data.map((item) => (

                            <Testi key={String(item.id)} item={item} />
                        ))}
                    </Slider>
                </motion.div>
            </Container>
        </Box>
    );
};
export default Testimonial;
