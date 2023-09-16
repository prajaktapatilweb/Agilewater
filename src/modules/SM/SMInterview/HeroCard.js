import React from 'react';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import { teal } from '@mui/material/colors';
import AppCard from '@crema/core/AppCard';
import { Fonts } from 'shared/constants/AppEnums';
import { position } from 'stylis';

const HeroCard = () => {
    var details = [
        {
            title: 'MOCK INTERVIEW ON INTERNET',
            numbers: '1',
            info: ' Each of our specialists has over 200 hours of interview experience. They are matched with you depending on your desired level, role, and industry. This tailored pairing allows you to have practically real-life interviews.',
        },
        {
            title: ' GET A VIDEO TAPE OF INTERVIEW',
            numbers: '2',
            info: 'Within 30 minutes after finishing your interview, you will receive a link to a recording of the interview. This will be an invaluable resource for you to see your own responses and expressions. This assists you in self-reflection.',
        },
        {
            title: 'GET ASSESSMENT REPORT',
            numbers: '3',
            info: 'Obtain an Interview Assessment Report to help you enhance your interviewing skills. Within 24 hours of your interview, you will receive a standardized 4-page interview assessment report from your experienced interviewer.',
        },
        {
            title: 'GET FEEDBACK AND GUIDANCE',
            numbers: '4',
            info: 'You will also receive a coaching session from certified Coaches. They will lead you on a reflective journey and assist you in developing an actionable personal development plan.',
        },
        {
            title: ' LEARNING RESOURCES',
            numbers: '5',
            info: ' You will have lifetime access to our carefully designed learning tools, which will assist you in honing various elements of interviews. It aids in the development of interview abilities.',
        },

    ]
    return (
        <Box sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <Typography variant='h7' sx={{ color: "#20509e" }} gutterBottom>Become an expert in corporate job interviews.</Typography><br></br><br></br>
            <Typography variant='p'>Practice, practice, practice until you eventually get numb on rejections. To give yourself the best possible chance of playing to your potential, you must prepare for every eventuality. That means practice. Practice is the hardest part of learning, and training is the essence of transformation.</Typography><br></br><br></br><br></br>
            <Grid container spacing={2}>
                {details.map((item, index) => (
                    <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
                        <AppCard
                            sxStyle={{ height: 1 }}
                            contentStyle={{ padding: 0, display: 'flex', flexDirection: 'column' }}
                        >
                            <Box
                                sx={{
                                    flex: 1,
                                    marginBottom: 8,
                                    textAlign: 'center',
                                    overflow: 'hidden',
                                    py: 5,
                                    px: 6,
                                    color: 'primary.contrastText',
                                    flex: 1,
                                    backgroundColor: teal[500],
                                }}
                            >
                                <Box
                                    sx={{

                                        flex: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'stretch',
                                        flexDirection: 'column',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Box
                                        component='h1'
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: 16,
                                        }}
                                    >
                                        {item.title}

                                        {/* <IntlMessages id='dashboard.heavySnow' /> */}
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    backgroundColor: '#0aa0be',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    color: '#000',
                                    boxShadow: 'inset 0px -10px 8px -8px rgba(0,0,0,.5)',
                                    color: 'primary.contrastText',
                                    flex: 1,
                                    backgroundColor: teal[500],
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '-60px auto 0px auto',
                                    zIndex: 2,
                                    position: 'relative',
                                }}
                            >
                                {item.numbers}
                            </Box>
                            <Box
                                sx={{
                                    py: 5,
                                    px: 6,
                                    display: 'flex',

                                    textAlign: 'start',
                                    alignItems: 'normal'
                                }}
                            >
                                {item.info}
                                {/* {temperatures.map((day) => {
          return <DayTemperature key={day.id} day={day} />;
        })} */}
                            </Box>
                        </AppCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HeroCard;

HeroCard.defaultProps = {
    temperatures: [],
};

HeroCard.propTypes = {
    temperatures: PropTypes.array,
};
