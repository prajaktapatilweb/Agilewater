import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import IntlMessages from '@crema/utility/IntlMessages';
import AppScrollbar from '@crema/core/AppScrollbar';
// import CreateContact from '../CreateContact';
import LabelItem from './LabelItem';
import AppsSideBarFolderItem from '@crema/core/AppsSideBarFolderItem';
import {Fonts} from 'shared/constants/AppEnums';
import AppList from '@crema/core/AppList';
import ListEmptyResult from '@crema/core/AppList/ListEmptyResult';
import SidebarPlaceholder from '@crema/core/AppSkeleton/SidebarListSkeleton';
import AddIcon from '@mui/icons-material/Add';
import {Typography, Zoom} from '@mui/material';
// import { labelList, GradeList, folderList } from 'shared/constants/LabelConstant';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useJWTAuthMethod} from '@crema/utility/AuthHooks';
import {Logout} from '@mui/icons-material';
import JWTUserInfo from '@crema/core/AppLayout/components/UserInfo/JWTUserInfo';
import { roterList} from 'modules/Constant/AdminPageConst';
// import {Fonts} from 'shared/constants/AppEnums';

const SideBarContent = () => {
  const {logout} = useJWTAuthMethod();
  return (
    <>
      <Box
        sx={{
          px: {xs: 4, md: 5},
          pt: {xs: 4, md: 5},
          pb: 2.5,
        }}
      >
        <JWTUserInfo />
        {/* <Zoom in style={{transitionDelay: '300ms'}}>
          <Button
            variant='outlined'
            color='primary'
            sx={{
              padding: '8px 28px',
              borderRadius: 8,
              '& .MuiSvgIcon-root': {
                fontSize: 26,
              },
            }}
            startIcon={<Logout />}
            onClick={logout}
          >
            {' '}
            Logout
          </Button>
        </Zoom> */}
      </Box>

      <AppScrollbar className='scroll-app-sidebar'>
        <Box
          sx={{
            pr: 4,
            pb: {xs: 4, md: 5, lg: 6.2},
          }}
        >
          <Link href={`/adminpages`}>
            <Box
              variant='outlined'
              color='primary'
              sx={{
                padding: '8px 8px',
                px: 8,
                borderRadius: 8,
                '& .MuiSvgIcon-root': {
                  fontSize: 26,
                },
                '&:hover,&:focus,&.active': {
                  backgroundColor: 'lightgreen',
                  color: 'black',
                },
              }}
            >
              Dashboard
            </Box>
          </Link>
          {roterList.map((item) => (
            <>
              <Box
                component='h4'
                sx={{
                  mt: {xs: 4, xl: 5},
                  px: {xs: 4, md: 5, lg: 6.2},
                  fontWeight: Fonts.SEMI_BOLD,
                }}
              >
                {item.heading}
              </Box>
              <AppList
                animation='transition.slideLeftIn'
                data={item.labels}
                ListEmptyComponent={
                  <ListEmptyResult
                    loading={true}
                    placeholder={
                      <Box
                        sx={{
                          px: {xs: 4, md: 5, lg: 6.2},
                        }}
                      >
                        <SidebarPlaceholder />
                      </Box>
                    }
                  />
                }
                renderRow={(label) => (
                  <LabelItem key={label.id} label={label} />
                )}
              />
            </>
          ))}
          {/* <List component='nav' aria-label='main mailbox folders'> */}
          {/* </List> */}
          {/* <CreateContact
          //   isAddContact={isAddContact}
          //   handleAddContactClose={handleAddContactClose}
          // /> */}
        </Box>
      </AppScrollbar>
    </>
  );
};

export default SideBarContent;
