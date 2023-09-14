import React from 'react';
import AppPage from '../../@crema/hoc/UserPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const Module = asyncComponent(() => import('../../modules/Coaching/Agilecoaching'));
export default AppPage(() => <Module />);