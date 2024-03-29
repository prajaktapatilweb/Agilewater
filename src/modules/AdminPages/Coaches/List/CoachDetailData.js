import React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import Button from '@mui/material/Button';
import {Fonts} from 'shared/constants/AppEnums';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import SendIcon from '@mui/icons-material/Send';
import {blue} from '@mui/material/colors';
import Link from 'next/link';

export default function CoachDetailData({coach}) {
  console.log('coach', coach);
  return (
    <Card sx={{width: '100%'}} className='cards'>
      <div className='lines'></div>
      {coach && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'column'},
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Box
            sx={{
              color: 'primary.contrastText',
              p: 5,
              bgcolor: '#847266',
              m: 1,
              borderTopLeftRadius: 3,

              background:
                'linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)',
              // bgcolor: 'primary.main',
              flexDirection: {xs: 'column', sm: 'column'},
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
            }}
          >
            <div className='imgbox'>
              <div className='content'>
                <Avatar
                  src={coach.Avatar}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    transition: 0.5,
                  }}
                />
              </div>
            </div>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 5,
              }}
            >
              <Link
                href={`/team/${coach.CoachName.split('#')[0]}`.replace(
                  / /g,
                  '-',
                )}
              >
                <Button
                  variant='contained'
                  endIcon={<SendIcon />}
                  sx={{background: 'white', color: '#2050ab'}}
                >
                  Contact
                </Button>
                {/* {row.Trainer.split('#')[1] || row.Trainer.split('#')[0]} */}
              </Link>
            </Box>
          </Box>

          <Box sx={{p: 4}}>
            <Box sx={{color: 'grey.600'}}>
              <Box
                sx={{
                  mx: -3,
                  mb: 2,
                  color: 'text.primary',
                  display: 'flex',
                  fontSize: {xs: 14, xl: 16},
                  // flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  variant='h1'
                  sx={{
                    px: 3,
                    display: 'flex',
                    cursor: 'pointer',
                    color: '#20509e',
                    fontWeight: Fonts.BOLD,
                    zIndex: 1,
                  }}
                >
                  {coach.CoachName}
                </Box>

                <Box
                  sx={{
                    px: 3,
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    zIndex: 1,
                  }}
                >
                  <LocationOnTwoToneIcon></LocationOnTwoToneIcon>
                  {/* <LanguageIcon /> */}

                  {coach.Country}
                </Box>
              </Box>
            </Box>

            <Box sx={{display: 'flex'}}>
              <Box
                sx={{
                  color: 'grey.700',
                  mb: 4,
                  zIndex: 1,
                  // fontSize: 14,
                  // fontWeight: Fonts.LIGHT,
                }}
              >
                {coach?.Expertise?.length > 1
                  ? coach?.Expertise?.map((item12) => `${item12}, `)
                  : coach?.Expertise}
                <br /> <b>Experience : </b>
                {coach.Experience}
                {/* {user.info1} */}
              </Box>
            </Box>
            <Box sx={{display: 'flex'}}>
              <Box
                sx={{
                  color: '#e31a15',
                  zIndex: 1,
                }}
              >
                Coach Specializations :
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  color: 'grey.700',
                }}
              >
                {/* {user.info2} */}
                <span>
                  <List>
                    {coach.Specialization.map((item, i) => (
                      <ListItem
                        key={i}
                        sx={{
                          m: 0,
                          padding: 0,
                        }}
                      >
                        <StarIcon fontSize='1px' sx={{mr: 2}}></StarIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </span>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Card>
  );
}
CoachDetailData.propTypes = {
  coach: PropTypes.object,
};
