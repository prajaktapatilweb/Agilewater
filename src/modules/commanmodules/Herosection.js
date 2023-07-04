import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { AppBar, Box, Card, Container } from '@mui/material';
import { Fonts } from 'shared/constants/AppEnums';

export default function Herosection(props) {
    return (
        <div>
            {/* <Grid className="section section-lg section-shaped " style={{ backgroundImage: "linear-gradient(90deg, #05445e 35%, #189ab4 90%)", position: "relative" }}> */}
            <Grid className="section section-lg section-shaped">
                <div className="shape shape-style-u1 shape-dark">
                    <span className="span-150" />
                    <span className="span-50" />
                    <span className="span-50" />
                    <span className="span-75" />
                    <span className="span-200" />
                    <span className="span-75" />
                    <span className="span-50" />
                    <span className="span-100" />
                    <span className="span-50" />
                    <span className="span-100" />
                </div>
                <Container sx={{ maxWidth: { xl: 1400 } }}>
                    <Grid container spacing={7} alignItems='center' sx={{ position: "relative", zIndex: 1 }} mt={{ xs: 5, md: 0 }}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ border: "2px solid white", background: "white" }}>
                                {props.img}
                            </Box>

                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={8}
                            alignItems='center'
                            justifyContent='center'

                        >
                            <Box
                                component='h1'
                                sx={{
                                    mb: 4,
                                    fontWeight: Fonts.BOLD,
                                    color: "wheat"
                                    // fontSize: 16,
                                }}
                            >
                                {props.heading}
                            </Box>

                            <Box component='p' sx={{ mb: 5 }}>
                                <List sx={{ color: "white" }}>
                                    {props.list1.map((item) => (
                                        <ListItem>
                                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                                            <ListItemText primary={item} primaryTypographyProps={{ fontSize: '18px' }} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew zindex-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                    </svg>
                </div>
            </Grid>
        </div>
    );
}
