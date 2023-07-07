import React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Fonts } from 'shared/constants/AppEnums';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import { grey } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';




const ListItem = ({ user }) => {
    // const { user } = props;
    // console.log("avc", user)
    return (
        <>
            {/* {user.map((item, i) => ( */}
            <Box sx={{ mb: 8 }} className='item-hover' >
                <Card>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                        }}
                    >
                        <Box
                            sx={{
                                color: 'primary.contrastText',
                                width: { xs: '100%', sm: 200, xl: 256 },
                                p: { xs: 3, lg: 5 },
                                bgcolor: 'primary.main',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Box sx={{ mb: 3 }}>
                                <Avatar src={user.img} sx={{ height: 100, width: 100, }} />
                            </Box>
                            <Box
                                component='h3'
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    width: '100%',
                                    textAlign: 'center',
                                    mb: 3,
                                    fontSize: 16,
                                    fontWeight: Fonts.BOLD,
                                }}
                            >
                                {user.name}

                            </Box>
                            <Box
                                sx={{
                                    p: 5,
                                    flex: 1,
                                }}
                            >

                                <Box
                                    sx={{
                                        mb: { xs: 2, xl: 3 },
                                        color: 'grey.600',
                                        display: 'flex',
                                        flexDirection: { xs: 'column', lg: 'row' },
                                        alignItems: { lg: 'center' },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            mx: -3,
                                            mb: 2,
                                            color: 'text.primary',
                                            pr: { xl: 32 },
                                            display: 'flex',
                                            flex: 1,
                                            fontSize: { xs: 14, xl: 16 },
                                            flexWrap: 'wrap',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                px: 3,
                                                display: 'flex',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <MailIcon />
                                            <Box
                                                sx={{
                                                    ml: 2,
                                                }}
                                            >
                                                {user.email}
                                            </Box>

                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>

                    </Box>
                </Card>
            </Box>
            {/* )) */}
            {/* } */}
        </>
    );
};

export default ListItem;

ListItem.propTypes = {
    user: PropTypes.object.isRequired,
};
