import React from 'react';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { Box, alpha, Container, Hidden } from '@mui/material';
import { useSidebarContext } from '../../../../utility/AppContextProvider/SidebarContextProvider';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CallBack from 'modules/commanmodules/CallBack';

const NotificationBar = () => {
  const [open, setOpen] = React.useState(true);
  const { sidebarBgColor, sidebarTextColor } = useSidebarContext();
  const [scrollDirection, setScrollDirection] = React.useState(null);
  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    console.log('ffff', window.scrollY, lastScrollY, scrollDirection);

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 ? setOpen(false) : null,
          scrollY - lastScrollY < -10 ? setOpen(true) : null);
      // setScrollDirection(direction);

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection]);
  return (
    <Collapse in={open}>
      <Box
        sx={{
          borderBottom: (theme) =>
            `solid 1px ${alpha(theme.palette.common.black, 0.15)}`,
          padding: '0',
          backgroundColor: sidebarBgColor,
          color: sidebarTextColor,
        }}
      >
        <Container

          sx={{
            maxWidth: { xl: 1400 },
            height: { xl: 35, lg: 35, md: 'auto' },
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '@media (min-width: 768px)': {
                flexDirection: 'row',
              },
            }}
          >
            <Hidden mdDown>
              <Box
                sx={{
                  width: '100%',
                  maxHeight: 300,
                  '@media (min-width: 768px)': {
                    width: '50%',
                  },
                }}
              >
                <CallBack />
              </Box>
            </Hidden>
            <Box
              sx={{
                width: '100%',
                textAlign: {
                  xs: 'center',
                  sm: 'center',
                  md: 'right',
                },
                // textAlign: 'right',
                '@media (min-width: 768px)': {
                  width: '50%',
                },
              }}
            >
              {/* <Alert
            sx={{
              backgroundColor: 'transparent !important',
              padding: 0,
              textAlign: 'center',
              color: 'inherit',
              '& .MuiAlert-message': {
                flex: 1,
              },
              '& .MuiAlert-action': {
                ml: 2.5,
              },
            }}
            icon={false}
            action={
              <IconButton
                aria-label='close'
                color='inherit'
                size='small'
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize='inherit' />
              </IconButton>
            }
          >

          </Alert> */}
              <IconButton aria-label='facebook'>
                {' '}
                <a
                  href='https://www.facebook.com/AgileWatersConsulting/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='facebook'
                >
                  <FacebookIcon sx={{ color: '#1b4e9b' }} />{' '}
                </a>
              </IconButton>
              <IconButton aria-label='twitter'>
                <a
                  href='https://twitter.com/AgilewatersCo'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='twitter'
                >
                  <TwitterIcon sx={{ color: '#00aeef' }}></TwitterIcon>
                </a>
              </IconButton>
              <IconButton aria-label='instagram'>
                <a
                  href='https://www.instagram.com/agilewatersconsulting/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='instagram'
                >
                  <InstagramIcon sx={{ color: '#f26f37', Width: 30, Height: 30 }}></InstagramIcon>
                </a>
              </IconButton>
              <IconButton aria-label='linkedin'>
                <a
                  href='https://www.linkedin.com/company/agilewaters-consulting/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='linkedin'
                >
                  <LinkedInIcon style={{ color: '#0277bd', Width: 18, Height: 18 }}> </LinkedInIcon>
                </a>
              </IconButton>
              <IconButton aria-label='youtube'>
                <a
                  href='https://www.youtube.com/channel/UCaHUj0eP9LiEK5zL7QrNbNw'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='youtube'
                >
                  <YouTubeIcon sx={{ color: '#d50000' }}></YouTubeIcon>
                </a>
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Collapse>
  );
};

export default NotificationBar;
