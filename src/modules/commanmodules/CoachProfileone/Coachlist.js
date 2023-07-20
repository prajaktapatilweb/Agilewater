import React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { Fonts } from '../../../shared/constants/AppEnums';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

const Coachlist = ({ user }) => {
  return (

    <Box className="containers">
      {user && <Box sx={{ width: "100%" }}>
        <div className="cardes" style={{ width: "100%" }}>
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <Box>
                  <Avatar
                    src={user.img}
                    aria-hidden="true"
                    // classNameName='fa fa-linkedin-square'
                    sx={{
                      // height: 95,
                      // width: 95,
                      height: 100,
                      width: 100,
                    }}
                  />
                </Box>
                {/* <i className="fa fa-linkedin-square" aria-hidden="true"></i> */}
              </div>
            </div>
          </div>

          <div className="face face2">
            <div className="content">
              <h3>
                <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
              </h3>
              <p>This is where I network and build my professional protfolio.</p>
            </div>
          </div>

        </div>
      </Box>

      }
    </Box>







    // <Card sx={{ display: 'flex', width: '100%', mx: { xs: 4, sm: 2, md: 0 } }}>
    //   {user && <Box

    //     sx={{
    //       display: 'flex',
    //       flexDirection: { xs: 'column', sm: 'row' },
    //       justifyContent: 'space-between',
    //       width: '100%'
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         color: 'primary.contrastText',
    //         width: { xs: '100%', sm: 200, xl: 200 },
    //         p: { xs: 3, lg: 3 },
    //         bgcolor: 'primary.main',
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //       }}
    //     >
    //       <Box sx={{ mb: 3 }}>
    //         <Avatar
    //           src={user.img}
    //           sx={{
    //             height: 85,
    //             width: 85,
    //             // height: 100,
    //             // width: 100,
    //           }}
    //         />
    //       </Box>

    //       <Button
    //         variant='contained'
    //         sx={{
    //           backgroundColor: (theme) =>
    //             theme.palette.primary.contrastText,
    //           color: 'grey.500',
    //           marginTop: 2,
    //           border: '1px solid',
    //           borderColor: 'grey.500',
    //           width: 96,
    //           fontWeight: Fonts.MEDIUM,
    //           padding: '9px 12px',
    //           lineHeight: 1,
    //         }}

    //       >
    //         Contact
    //       </Button>

    //     </Box>

    //     <Box
    //       sx={{
    //         p: 4,
    //         flex: 1,
    //       }}
    //     >
    //       <Box
    //         sx={{
    //           mb: { xs: 2, xl: 3 },
    //           color: 'grey.600',
    //           display: 'flex',
    //           flexDirection: { xs: 'column', lg: 'row' },
    //           alignItems: { lg: 'center' },
    //         }}
    //       >
    //         <Box
    //           sx={{
    //             mx: -3,
    //             mb: 2,
    //             color: 'text.primary',
    //             // pr: { xl: 32 },
    //             display: 'flex',
    //             flex: 1,
    //             fontSize: { xs: 14, xl: 16 },
    //             flexWrap: 'wrap',
    //             justifyContent: 'space-between',
    //           }}
    //         >
    //           <Box
    //             variant="h1"
    //             sx={{
    //               px: 3,
    //               display: 'flex',
    //               alignItems: 'center',
    //               cursor: 'pointer',
    //               color: "#20509e",
    //               fontWeight: Fonts.BOLD,
    //             }}
    //           >
    //             {/* <MailIcon /> */}
    //             <Box
    //               sx={{
    //                 // ml: 2,
    //               }}
    //             >
    //               {user.name}
    //             </Box>
    //           </Box>

    //           <Box
    //             sx={{
    //               px: 3,
    //               display: 'flex',
    //               alignItems: 'center',
    //               cursor: 'pointer',
    //             }}
    //           >
    //             <LocationOnTwoToneIcon></LocationOnTwoToneIcon>
    //             {/* <LanguageIcon /> */}
    //             <Box
    //               sx={{
    //                 // ml: 2,
    //               }}
    //             >
    //               {user.location}
    //             </Box>
    //           </Box>


    //         </Box>


    //       </Box>

    //       <Box
    //         sx={{
    //           pr: { lg: 2, xl: 2 },
    //         }}
    //       >
    //         <Box

    //           sx={{
    //             color: 'grey.700',
    //             mb: 4,
    //             // fontSize: 14,
    //             // fontWeight: Fonts.LIGHT,
    //           }}
    //         >
    //           {user.expertise}<br /> <b>Experience : </b>{user.experience}
    //           {/* {user.info1} */}
    //         </Box>
    //       </Box>
    //       <Box
    //         sx={{
    //           color: "#e31a15",
    //           // mx: { xs: -1, xl: -2 },
    //         }}
    //       >
    //         Coach Specializations :
    //       </Box>
    //       <Box
    //         sx={{
    //           display: 'flex',
    //           alignItems: { md: 'center' },
    //           flexDirection: { xs: 'column', md: 'row' },
    //         }}
    //       >


    //         <Box
    //           sx={{
    //             color: 'grey.700',

    //           }}
    //         >
    //           {/* {user.info2} */}
    //           < span >
    //             <List>
    //               {user.specifications.map(item =>
    //                 <ListItem
    //                   sx={{
    //                     m: 0,
    //                     padding: 0,
    //                   }}
    //                 >
    //                   <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
    //                   <ListItemText primary={item} />
    //                 </ListItem>)}

    //             </List>
    //           </span >

    //         </Box>


    //       </Box>
    //     </Box>
    //   </Box>}
    // </Card>


  );
};


export default Coachlist;

Coachlist.propTypes = {
  user: PropTypes.object.isRequired,
};
