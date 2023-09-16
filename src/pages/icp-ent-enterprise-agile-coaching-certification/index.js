import React from 'react';
import AppPage from '../../@crema/hoc/UserPage';
import asyncComponent from '../../@crema/utility/asyncComponent';


const Crypto = asyncComponent(() => import('../../modules/Agile/ICPENT'));
export default AppPage(() => <Crypto />);