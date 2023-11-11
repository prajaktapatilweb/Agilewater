import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            variant='scrollable'
            scrollButtons
            aria-label='lab API tabs example'
          >
            <Tab
              label='Scrum'
              value='1'
              sx={{ border: '1px solid red', borderRadius: '50%', color: 'red' }}
            />
            <Tab
              label='2'
              value='2'
              disabled={false}
              sx={{ border: '1px solid red', borderRadius: '50%', color: 'red' }}
            />
            <Tab label='3' value='3' disabled />
            <Tab label='4' value='3' />
            <Tab label='5' value='3' />
            <Tab label='6' value='3' />
            <Tab label='7' value='3' />
            <Tab label='8' value='3' />
            <Tab label='9' value='3' />
            <Tab label='10' value='3' />
            <Tab label='11' value='3' />
            <Tab label='12' value='3' />
            <Tab label='13' value='3' />
            <Tab label='14' value='3' />
            <Tab label='15' value='3' />
            <Tab label='16' value='3' />
            <Tab label='17' value='3' />
            <Tab label='18' value='3' />
            <Tab label='19' value='3' />
            <Tab label='20' value='3' />
          </TabList>
        </Box>
        <TabPanel value='1'>Item One</TabPanel>
        <TabPanel value='2'>Item Two</TabPanel>
        <TabPanel value='3'>Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
