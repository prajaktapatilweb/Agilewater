import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Hero from 'modules/Indexfile/Hero';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const data = [{ image: 'ss', title: 'dddd', category: 'iitl' }]
    const tabData = [{ category: 'IITL' }, { category: 'Scrum' }, { category: 'Six Sigma' }, { category: 'MSP' }, { category: 'Negotiation' }, { category: 'Risk Management' }]

    return (
        <Box sx={{ bgcolor: 'background.paper', borderRadius: 5, mb: 7 }}>
            <AppBar position='static'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor='secondary'
                    textColor='inherit'
                    variant='fullWidth'
                    aria-label='full width tabs example'

                >
                    {tabData.map((item, i) =>
                        <Tab label={item.category} {...a11yProps(1)} sx={{ fontSize: 16 }} key={i} />
                    )}
                    {/* <Tab label='SAFe' {...a11yProps(0)} sx={{ fontSize: 16 }} />
                    <Tab label='Scrum' {...a11yProps(1)} sx={{ fontSize: 16 }} />
                    <Tab label='Agile' {...a11yProps(2)} sx={{ fontSize: 16 }} /> */}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >

                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Hero filterData={data.filter(item => item.category === value)} />
                    {/* Item One */}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Hero />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Hero />
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}