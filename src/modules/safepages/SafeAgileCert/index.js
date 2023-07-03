import React from 'react';
import Imagepara from './Imagepara';
import Videodemo from './Videodemo';
import CourseTable from './CourseTable';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import Safetest from './Safetest';
import Safeinfo from './Safeinfo.js';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import Safeaccord from './Safeaccord';
import { AppCard } from '@crema';
import Herocontainer from './Herocontainer';
import Whatsappnew from 'modules/commanmodules/Whatsappnew';

export default function SafeAgileCert() {
    return (
        <>
            <Imagepara />
            {/* <Herocontainer /> */}

            <CourseTable />


            <Grid container>
                <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                    <Grid container spacing={{ xs: 4, md: 8 }}>
                        <Grid item xs={12} md={8}>
                            <AppCard
                                sxStyle={{ p: 5 }}
                                className='card-hover'
                            >
                                {/* <Courseinfo /> */}
                                <Safeinfo />
                                <Safeaccord />

                            </AppCard>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Videodemo videoPromo={'sd'} />
                            <Safetest />

                            <RelatedCourses />

                            {/* <SlideBasicTwo /> */}
                        </Grid>
                    </Grid>
                </Container>

            </Grid>
            <Whatsappnew />
        </>
    );
}
