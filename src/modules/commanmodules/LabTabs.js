import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Card, Tabs } from '@mui/material';
import { AppCard } from '@crema';

export default function LabTabs({ data }) {
  console.log(data)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box>
          {/* <Box sx={{ borderBottom: 2, borderColor: 'divider' }}> */}
          {/* <Box sx={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}> */}
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            {data.map((item, i) => (
              <Tab
                key={i}
                label={item.label}
                value={i}

                sx={{ textTransform: 'capitalize', fontSize: 16 }}
              />
            ))}
          </Tabs>
          {/* </Box> */}
        </Box>
        <TabPanel value={value}>{data[value]?.panelData}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
