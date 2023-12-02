import Herosection from 'modules/commanmodules/Herosection';
import React from 'react';
import CertScruminfo from './CertScruminfo';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AppCard } from '@crema';
import PricingCard from 'modules/commanmodules/PricingCard';
import MainCertScrumaccord from './MainCertScrumaccord';
import VideoMain from 'modules/commanmodules/VideoMain';
import SideCard from 'modules/SM/ScrumMasterCert/SideCard';
import { sideList1 } from 'modules/Constant/OtherCardsConst';
import Safetest from 'modules/SAFe/SafeAgileCert/Safetest';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Testcard from 'modules/commanmodules/TestCard';
import { testList2 } from 'modules/Constant/OthershortConst';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';
import LabTabs from 'modules/commanmodules/LabTabs';
import CertScrumaccord from './CertScrumaccord';

export default function CertScrumMaster() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/CSM4.png'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='ScrumMaster® (CSM®) Certification Training'
        list1={[
          'Gain a high degree of proficiency in executing Scrum',
          'Skills that make an individual immune to internal and external distractions',
          'More job opportunities in IT as well as non-IT organizations.',
          '100% Assured Results',
        ]}
      />
      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 5 }}>
              Course Table Here
            </AppCard>
            <AppCard sxStyle={{ p: 5 }}>

              <LabTabs data={[
                { label: 'Overview', panelData: <CertScruminfo /> },
                { label: 'FAQ', panelData: <CertScrumaccord /> },
                { label: 'ScrumQuiz', panelData: 'Item ewe' },
                { label: 'FreeCourses', panelData: 'Item ewe' }
              ]} />

            </AppCard>

            <PricingCard
              heading='CSM Certification Training'
              img='/assets/images/Safe/Scrum-Master-Certification-Pune.webp'
            ></PricingCard>

            <Discussion></Discussion>



            <RelatedCourses data={safeadvList} />
          </Grid>
          <Grid item xs={12} md={4}>
            <VideoMain
              links='https://www.youtube.com/watch?v=rB9dlx8V480&t=2s'
              videoPromo={'sd'}
            />
            <br></br>
            <SideCard data={sideList1} />
            <Testcard data={testList2} />
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <br></br>
            <Atscaledownload />


          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
