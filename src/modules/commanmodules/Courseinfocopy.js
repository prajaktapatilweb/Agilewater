import React from 'react';
import { Box, Link } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

export default function CourseinfoCopy({ DetailObject }) {
    // console.log('first', DetailObject)
    return (
        <>
            <Box>
                {DetailObject.map((item, i) =>
                    <>
                        {(() => {
                            switch (item.type) {
                                case 'title':
                                    return (
                                        <Typography variant='h2' sx={{ color: "#20509e", py: 2 }}>{item.text} </Typography>
                                    );
                                case 'para':
                                    return (
                                        item?.link?.bool ?
                                            item.text.map((item2, ii) => (
                                                ii === item.link.elemNo ?
                                                    <Typography variant='body1' display='inline' gutterBottom>
                                                        <Link href={item?.link?.link}>{item2}</Link>
                                                    </Typography>
                                                    : <Typography variant='body1' display='inline'> {item2} </Typography>))
                                            : item.text.map((item2, ii) => (
                                                <Typography variant='body1' gutterBottom textAlign='justify'>{item2} </Typography>))
                                    );
                                case 'items':
                                    return (
                                        item?.link?.bool ?
                                            <ListItem alignItems='flex-start'> <KeyboardDoubleArrowRightIcon />
                                                <ListItemText>
                                                    {item.text.map((item2, ii) => (
                                                        ii === item.link.elemNo ?
                                                            <Link href={item?.link?.link} sx={{ textDecoration: 'none' }}> {item2}</Link >
                                                            : <> {item2}</>
                                                    ))}
                                                </ListItemText>
                                            </ListItem>
                                            :
                                            item.text.map((item2, ii) => (
                                                <ListItem alignItems='flex-start'> <KeyboardDoubleArrowRightIcon />
                                                    <ListItemText>
                                                        {item2}
                                                    </ListItemText>
                                                </ListItem>
                                            ))
                                    );
                                default:
                                    return null;
                            }
                        })()}

                    </>
                    // item.type === 'title' ?
                    //     <Typography variant='h2' sx={{ color: "#20509e" }} gutterBottom>{item.text} </Typography>
                    //     : item.type === 'para' ? item?.link?.bool ?
                    //         item.text.map((item2, ii) => (
                    //             ii === item.link.elemNo ? <Typography variant='body1' display='inline' gutterBottom>
                    //                 <Link href={item?.link?.link}>{item2}</Link> </Typography> :
                    //                 <Typography variant='body1' display='inline' gutterBottom>{item2} </Typography>)) :
                    //         item.text.map((item2, ii) => (
                    //             <Typography variant='body1' gutterBottom>{item2} </Typography>)) :
                    //         item.type === 'items' ?
                    //             item.text.map((item2, ii) => (
                    //                 <ListItem> <KeyboardDoubleArrowRightIcon />
                    //                     <ListItemText>
                    //                         {item2}
                    //                     </ListItemText>
                    //                 </ListItem>
                    //             ))
                    //             : null


                )}

            </Box >
        </>
    );
}
