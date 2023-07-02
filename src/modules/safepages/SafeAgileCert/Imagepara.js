import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Image from 'next/image';
import Herosection from 'modules/commanmodules/Herosection';

export default function Imagepara(props) {
    return (
        <div>
            <Herosection
                img={
                    <Image
                        alt='Mountains'
                        src={'/assets/images/Safe/SAFe-Agilist-Logo.png'}
                        height='80%'
                        width='100%'
                        sizes='100vw'
                        // fill
                        // style={{ width: '100%', height: "auto" }}
                        // layout='fill'
                        objectFit='contain'
                    />
                }
                heading=' Leading SAFe® 6.0 / SAFe® 6.0 Agilist Certification'
                list={
                    <List sx={{ bgcolor: 'background.paper' }}>
                        <ListItem>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                            <ListItemText primary=' 2 Days of Classroom Training' />
                        </ListItem>
                        <ListItem>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                            <ListItemText primary='  100% Assured Results' />
                        </ListItem>
                        <ListItem>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                            <ListItemText primary='Trained by experienced SPC 5.0 SAFe Consultant' />
                        </ListItem>
                        <ListItem>
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                            <ListItemText primary='  1 year membership to the SAFe Community Platform' />
                        </ListItem>
                    </List>
                }
                list1={[

                    '2 Days of Classroom Training',
                    '  100% Assured Results',
                    'Trained by experienced SPC 5.0 SAFe Consultant',
                    '  1 year membership to the SAFe Community Platform',
                ]}
            />
        </div>
    );
}
