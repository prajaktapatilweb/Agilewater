import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { AppBar, Box, Container } from '@mui/material';
import { Fonts } from 'shared/constants/AppEnums';
import Image from 'next/image';

export default function Herosection(props) {
    return (
        <div>
            <Grid
                container
                sx={{
                    backgroundColor: (theme) => theme.palette.primary.light,
                }}
            >
                <Container sx={{ maxWidth: { xl: 1400 } }}>
                    <Grid container spacing={3} alignItems='center'>
                        <Grid item xs={12} md={4} sx={{ position: 'relative' }}>

                            {props.img}
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
                                    // fontSize: 16,
                                }}
                            >
                                {props.heading}
                            </Box>

                            <Box component='p' sx={{ mb: 5 }}>

                                <List sx={{ bgcolor: 'background.paper' }}>
                                    {props.list1.map(item => (
                                        <ListItem>
                                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                                            <ListItemText primary={item} />
                                        </ListItem>))}

                                </List>


                            </Box>


                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </div>
    );
}
