import React from 'react';
import AppPage from '../../@crema/hoc/UserPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const Crypto = asyncComponent(() => import('../../modules/Trainer/VijayWade'));
export default AppPage(() => <Crypto />);