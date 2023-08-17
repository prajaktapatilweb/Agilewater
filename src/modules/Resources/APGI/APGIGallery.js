import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Container, Grid } from '@mui/material';

export default function APGIGallery() {
    return (
        <Grid container className='section' style={{ background: 'white' }}>
            <Container sx={{ maxWidth: { xl: 1400 } }}>
                <h1 style={{ textAlign: 'center', color: '#20509e' }}>Glimpse of Previous Conferences</h1>
                <br></br>
                <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading='lazy'
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

            </Container>
        </Grid>
    );
}

const itemData = [
    {
        img: '/assets/images/slick-slider/img1.webp',
        title: 'Breakfast',
    },
    {
        img: '/assets/images/slick-slider/img2.webp',
        title: 'Burger',
    },
    {
        img: '/assets/images/slick-slider/img3.webp',
        title: 'Camera',
    },
    {
        img: '/assets/images/slick-slider/img4.webp',
        title: 'Coffee',
    },
    {
        img: '/assets/images/slick-slider/img5.jpeg',
        title: 'Hats',
    },
    {
        img: '/assets/images/slick-slider/img1.webp',
        title: 'Breakfast',
    },
    {
        img: '/assets/images/slick-slider/img2.webp',
        title: 'Burger',
    },
    {
        img: '/assets/images/slick-slider/img3.webp',
        title: 'Camera',
    },
    {
        img: '/assets/images/slick-slider/img4.webp',
        title: 'Coffee',
    },
    {
        img: '/assets/images/slick-slider/img5.jpeg',
        title: 'Hats',
    },
    {
        img: '/assets/images/slick-slider/img1.webp',
        title: 'Breakfast',
    },
    {
        img: '/assets/images/slick-slider/img2.webp',
        title: 'Burger',
    },
];