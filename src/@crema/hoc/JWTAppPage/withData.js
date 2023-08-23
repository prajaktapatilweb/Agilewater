import React, {useEffect, useMemo} from 'react';
import Router, {useRouter} from 'next/router';
import AppLoader from '../../core/AppLoader';
import {useJWTAuthUser} from '../../utility/AuthHooks';
import {RouteLinks} from 'modules/Constant/AdminPageConst';
import {checkPermission} from '@crema/utility/helper/RouteHelper';
import Error403 from 'modules/errorPages/Error403';
import {Button, Typography} from '@mui/material';
import {Fonts} from 'shared/constants/AppEnums';

// import { checkPermission } from '@crema/utility/Utils';

const withData = (ComposedComponent) => (props) => {
  const {user, isLoading} = useJWTAuthUser();
  const {asPath} = useRouter();
  const queryParams = asPath.split('?')[1];
  const history = useRouter();
  const onGoBackToHome = () => {
    history.back();
  };
  console.log('Wuth data', user, asPath);
  let hasPermission;
  if (user) {
    for (let [k, v] of Object.entries(RouteLinks)) {
      hasPermission =
        v.link === asPath ? checkPermission(v.allowedRole, user?.role) : null;
      // hasPermission =v.link === asPath
      //   ? useMemo(() => checkPermission(v.allowedRole, user?.role),[v.allowedRole, user?.role],)
      //   : null;
      if (hasPermission) {
        break;
      }
    }
    if (!hasPermission) {
      console.log('iinnnndd');
      return (
        <Typography variant='h1'>
          You are not authorise to see this page
          <Button
            variant='contained'
            color='primary'
            sx={{
              fontWeight: Fonts.MEDIUM,
              fontSize: 16,
              textTransform: 'capitalize',
            }}
            onClick={onGoBackToHome}
          >
            Go Back
          </Button>
        </Typography>
      );
    }
  }
  // const allowedRole = RouteLinks.map((item) => console.log('item', item));
  useEffect(() => {
    if (!user && !isLoading) {
      Router.push('/authlogin' + (queryParams ? '?' + queryParams : ''));
    }
  }, [user, isLoading]);
  if (!user || isLoading) return <AppLoader />;

  return <ComposedComponent {...props} />;
};
export default withData;
