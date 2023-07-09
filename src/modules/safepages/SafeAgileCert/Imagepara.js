import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Herosection from 'modules/commanmodules/Herosection';

export default function Imagepara() {
    return (
        <div>
            <Herosection
                img='/assets/images/Safe/SAFe-Agilist-Logo.png'

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
