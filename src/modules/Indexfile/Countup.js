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
                    <Card sx={{ px: 6, py: 8, marginTop: -20, zIndex: 1, position: 'relative', borderRadius: 2, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                        <Heading data={headList7}></Heading>
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
                                            background: '#3c3fca',

                                            // background: "#127c71",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "white",
                                                mb: { xs: 1, md: 2 },
                                                fontSize: { xs: 30, md: 35 },
                                                fontWeight: "bold",
                                            }}
                                        >
                                            <CountUp end={item.numbers} duration={5} start={200} />+
                                        </Typography>
                                        <Typography color="white" variant="h5">
                                            {item.title}
                                        </Typography>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Card>
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
