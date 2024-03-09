import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const primary = {
  50: '#FFF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#20509e',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#000000',
  800: '#F0F0F0',
  900: 'linear-gradient(to right,	rgba(62,43,206,1) 30%, rgba(45,211,170,1) 100%, rgba(45,211,170,0.9) 100%, rgba(45,211,170,0.8) 100%)',

};

const Tab = styled(TabUnstyled)`
color: ${primary[700]};
cursor: pointer;
font-size: 1rem;
background: ${primary[800]};
padding: 15px 20px;
border: none;
display: flex;

  
  &.Mui-selected {
    color: ${primary[50]};
    font-weight: bold;
   
    background: ${primary[900]};
   
   
  }

  &:hover {
    color: #fff;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: ${primary[600]};
    border-bottom: 2px solid ${primary[600]};
  }

  &.${tabUnstyledClasses.selected} {
   
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
    background-color: ${primary[600]};
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
`;

const TabsList = styled(TabsListUnstyled)`


  display: flex;

  align-content: space-between;
`;




export default function UnstyledTab({ data }) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log('value', value)
    setValue(newValue);
  };
  return (

    <TabsUnstyled value={value}>
      <TabsList

        value={value}
        // onChange={handleChange}
        // onChange={() => (console.log('value', value),
        //   setValue(value))}

        sx={{
          textTransform: 'capitalize',

          // fontSize: { sm: 16, md: 16, lg: 18 },
          mb: 7,

          // backgroundImage:
          //     'linear-gradient(to right,	rgba(62,43,206,1) 30%, rgba(45,211,170,1) 100%, rgba(45,211,170,0.9) 100%, rgba(45,211,170,0.8) 100%)',

        }}
        variant='scrollable'
        scrollButtons='auto'
        aria-label='scrollable auto tabs example'
      >
        {data.map((item, i) => (
          <Tab
            key={i}
            label={item.label}
            value={i}
            onChange={handleChange}

            sx={{
              textTransform: 'capitalize',
              // fontSize: { sm: 16, md: 16, lg: 18 },
              // backgroundColor: 'transparent'
            }}

          >
            {item.label}
          </Tab>
        ))}

        {/* // <Tab>One</Tab> */}

      </TabsList>
      <TabPanel value={value}>{data[value]?.panelData}
      </TabPanel>
      {/* <TabPanel value={1}>Second content</TabPanel> */}
      {/* <TabPanel value={2}>Third content</TabPanel> */}
    </TabsUnstyled>

  );
}
