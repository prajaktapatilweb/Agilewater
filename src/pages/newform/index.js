import React from 'react';
import AppPage from '../../@crema/hoc/UserPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const Crypto = asyncComponent(() =>
  import('../../modules/commanmodules/NewForm'),
);
export default AppPage(() => <Crypto />);
