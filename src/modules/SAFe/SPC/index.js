import { AppCard } from '@crema';
import { Container, Grid } from '@mui/material';
import { testList1 } from 'modules/Constant/OthershortConst';
import { courseList2 } from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import Testcard from 'modules/commanmodules/TestCard';
import React from 'react';
import Spcinfo from './Spcinfo';
import SpcAccord from './SpcAccord';
import LabTabs from 'modules/commanmodules/LabTabs';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';


export default function SPC() {
    return (
        <div>
            <Herosectiondemo
                image1='/assets/images/courselogo/safelogo/SPC.webp'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='SAFe Program Consultant Certification (SPC) 6.0'
                list1={[
                    '4 Days of Classroom Training',
                    'Trained by experienced SPCT',
                    '100% Assured Results',
                    '1 year membership to the SAFe Community Platform',
                    'Insightful Study Material',
                ]}
                videosrc='https://www.youtube.com/watch?v=-M-R3Lc-V74'
            />


            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    <Grid item xs={12} md={8}>
                        <AppCard>
                            <LabTabs data={[
                                { label: 'Overview', panelData: <Spcinfo /> },
                                { label: 'FAQ', panelData: <SpcAccord /> },
                                { label: 'Testimonials', panelData: 'Item ewe' },
                                { label: 'FreeCourses', panelData: 'Item ewe' }
                            ]} />

                        </AppCard>
                        <Discussion></Discussion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Testcard data={testList1} />
                        <RelatedCourses data={courseList2} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
