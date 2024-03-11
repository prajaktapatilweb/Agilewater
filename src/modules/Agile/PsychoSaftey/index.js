import React from 'react';
import { Box, Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import DetailBlogPage from './DetailBlogPage';
import Psychoinfo from './Psychoinfo';
import { AppCard } from '@crema';
import Discussion from 'modules/Discussion';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import { Fonts } from 'shared/constants/AppEnums';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import VideoMain from 'modules/commanmodules/VideoMain';


export default function PsychoSaftey() {
  var list1 = {
    abc: [
      'Understanding psychological safety as a concept',
      'Learning how to use the 4 stages of psychological safety framework',
      'Aligning their team with common language, understanding, and conceptual framework',
      'Developing an action plan and next steps for each stage',

    ]
  }
  return (
    <div>
      <Grid
        className='section section-lg section-shaped'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div className='shape shape-style-u1 shape-dark'>
          <span className='span-150' />
          <span className='span-50' />
          <span className='span-50' />
          <span className='span-75' />
          <span className='span-200' />
          <span className='span-75' />
          <span className='span-50' />
          <span className='span-100' />
          <span className='span-50' />
          <span className='span-100' />
        </div>
        <Container sx={{ maxWidth: { xl: 1400 } }}>
          <Grid
            container
            spacing={1}
            sx={{ position: 'relative', zIndex: 1 }}
            alignItems='center'
            justifyContent='center'
          >
            <Grid item xs={12} sm={12} md={8}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    // justifyContent: 'center',
                  }}
                >


                  <Typography
                    variant='h1'
                    mx={{ xs: 1, md: 1, lg: 1, xl: 3 }}
                    fontSize={{ md: 20, lg: 24, xl: 28 }}
                    sx={{
                      fontWeight: Fonts.BOLD,
                      color: 'wheat',
                    }}
                  >
                    Psychological Safety - The Foundation for Team Performance
                  </Typography>
                </Box>

                <List sx={{ color: 'white', mt: 3, pl: 3 }}>
                  {list1.abc.map((item, i) => (
                    <ListItem key={i} alignItems='flex-start'>
                      <KeyboardDoubleArrowRightIcon
                        sx={{ fontSize: 18, mr: 3 }}
                      ></KeyboardDoubleArrowRightIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ fontSize: '18px', mt: -2 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box sx={{ p: { xs: 3, sm: 15, md: 0 } }}>
                <VideoMain
                  links="https://youtu.be/OjtfrF_F0jU"
                  videoPromo={'sd'}
                ></VideoMain>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 2 }}>
              <Psychoinfo />
            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <Atscaledownload />
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>

      {/* <DetailBlogPage></DetailBlogPage> */}
    </div>
  );
}
