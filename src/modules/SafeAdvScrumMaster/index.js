import React from 'react'
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import HeroSasm from './HeroSasm';
import Safeadvinfo from './Safeadvinfo';
import { AppCard } from '@crema';
import MainSafeadvaccord from './MainSafeadvaccord';
import Videodemo from 'modules/SafeAgileCert/Videodemo';
import Safetest from 'modules/SafeAgileCert/Safetest';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import Innerlink from 'modules/commanmodules/Innerlink';
import { courseList2 } from 'modules/Constant/Relatecoursedata';


export default function index() {
    return (
        <div>
            <HeroSasm />
            <Innerlink />

            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard sxStyle={{ p: 5 }}>
                            <Safeadvinfo />
                            <MainSafeadvaccord />

                        </AppCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Videodemo videoPromo={'sd'} />
                        <Safetest />
                        <RelatedCourses data={courseList2} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
