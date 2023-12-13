import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Card, Container, Typography } from "@mui/material";
import CountUp from "react-countup";
import Heading from "modules/commanmodules/Heading";
import { headList7 } from "modules/Constant/titlefile";

export default function Countup() {

    var Details = [
        {
            numbers: "10600",
            title: "Students",
        },
        {
            numbers: "18",
            title: "Trainers",
        },

        {

            numbers: "26",
            title: "Countries",
        },
        {

            numbers: "400",
            title: "Workshops",
        },
        {

            numbers: "11",
            title: "Agile Coaches",
        },
        {

            numbers: "4.7",
            title: "Ratings",
        },

    ];

    return (
        <div>
            <Box id="feature" sx={{}} >
                <Container>
                    {/* <Card sx={{
                        px: 6, py: 8, marginTop: -20, zIndex: 1, position: 'relative', borderRadius: 2, boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                    }}> */}
                    {/* <Heading data={headList7}></Heading> */}
                    <Grid
                        container
                        spacing={2}
                        sx={{ flexDirection: { xs: "column", md: "unset" } }}
                    >
                        {Details.map((item, i) => (
                            <Grid item xs={12} sm={12} md={2} key={i}>
                                <Card
                                    sx={{
                                        textAlign: "center",
                                        px: 5, py: 5, marginTop: -18, zIndex: 1, position: 'relative',
                                        mb: { xs: 1, md: 0 },
                                        // padding: 3,
                                        borderRadius: 5,
                                        background: 'white',
                                        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.6) 0px -2px 6px 0px inset',
                                        // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                        // background: '#eeeeff'
                                        // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
                                        // background: '#3c3fca',

                                        // background: "#127c71",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            // color: "white",
                                            mb: { xs: 1, md: 2 },
                                            fontSize: { xs: 30, md: 35 },
                                            fontWeight: "bold",
                                        }}
                                        className="paras"
                                    >
                                        <CountUp end={item.numbers} duration={5} start={200} />+
                                    </Typography>
                                    <Typography variant="h5" className="paras">
                                        {item.title}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {/* </Card> */}
                </Container>
            </Box>

            {/* <AppGridContainer sx={{ background: 'white' }}> */}
            {/* <Box
                sx={{
                    py: { xs: 6, md: 6 },
                    backgroundColor: "#f1efeb",
                }}
            > */}
            {/* <Container maxWidth="lg" sx={{ background: 'white', p: 7 }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: 30, md: 35 },
                        pb: 3,
                        textAlign: 'center'
                    }}
                    gutterBottom
                >
                    Our Sucess In Numbers
                </Typography>

                <Grid
                    container
                    spacing={2}
                    sx={{ flexDirection: { xs: "column", md: "unset" } }}
                >
                    {Details.map((item, i) => (
                        <Grid item xs={12} sm={12} md={2} key={i}>
                            <Card
                                sx={{
                                    textAlign: "center",
                                    mb: { xs: 1, md: 0 },
                                    padding: 3,
                                    borderRadius: 5,
                                    // background: '#101112'
                                    // background: "#127c71",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "secondary.main",
                                        mb: { xs: 1, md: 2 },
                                        fontSize: { xs: 34, md: 44 },
                                        fontWeight: "bold",
                                    }}
                                >
                                    <CountUp end={item.numbers} duration={5} start={200} />+
                                </Typography>
                                <Typography color="black" variant="h5">
                                    {item.title}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container> */}
            {/* </AppGridContainer> */}
            {/* </Box> */}
        </div>
    );
}
