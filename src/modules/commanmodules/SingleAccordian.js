import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SingleAccordian({ DetailObject }) {

    return (
        <Accordion sx={{ border: '1px solid lightgrey' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{DetailObject[0].heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {DetailObject[0].comp}
            </AccordionDetails>
        </Accordion>
    )
}
