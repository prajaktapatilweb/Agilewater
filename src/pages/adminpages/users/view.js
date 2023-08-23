import React from 'react';
import AppPage from '../../../@crema/hoc/JWTAppPage';
import asyncComponent from '../../../@crema/utility/asyncComponent';

const Auth = asyncComponent(() =>
  import('../../../modules/AdminPages/Users/View.js'),
);
export default AppPage(() => <Auth />);
