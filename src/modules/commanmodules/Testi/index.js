import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AppCard } from '@crema';
const Testi = ({ item }) => {
  return (


    <div class="testimonial">

      <div class="pic">

        <Image src={item.photo} width={120} height={120} ></Image>

        {/* <img src="images/img-1.jpg" alt="" /> */}
      </div>

      <p class="description">
        {item.description}
      </p>
      <h3 class="title">{item.name}
        <span class="post"> - Web Developer</span>
      </h3>
    </div>



    // <Box sx={{ px: 1.5, py: 5 }} alignItems='center' justifyContent='center' textAlign='center'>
    //   <AppCard sx={{
    //     p: 2,
    //     backgroundColor: 'background.paper',
    //     borderRadius: 4,

    //   }}

    //   >

    //     <Image src={item.photo} width={200} height={200} alt={'Mentor ' + item.id} />

    //     <Box sx={{ my: 2 }}>
    //       <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem' }}>
    //         {item.name}
    //       </Typography>
    //       <Typography sx={{ mb: 2, color: 'text.secondary' }}>{item.category}</Typography>
    //       <Typography sx={{ mb: 2, color: 'text.secondary', textAlign: 'justify' }} variant="subtitle1">
    //         {item.description}
    //       </Typography>
    //       {/* <Box sx={{ '& img': { height: 26 } }}> */}
    //       {/* eslint-disable-next-line */}
    //       {/* <img src={item.company?.logo} alt={item.company?.name + ' logo'} /> */}
    //       {/* </Box> */}
    //     </Box>
    //   </AppCard>
    // </Box>);
  );
};
export default Testi;
