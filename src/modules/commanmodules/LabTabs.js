import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Tabs } from '@mui/material';

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
        </Box>
        <TabPanel value={value}>{data[value]?.panelData}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
