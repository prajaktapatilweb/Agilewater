import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import { useTheme, styled } from "@mui/material/styles";
import { IconButton, useMediaQuery } from "@mui/material";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import TeamMember from "./TeamMember";
import { useDispatch } from 'react-redux'
import { onGetCoachList } from 'redux/actions'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

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
        bottom: 10,


        // paddingLeft: theme.spacing(3),
        // textAlign:'left',
        textAlign: "center",
        "& li": {
            marginRight: theme.spacing(5),


            "&.slick-active>div": {

                backgroundColor: theme.palette.primary.main,
            },
        },
    },
}));
const TeamSlider = () => {
    const { breakpoints } = useTheme();
    const matchMobileView = useMediaQuery(breakpoints.down("sm"));
    const matchMobileView1 = useMediaQuery(breakpoints.down("md"));
    const sliderConfig = {
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: matchMobileView ? 1 : matchMobileView1 ? 2 : 3,
        slidesToScroll: 1,
        // prevArrow: <SliderArrow type="prev" />,
        // nextArrow: <SliderArrow type="next" />,
        dots: true,
        appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
        customPaging: () => (
            <Box
                sx={{
                    height: 10,
                    width: 30,

                    backgroundColor: "divider",
                    display: "inline-block",
                    borderRadius: 10,
                }}
            />
        ),
    };



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(onGetCoachList())
    }, [dispatch]);

    const CoachList = useSelector((state) => state?.Coach?.Coachlist);
    const AgileCoachList = CoachList?.filter(item => item.Expertise.includes("Agile Coach"));
    console.log('ghdsfgh', AgileCoachList);


    var details = [
        {
            id: 1,
            img: '/assets/images/courselogo/FreeImg.png',
            nm: 'vijay',
            info: 'ufdyh h uyh hrtiygu hrityu rtiyu',
            post: 'gfh h hj'
        },
        {
            id: 2,
            img: '/assets/images/courselogo/FreeImg.png',
            nm: 'Hema',
            info: 'ufdyh h uyh hrtiygu hrityu rtiyu',
            post: 'gfh h hj'
        },
        {
            id: 3,
            img: '/assets/images/courselogo/FreeImg.png',
            nm: 'Vijji',
            info: 'ufdyh h uyh hrtiygu hrityu rtiyu',
            post: 'gfh h hj'
        },
        {
            id: 4,
            img: '/assets/images/courselogo/FreeImg.png',
            nm: 'Vij',
            info: 'ufdyh h uyh hrtiygu hrityu rtiyu',
            post: 'gfh h hj'
        },
        {
            id: 5,
            img: '/assets/images/courselogo/FreeImg.png',
            nm: 'Vijji',
            info: 'ufdyh h uyh hrtiygu hrityu rtiyu',
            post: 'gfh h hj'
        },
        {
            id: 6,
            img: '/assets/images/courselogo/FreeImg.png',
            nm: 'Viji',
            info: 'ufdyh gfgtf h uyh hrtiygu hrityu rtiyu',
            post: 'gfh h hj'
        }
    ]

    return (
        <Box
            id="treatments"
            sx={{
                p: { xs: 7, md: 7 },
                // backgroundColor: "#f1efeb",
                borderRadius: 7
            }}
        >
            {/* <Container maxWidth="lg"> */}
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>

                    <Typography variant="h7">
                        Our Team
                    </Typography>

                </Grid>
                {/* {AgileCoachList && (
                    <Grid item xs={12} md={12}>
                        <Slider {...sliderConfig}>
                            <Box
                                data={AgileCoachList}
                                renderRow={(coach, id) => (

                                    <TeamMember coach={coach} key={id} />

                                )} */}

                {/* // details.map((coach, id) => (
                            //     <TeamMember coach={coach} key={id} />
                            //     // <TeamMember key={(item.id)} item={item} ></TeamMember>
                            //     // <CourseCardItem key={String(item.id)} item={item} />
                            // ))
                            />
                        </Slider>
                    </Grid> */}

                {/* // <AppGrid
                    //     responsive={{ xs: 1, sm: 2, md: 3, lg: 2, xl: 3 }}
                    //     data={CoachList} */}

                {/* //     renderRow={(coach, id) => ( */}

                {/* //         <CoachDetailData coach={coach} key={id} /> */}

                {/* //     )}
                    // />
                )} */}
                <Grid item xs={12} md={12}>
                    <Slider {...sliderConfig}>
                        {CoachList?.map((item) => (
                            // <pre>{JSON.stringify(item, null, 2)}</pre>

                            <TeamMember key={(item.id)} item={item} ></TeamMember>
                            // <CourseCardItem key={String(item.id)} item={item} />
                        ))}
                    </Slider>
                </Grid>
            </Grid>
            {/* </Container> */}
        </Box>
    );
};
export default TeamSlider;
