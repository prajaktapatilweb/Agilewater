import React from 'react';
import { Avatar, Box } from '@mui/material';
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

    ]
    return (
        <Box>
            {details.map((item, index) => (
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
                                py: 4,
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                textAlign: 'center',
                            }}
                        >
                            <Box
                                component='h3'
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: 14,
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
                            justifyContent: 'space-between',
                        }}
                    >
                        {item.info}
                        {/* {temperatures.map((day) => {
          return <DayTemperature key={day.id} day={day} />;
        })} */}
                    </Box>
                </AppCard>
            ))}
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
